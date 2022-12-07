import React from 'react';

const Grid = () => {
    return (
        <>
            <div className='container mx-auto py-10 grid grid-flow-col gap-4'>
                <div className='bg-purple-500 w-1/2 h-[100px]'></div>
                <div className='bg-purple-500 w-3/5 h-[100px]'></div>
                <div className='bg-purple-500 w-1/6 h-[100px]'></div>
                <div className='bg-purple-500 w-full h-[100px]'></div>
            </div>
        </>
    )
}

export default Grid;
