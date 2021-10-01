import SideBar from '../../components/sideBar/SideBar';
import SinglePost from '../../components/singelPage/SinglePost';
import './single.css';
function Single() {
    return (
      <div className="single">
      <SinglePost />
      <SideBar/>
        
        
      </div>
    );
  }
  
  export default Single;