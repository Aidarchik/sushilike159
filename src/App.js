import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Content from './components/content';
import Sidebar from './components/drag/Sidebar';
import Header from './components/header';

const App = () => {
  return (
    <div className='bg-hero-pattern bg-cover h-screen bg-scroll overflow-auto bg-no-repeat px-4'>
      <Header />
      <div className='bg-white container h-[80vh] m-auto mt-16 dndflow'>
        <ReactFlowProvider>
          <Sidebar />
          <Content />
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default App;