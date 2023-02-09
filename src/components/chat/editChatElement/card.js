import React from 'react';

const Card = ({ post, remove, update, loading, nodeValue }) => {
    const imgPath = 'https://sushilike159.ru/images/'

    const data = {
        "author": "Aidar",
        "title": "Title",
        "content": "Тычкак"
    }

    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
            <div className="p-5">
                {(loading.isDelete & loading.id === post._id) || (loading.isUpdate & loading.id === post._id) ?
                    (
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{loading.isDelete ? 'Удаление...' : 'Обновление...'}</h5>
                    ) : (
                        <>
                            <span>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post._id}</h5>
                            </span>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nodeValue}</p>
                            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => { remove(post._id) }}>
                                Удалить
                            </button>
                            <button className="inline-flex items-center ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => { update({ _id: post._id, ...data }) }}>
                                Редактировать
                            </button>
                            {post.picture ? <img src={imgPath + post.picture} alt="" className='w-1/5 h-1/5' /> : ''}
                        </>
                    )}
            </div>
        </div>
    )
}

export default Card;