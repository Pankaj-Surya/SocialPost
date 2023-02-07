import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);


  const navigate =  useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3001/posts/allPost").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPosts.map((post) => {
        return (
          <div className="post" key={post.id} onClick={()=>{navigate(`/post/${post.id}`)}} >
            <div className="title"> {post.title} </div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;