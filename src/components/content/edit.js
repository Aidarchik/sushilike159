import React from 'react';

const Edit = (props) => {

    const { onSend } = props;



    return (
        <>
            <div className="fixed container mx-auto max-w-3xl bottom-0 left-0 right-0">
                <div className="flex">
                    <input id='edit' className='h-12 w-full text-lg px-10 py-1 focus:outline-none bg-gray-900 text-white opacity-90' type="text" placeholder='' />
                    <svg onClick={onSend} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-32 h-12 px-2 text-white bg-blue-400 rounded-br-lg hover:bg-blue-500 opacity-90 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Edit;