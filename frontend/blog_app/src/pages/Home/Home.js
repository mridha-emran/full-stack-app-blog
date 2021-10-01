import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

import SideBar from "../../components/sideBar/SideBar";
import "./home.css"
function Home() {
    return (
      <>
          <Header/>
          <div className="Home">
          <Posts />
            <SideBar />
        
         </div>
      </>
    );
  }
  
  export default Home;