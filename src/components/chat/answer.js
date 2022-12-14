import React from 'react';

const Answer = (props) => {
    const { data } = props
    return (
        <>
            <div className='flex justify-between md:justify-start'>
                <div className='bg-gray-800 text-white text-sm px-3 py-1 rounded-3xl m-2 self-start md:self-auto'>{data}</div>
                <div className='w-3/4'></div>
            </div>
        </>
    )
}

export default Answer;