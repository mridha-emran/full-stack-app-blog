import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import './SideBar.css';
import axios from "axios";

function SideBar() {
  const [cats, setCats] =useState([])

  useEffect( ()=>{
    const  getCats=async () =>{
       const res= await axios.get("http://localhost:8000/catagories")
       setCats(res.data)
     };
     getCats()
     
    }, [])

    return (
      <div className="sideBare">
         <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATGORIES</span>
        <ul className="sidebarelist">

          {cats.map((elem)=>{
           <Link to={`/?cat=${elem.name}`} className="link">
          <li className="sidebareListItem">{elem.name}</li>
          </Link>
          })}
       
        </ul>
        
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
        
        
      </div>
    );
  }
  
  export default SideBar;