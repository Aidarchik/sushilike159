import React from 'react';

const Form = () => {
    return (
        <>
            <div className='bg-blue-100 rounded-md p-8'>
                <h2 className='text-lg mb-4 '>Subscribe Me</h2>
                <form className='flex flex-wrap text-lg -m-2 w-full'>
                    <input className='border-2 border-blue-400 rounded-md placeholder-blue-400 px-8 py-4 m-2 lg:w-2/5' type='text' placeholder='Your Name'></input>
                    <input className='border-2 border-blue-400 rounded-md placeholder-blue-400 px-8 py-4 m-2 lg:w-2/5' type='email' placeholder='Your Email'></input>
                    <button className='bg-blue-400 border-2 border-blue-400 rounded-md px-8 py-4 text-white m-2 lg:w-1/5' type='submit'>Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default Form;
