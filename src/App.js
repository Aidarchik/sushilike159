import React from 'react';
import Content from './components/content/content';
import Header from './components/header';

const App = () => {
  return (
    <div className='bg-hero-pattern bg-cover h-screen bg-scroll overflow-auto bg-no-repeat px-4'>
      <div className='bg-scroll'>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default App;