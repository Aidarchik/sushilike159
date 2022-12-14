import React from 'react';

const Question = (props) => {
    const { data } = props
    return (
        <>
            <div className='flex justify-between md:justify-start'>
                <div className='w-1/3 md:w-0'></div>
                <div className='bg-violet-500 text-white text-sm px-3 py-1 rounded-2xl m-2 self-end md:self-start'>{data}</div>
            </div>
        </>
    )
}

export default Question;