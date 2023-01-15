import React from 'react'

const EditChat = (props) => {

    const { add } = props
    const data = {
        "author": "Aidar",
        "title": "Title",
        "content": "Content"
    }

    return (
        <>
            <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
                <div className="p-5">

                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => { add(data) }}>
                        Добавить
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditChat