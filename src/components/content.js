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
                    <ViewChat />
                    <Chat data={sendValue} />
                </div>
                <Edit onSend={onSend} />
            </main>
        </>
    )
}

export default Content;