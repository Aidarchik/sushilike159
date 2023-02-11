import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Header from './components/header';
import VkBot from './modules/vkBot/vkBot';

const App = () => {
  return (
    <div className='bg-white h-[100vh] m-auto dndflow'>
      <ReactFlowProvider>
        <VkBot />
      </ReactFlowProvider>
    </div>
  );
};

export default App;