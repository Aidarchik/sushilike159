import React from 'react';
export const Message = (props) => {
    const { message, keyboard } = props.data.data
    console.log(props.data.data.message)
    return (
        <div className="w-72 min-h-48 bg-white p-2 rounded-lg text-gray-400 border-2 border-sky-200 text-xs flex flex-col justify-center font-roboto">
            <div className='pb-2 text-center text-base font-bold text-sky-500'>Отправить сообщение</div>
            <div className='flex flex-col bg-sky-100 p-2 rounded-md'>
                <div className="text-justify bg-white p-2 rounded-md text-[11px]">
                    {message}
                </div>
                <div
                    className="bg-white mt-2 py-1 text-center rounded-md"
                >
                    {keyboard.urlButton.label}
                </div>
                <div
                    className="bg-white mt-2 py-1 text-center rounded-md "
                >
                    {keyboard.callbackButton.label}
                </div>
                <div
                    className="bg-white mt-2 py-1 text-center rounded-md "
                >
                    {keyboard.textButton.label}
                </div>
                <button
                    className="bg-white mt-2 py-1 text-center rounded-md text-sky-500 hover:bg-sky-400 hover:text-white"
                >
                    + Добавить кнопку
                </button>
            </div>
            <button className='my-2 py-1 text-center rounded-md text-sky-500 border-2 border-sky-200 hover:border-sky-300'
            >
                + Добавить контент
            </button>
        </div>
    )
}
