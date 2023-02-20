import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
    return (
        <>
            <header className='container mx-auto text-white'>
                <div className='flex justify-between py-4 items-center'>
                    <span className='font-bold text-3xl text-pink-500' draggable>SushiLike</span>
                    <div className='font-semibold text-pink-600 space-x-2'>
                        {!user ? (
                            <Link to={'/login'}>Login</Link>
                        ) : (
                            <>

                                <Link to={'/'} className='bg-red-500 py-2 px-4 rounded-full text-white hover:bg-red-600'>ReactFlow</Link>
                                <Link to={'/views'} className='bg-red-500 py-2 px-4 rounded-full text-white hover:bg-red-600'>VIEWS</Link>
                                <Link to={'/logout'} >Logout</Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;