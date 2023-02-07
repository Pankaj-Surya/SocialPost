import React from 'react'
import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/createpost"> Create A Post</Link>
        <Link to="/"> Home Page</Link>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/createpost" exact element={<CreatePost/>} />
          <Route path="/post/:id" exact element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;