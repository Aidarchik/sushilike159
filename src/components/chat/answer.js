import React from 'react';

const Answer = (props) => {
    const { data } = props
    return (
        <>
            <div className='flex justify-between lg:justify-start'>
                <div className='bg-gray-800 text-white px-3 py-1 rounded-3xl m-2 self-start lg:self-auto' >{data}</div>
                <div className='w-1/3 lg:w-0'></div>
            </div>
        </>
    )
}

export default Answer;