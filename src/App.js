import React from 'react';
import Content from './components/content/content';
import Header from './components/header';

const App = () => {

  return (
    <div className='bg-hero-pattern bg-cover h-screen bg-fixed bg-no-repeat px-4'>
      <Header />
      <Content />
    </div>
  );
};

export default App;