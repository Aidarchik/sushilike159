import React from 'react';
import Btn from './components/btn';
import Content from './components/content';
import Edit from './components/edit';
// import Grid from './components/grid';
import Header from './components/header';

const App = () => {
  return (
    <div className='bg-hero-pattern bg-cover bg-fixed bg-no-repeat px-4'>
      <Header />
      <Content />
      <Edit />
      {/* <Grid /> */}
    </div>
  );
};

export default App;