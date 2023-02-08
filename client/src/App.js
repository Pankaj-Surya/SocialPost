import React from 'react'
import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/login"> Login</Link>
          <Link to="/register"> Registration</Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/createpost" exact element={<CreatePost/>} />
          <Route path="/post/:id" exact element={<Post/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;