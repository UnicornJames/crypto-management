import React, { useState } from "react";

const Body = () => {
  const money = 0.1287; 
  const [coinmenu, setCoinMenu] = useState(false);
  const [datemenu, setDateMenu] = useState(false);
  const [selectedCoin, setCoinSelect] = useState(0);
  const [selectedDate, setDateSelect] = useState(0);

  const crypto_prices = [
    {
      name: "Bitcoin",
      icon: "/icon/btc.png",
      symbol: "BTC",
      price: "20494.60121",
      MarketCap: "395548000000",
      Return_7D: "-0.006267993",
      PL1D: "-0.099202175",
      PL7D: "-0.28434098",
      PL30D: "-0.356017995",
      vol30d: "0.49179659",
    },
    {
      name: "Ethereum",
      icon: "/icon/eth.png",
      symbol: "ETH",
      price: "1572.979515",
      MarketCap: "395548000000",
      Return_7D: "-0.006267993",
      PL1D: "-0.120415787",
      PL7D: "-0.337049123",
      PL30D: "-0.454253689",
      vol30d: "0.49179659",
    },
    {
      name: "USD Coin",
      icon: "/icon/usdc.png",
      symbol: "USDC",
      price: "1",
      MarketCap: "395548000000",
      Return_7D: "-0.006267993",
      PL1D: "-0.001",
      PL7D: "-0.001",
      PL30D: "-0.001",
      vol30d: "0.49179659",
    },
    {
      name: "Tether",
      icon: "/icon/usdt.png",
      symbol: "USDT",
      price: "1",
      MarketCap: "395548000000",
      Return_7D: "-0.006267993",
      PL1D: "-0.001",
      PL7D: "-0.001",
      PL30D: "-0.001",
      vol30d: "0.49179659",
    },
    {
      name: "BNB",
      icon: "/icon/bnb.png",
      symbol: "BNB",
      price: "326.3214966",
      MarketCap: "395548000000",
      Return_7D: "0.192454972",
      PL1D: "-0.109898266",
      PL7D: "-0.270927745",
      PL30D: "-0.33112603",
      vol30d: "0.49179659",
    },
  ];

  const icons = [
    "/icon/btc.png",
    "/icon/eth.png",
    "/icon/usdc.png",
    "/icon/usdt.png",
    "/icon/bnb.png",
  ];

  const dateranges = [
    {name:"PL1D", date:1, text:"1 day"}, 
    {name:"PL7D", date:7, text:"7 days"}, 
    {name:"PL30D", date:30, text:"30 days"}
  ];

  const handleChangeDataRange = (index) => {
    setDateSelect(index);
    setDateMenu(!datemenu);
  };

  const handleCoinSelected = (index) => {
    setCoinSelect(index);
    setCoinMenu(!coinmenu);
  }

  const range = dateranges[selectedDate].name;

  const pvlpercent = parseFloat(crypto_prices[selectedCoin][range]).toFixed(2);
  const pvlvalue = parseFloat(
    money * crypto_prices[selectedCoin][range] * crypto_prices[selectedCoin].price,
  ).toFixed(2);

  return (
    <div>
      <div className="md:flex justify-center items-center md:px-20 px-5 py-28">
        <div className="text-center lg:mr-20 mr-5 mb-20 md:max-w-[600px]">
          <p className="text-6xl text-white font-semibold mb-10">
            Manage your crypto portfolio risk
          </p>
          <p className="text-[#ddd] mb-10">
            It can be difficult to manage your risk in this highly volatile
            crypto market. One Cigma is here to help you with that.
          </p>
          <div className="flex justify-center">
            <button className="border border-black rounded-lg bg-[#000000] text-white py-2 px-4">
              Manage risk
            </button>
          </div>
        </div>

        <div className="border rounded-lg bg-[#ffffff00] lg:p-10 p-5 md:max-w-[500px] md:min-w-[320px]">
          <p className="md:block flex justify-center mb-8 text-[#ddd] text-xl">
            Calculate the potential risk you are taking
          </p>
          <p className="w-4/12 text-center text-white">You have</p>
          <div className="mb-8 flex">
            <div className="relative text-center text border border-white-center text-white rounded-lg py-3 mr-2 w-4/12">
              <p className="text-[#ddd] font-semibold py-1">{money}</p>
            </div>

            <div className="relative content-center text border border-white-center text-white rounded-lg py-3 mr-2 w-4/12">
              <button className={`flex items-center py-1 px-2 text-white w-full`} onClick={(e) => setCoinMenu(!coinmenu)}>
                <img src={icons[selectedCoin]} width={20} height={20} alt="" />
                <p className="w-full text-center">{crypto_prices[selectedCoin].symbol}</p>
                <img src="/icon/down.svg" className={`${!coinmenu ? "block" : "hidden"} mr-2`} width={10} height={10} alt="" />
                <img src="/icon/up.svg" className={`${coinmenu ? "block" : "hidden"} mr-2`} width={10} height={10} alt="" />
              </button>
              <div className={`${coinmenu ? "block" : "hidden"} absolute rounded-b-lg bg-[#00000066] p-2 text-white`}>
                {crypto_prices.map((coin, index) => (
                  <button className="flex" onClick={() => handleCoinSelected(index)}>
                    <img src={icons[index]} className="mr-2" width={20} height={20} alt="" />
                    {coin.symbol}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative content-center border border-white text-center text-white rounded-lg py-3 w-4/12">
              <button className="flex items-center p-1 w-full" onClick={(e) => setDateMenu(!datemenu)}>
                <div className="w-full justify-center flex">
                  {dateranges[selectedDate].text}
                </div>
                <img src="/icon/down.svg" className={`${!datemenu ? "block" : "hidden"} mr-2`} width={10} height={10} alt="" />
                <img src="/icon/up.svg" className={`${datemenu ? "block" : "hidden"} mr-2`} width={10} height={10} alt="" />
              </button>
              <div className={`${datemenu ? "block" : "hidden"} absolute rounded-b-lg bg-[#00000066] p-2 text-left`}>
                {dateranges.map((daterange, index) => (
                  <button className="flex w-full" onClick={() => handleChangeDataRange(index)}>
                    {daterange.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="mb-10 text-center text-[#ddd] text-[30px] font-bold">
              The potential loss of{" "}
              <le className="crypto_name text-[30px] font-bold">
                {crypto_prices[selectedCoin].name}
              </le>{" "}
              over{" "}
              <le className="text-[#ffd100] text-[30px] font-bold">
                {dateranges[selectedDate].text}
              </le>{" "}
              is{" "}
              <le className="text-[#ffd100] text-[30px] font-bold">
                {pvlpercent}%
              </le>{" "}
            </p>
            <p className="text-center text-[#ddd] text-[30px] font-bold">
              Your risk is{" "}
              <le className="text-[#ffd100] text-[30px] font-bold">
                ${pvlvalue}
              </le>
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:px-20 px-5 mt-28 overflow-x-auto">
        <table className="risk_table text-white w-full space-between">
          <thead>
            <th className="min-w-[20px]">#</th>
            <th className="min-w-[180px]">Name</th>
            <th className="min-w-[120px]">Price</th>
            <th className="min-w-[100px]">Risk</th>
            <th className="min-w-[100px]">30d % PVL</th>
            <th className="min-w-[100px]">24h %</th>
            <th className="min-w-[100px]">Volume 24h</th>
            <th className="min-w-[120px]">Marketcap</th>
            <th className="min-w-[120px]">Market dominance %</th>
            <th className="min-w-[120px]">Last 7 days</th>
          </thead>
          <tbody>
            {crypto_prices.map((crypto, index) => {
              return (
                <tr className="text-[#ddd] h-8 items-center">
                  <td>{index + 1}</td>
                  <td className="flex pt-1">
                    <img
                      src={icons[index]}
                      width={24}
                      height={20}
                      className="mr-2"
                      alt=""
                    />{" "}
                    {crypto.name} {crypto.symbol}
                  </td>
                  <td>{crypto.price}</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                  <td>{crypto.MarketCap}</td>
                  <td>12</td>
                  <td>chart</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex md:px-20 px-5 mt-20 justify-center">
        <button className="text-white font-semibold flex items-center">
          See the full list of cryptocurrencies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>

      <div className="md:flex justify-center md:px-20 px-5 mt-48 pb-20">
        <div className="lg:mr-20 mr-5 mb-20 md:max-w-[500px] md:w-6/12 ">
          <p className="text-center text-4xl text-white font-semibold mb-10">
            Before buying a risky coin, check One Cigma
          </p>
          <p className="text-center text-[#ddd] mb-10">
            It’s hard to get your emotions out of the way when buying a coin
            that might be way too risky. That’s why you should always check the
            Potential Value Loss before buying any coin.
          </p>
          <div className="flex justify-center">
            <button className="text-white font-semibold flex items-center">
              See the full list of cryptocurrencies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ml-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="border rounded-lg h-[300px] bg-white md:max-w-[500px] md:min-w-[320px] md:w-6/12">
          <div className="flex p-2">
            <div className="border border-black rounded-full p-1 w-0 mx-1"></div>
            <div className="border border-black rounded-full p-1 w-0 mx-1"></div>
            <div className="border border-black rounded-full p-1 w-0 mx-1"></div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
