import React from 'react';
import Content from './components/content';
import Header from './components/header';

const App = () => {
  return (
    <div className='bg-hero-pattern bg-cover h-screen bg-scroll overflow-auto bg-no-repeat px-4'>
      <Header />
      <div className='bg-white container h-full m-auto mt-16'>
        <Content />
      </div>
    </div>
  );
};

export default App;