import React from 'react';

const Edit = () => {
    return (
        <>
            <div className="fixed container mx-auto max-w-3xl bottom-0 left-0 right-0">
                <div className="flex">
                    <input className='h-12 w-full text-lg px-10 py-1 focus:outline-none bg-gray-900 text-white opacity-90' type="text" placeholder='Text' />
                    <button className='px-2 text-white text-lg bg-blue-400 rounded-tr-lg rounded-br-lg hover:bg-blue-500'>Отправить</button>
                </div>
            </div>
        </>
    )
}

export default Edit;