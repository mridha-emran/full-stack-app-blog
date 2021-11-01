import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import { useLocation } from 'react-router'

import SideBar from "../../components/sideBar/SideBar";

import axios from "axios";
import "./home.css"
function Home() {
  const [posts, setPosts] = useState([]);
   const {search}=useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8000/post" + search);
      console.log(res)
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
    return (
      <>
          <Header/>
          <div className="Home">
          <Posts  posts={posts} />
            <SideBar />
        
         </div>
      </>
    );
  }
  
  export default Home;