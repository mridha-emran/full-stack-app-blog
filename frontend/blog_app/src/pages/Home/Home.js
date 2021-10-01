import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import SideBar from "../../components/sideBar/SideBar";
import "./home.css"
function Home() {
    return (
      <>
          <Header/>
          <div className="Home">
            <Post />
            <SideBar />
        
         </div>
      </>
    );
  }
  
  export default Home;