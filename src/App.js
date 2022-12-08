import React from 'react';
import Btn from './components/btn';
import Content from './components/content';
import Grid from './components/grid';
import Header from './components/header';

const App = () => {
  return (
    <div className='bg-hero-pattern bg-cover bg-fixed bg-no-repeat px-4'>
      <Header />
      <Content />
      <div className="flex flex-col">
        <Btn value='Да уж' />
        <Btn value='Ага' />
        <Btn value='Ну что поделаешь' />
        <Btn value='Ахаха' />
        <Btn value='Что закажем?' />
        <Btn value='А давай познакомимся?' />
        <Btn value='Ну ты даешь конечно' />
        <Btn value='Какую книгу читаешь?' />
        <Btn value='А как пройти в билиотеку?' />
        <Btn value='сколько время?' />
      </div>
      <Grid />
    </div>
  );
};

export default App;