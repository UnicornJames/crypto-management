import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-4'>
            <p className='text-white my-4 font-semibold block'>One Cigma<br /> Risk Analytics</p>
            <div className='flex'>
                <input className='border rounded-xl outline-none border-[#ddd] text-[#ddd] bg-[#00000000] py-1 px-5 md:w-60 mr-2 md:block hidden' placeholder='Search cryptocurrencies...'></input>
                <div className='flex'>
                    <button className='text-[#ddd] px-3 py-1 md:w-32 mr-2'>Sign in</button>
                    <button className='border rounded-xl border-[#ddd] text-[#ddd] bg-[#00000000] px-3 py-1 md:w-32'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header