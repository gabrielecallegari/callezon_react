import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import PageNotFound from './Main/PageNotFound/PageNotFound';
import Login from './Main/Login/Login'
import Home from './Main/Home/Home';
import Profile from './Main/Profile/Profile'


window.isLogged = false

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
