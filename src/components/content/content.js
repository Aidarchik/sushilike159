import React, { useState } from 'react';
import Edit from './edit';
import Chat from './chat/view';
import ViewChat from './chat/editChatElement/viewChat.js';

const Content = () => {

    const [sendValue, setSendValue] = useState('');

    const onSend = () => {
        setSendValue(document.querySelector('#edit').value);
        document.querySelector('#edit').value = '';
    }

    return (
        <>
            <main className='container mx-auto py-12'>
                <h1 className='text-center text-3xl font-bold'>Sushilike</h1>
                <div className='flex'>
                    <div className='pt-3 w-1/2 text-justify bg-white bg-opacity-70 rounded-tl-lg rounded-tr-lg py-1 px-2 mt-5 mx-1 shadow-sm'>
                        <ViewChat />
                    </div>
                    <Chat data={sendValue} />
                </div>
                <Edit onSend={onSend} />
            </main>
        </>
    )
}

export default Content;