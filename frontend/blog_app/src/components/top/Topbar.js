import './topbar.css';
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="top">
    <div className="top-left">
    <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
    </div>
    <div className="top-center">
      <ul className="top-list">
        <li className="top-list-item"> <Link className="link" to="/">
              HOME
            </Link></li>
        <li className="top-list-item"> <Link className="link" to="/">
              ABOUT
            </Link></li>
        <li className="top-list-item"> <Link className="link" to="/">
              CONTACT
            </Link></li>
        <li className="top-list-item"> <Link className="link" to="/write">
              WRITE
            </Link></li>
        {/* <li className="top-list-item"> <Link className="link" to="/login">
              LOGOUT
            </Link></li> */}
          <li className="topListItem"> <Link className="link" to="/login">
                LOGIN
              </Link>
            </li><li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
      </ul>
    </div>
    <div className="top-right">
    <img className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
    <i className="topSearchIcon fas fa-search"></i>
    </div>

        
      
    </div>
  );
}

export default Topbar;
