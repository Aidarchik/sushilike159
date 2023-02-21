import React from 'react';
import VkBot from './modules/vkBot/vkBot';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewChat from './components/chat/editChatElement/viewChat';
import Login from './pages/login';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetch('https://sushilike159.ru/api/auth/login/success', {
          method: 'GET',
          // credentials: 'include',
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json',
          //   'Access-Control-Allow-Credentials': true,
          // },
        })
        console.log(user);
        if (user.status === 200) setUser(user.json())
        throw new Error('Аутентификация не удалась')
      } catch (error) {
        console.log(error);
      }
    }
    getUser()
  }, [])

  console.log(user);

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