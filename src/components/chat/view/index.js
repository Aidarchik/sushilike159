import React from 'react'
import Answer from './answer'
import Question from './question'

const Chat = (props) => {

    const { data } = props

    return (
        <div className='pt-3 w-screen items-end text-justify bg-white bg-opacity-70 rounded-tl-lg rounded-tr-lg py-1 px-2 mt-5 mx-1 shadow-md'>
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
            <Answer data={'Привет'} />
            <Question data={data} />
        </div>
    )
}

export default Chat