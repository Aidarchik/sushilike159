import React from 'react';
import { Handle, Position } from 'reactflow';
export const Message = (props) => {
    const { message, keyboard, attachment } = props.data.data
    // console.log(attachment);
    return (
        <div className="w-72 min-h-48 bg-slate-800 p-2 rounded-lg text-white shadow-vk shadow-slate-400 text-xs flex flex-col justify-center font-roboto">
            <div className='pb-2 text-center text-base font-bold'>Отправить сообщение</div>
            <div className='flex flex-col bg-slate-700 p-2 rounded-xl shadow-vk shadow-slate-400'>
                <img
                    src={attachment}
                    className='w-auto h-auto rounded-lg'
                    alt=''
                />
                <div className="text-justify p-2 text-[11px] text-white">
                    {message}
                </div>
                <div
                    className="bg-slate-500 mt-2 py-1 px-3 text-center rounded-lg relative flex justify-between items-center"
                >
                    <div></div>
                    <div>{keyboard.urlButton.label}</div>
                    <div className='w-[10px] h-[10px] bg-orange-400 border rounded-full items-end'></div>
                    <Handle
                        id={keyboard.urlButton.label}
                        style={{ right: 0, position: 'absolute', width: '100%', height: '100%', opacity: 0, borderRadius: 0 }}
                        type="source"
                        position={Position.Right}
                        isValidConnection={
                            (params) => {
                                // console.log(params)
                                if (params.source === params.target) { return false }
                                return true
                            }}

                    >

                    </Handle>
                </div>
                <div
                    className="bg-slate-500 mt-2 py-1 px-3 text-center rounded-lg relative flex justify-between items-center"
                >
                    <div></div>
                    <div className=''>{keyboard.callbackButton.label}</div>
                    <div className='w-[10px] h-[10px] bg-orange-400 border rounded-full items-end'></div>
                    <Handle
                        id={keyboard.callbackButton.label}
                        style={{ right: 0, position: 'absolute', width: '100%', height: '100%', opacity: 0, borderRadius: 0 }}
                        type="source"
                        position={Position.Right}
                        isValidConnection={
                            (params) => {
                                // console.log(params)
                                if (params.source === params.target) { return false }
                                return true
                            }}
                    />
                </div>
                <div
                    className="bg-slate-500 mt-2 py-1 px-3 text-center rounded-lg relative flex justify-between items-center"
                >
                    <div></div>
                    <div className=''>{keyboard.textButton.label}</div>
                    <div className='w-[10px] h-[10px] bg-orange-400 border rounded-full items-end'></div>
                    <Handle
                        id={keyboard.textButton.label}
                        style={{ right: 0, position: 'absolute', width: '100%', height: '100%', opacity: 0, borderRadius: 0 }}
                        type="source"
                        position={Position.Right}
                        isValidConnection={
                            (params) => {
                                // console.log(params)
                                if (params.source === params.target) { return false }
                                return true
                            }}
                    />
                </div>
                <button
                    className="bg-white mt-2 py-1 text-center rounded-md text-sky-500 hover:bg-sky-400 hover:text-white"
                >
                    + Добавить кнопку
                </button>
            </div>
            <button className='my-2 py-1 text-center rounded-md shadow-vk shadow-slate-400 hover:bg-sky-400 hover:text-white hover:shadow-none'
            >
                + Добавить контент
            </button>
        </div >
    )
}
