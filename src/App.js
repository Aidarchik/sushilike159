import React from 'react';
import VkBot from './modules/vkBot/vkBot';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewChat from './components/chat/editChatElement/viewChat';
import Login from './pages/login';

const App = () => {
  const user = false
  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<VkBot />} />
        <Route path='/views' element={<ViewChat />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;