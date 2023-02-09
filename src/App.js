import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Header from './components/header';
import VkBot from './modules/vkBot/vkBot';

const App = () => {
  return (
    <div className='bg-hero-pattern bg-cover h-screen bg-scroll overflow-auto bg-no-repeat px-4'>
      <Header />
      <div className='bg-white container h-[70vh] m-auto mt-16 dndflow'>
        <ReactFlowProvider>
          <VkBot />
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default App;