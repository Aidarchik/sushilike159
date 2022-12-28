import React from 'react';

const Card = (props) => {
    const { post } = props
    return (
        <>
            <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
                <span>

                </span>
                <div className="p-5">
                    <span>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </span>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </span>
                    <img src={`https://sushilike159.ru/images/35ec1a5d-59ea-413d-99f0-f1216cc18211.jpg`} alt="" className='w-16 h-16' />
                </div>
            </div>
        </>
    )
}

export default Card;