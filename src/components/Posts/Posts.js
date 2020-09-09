import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  const [dummyData] = useState(props)
  console.log(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {dummyData.post.map(element => {
        console.log(element);
        return <Post post={element} key={Math.random()}/>
      })}
    </div>
  );
};


export default Posts;
