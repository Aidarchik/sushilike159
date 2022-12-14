import React from 'react';
import Answer from './chat/answer';
import Question from './chat/question';

const Content = () => {

    const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas quod minima minus dolores? Officiis sit quod sequi architecto adipisci itaque, fugit quas, eaque, quae fugiat nemo earum consectetur tempora!';

    return (
        <>
            <main className='container mx-auto py-12 max-w-3xl'>
                <h1 className='text-center text-3xl font-bold'>Sushilike</h1>
                <div className='pt-3 mx-auto text-justify bg-white bg-opacity-70 rounded-tl-lg rounded-tr-lg py-1 px-2 mt-5'>
                    <Answer data={'Привет'} />
                    <Question data={data} />
                    <Answer data={data} />
                    <Question data={'Привет'} />
                    <Answer data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Question data={data} />
                    <Answer data={data} />
                </div>
            </main>
        </>
    )
}

export default Content;