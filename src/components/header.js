import React from 'react';

const Header = () => {
    return (
        <>
            <header className='container mx-auto text-white'>
                <div className='flex justify-between pt-10'>
                    <span className='font-bold text-3xl text-pink-500' draggable>SushiLike</span>
                    <div className='font-semibold text-pink-600 space-x-2'>
                        <a href='/' className='hover:underline'>About</a>
                        <a href='/' className='bg-red-500 py-2 px-4 rounded-full text-white hover:bg-red-600'>Contacts</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;