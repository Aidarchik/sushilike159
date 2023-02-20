import React from 'react'
import vk from './../assets/vk.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-[calc(100vh-68px)] overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-pink-700 underline">
                    Авторизация
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link to={"#"} className="text-xs text-pink-600 hover:underline">
                        Забыли пароль?
                    </Link>
                    <div className="mt-6">
                        <button className="w-full py-2 px-4 tracking-wide text-white transition-colors duration-200 transform bg-pink-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
                            Войти
                        </button>
                    </div>
                    <a href="https://sushilike159.ru/api/vk" className='mt-6 flex items-center justify-around cursor-pointer px-2 rounded-md  hover:bg-blue-200'>
                        <img className='w-10 h-10' src={vk} alt="Авторизоваться в VK" />
                    </a>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Нет аккаунта?{" "}
                    <Link to={"#"} className="font-medium text-pink-600 hover:underline">
                        Регистрация
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login