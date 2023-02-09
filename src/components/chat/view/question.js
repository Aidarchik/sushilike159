import React from 'react';

const Question = (props) => {
    const { data } = props
    return (
        <>
            <div className='flex justify-between'>
                <div className='w-1/3'></div>
                <div className='bg-violet-500 text-white px-3 py-1 rounded-2xl m-2 self-end'>{data}</div>
            </div>
        </>
    )
}

export default Question;