import React from 'react';

const Btn = (props) => {

    const { value } = props
    return (
        <div>
            <div className="flex justify-center">
                <div className='text-center bg-blue-500 rounded-full py-2 px-4 text-white hover:bg-red-600 m-4 hover:cursor-pointer'>{value}</div>
            </div>
        </div>
    )
}

export default Btn;
