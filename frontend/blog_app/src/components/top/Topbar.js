import './topbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context"
function Topbar() {
  const { user ,  dispatch  } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
        <li className="top-list-item"  onClick={handleLogout}> <Link className="link" to="/login">
        {user && "LOGOUT"}
            </Link></li>
          {/* <li className="topListItem"> <Link className="link" to="/login">
                LOGIN
              </Link>
            </li><li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li> */}
      </ul>
    </div>
    <div className="top-right">
    {user ? (
         <Link to="/setting">
          <img className="topImg"
              src={user.pofilePic}
              alt=""
            />
            </Link>
            ):(
              <ul className="top-list">
                <li className="top-list-item">

                <Link className="link" to="/login">
                LOGIN
              </Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
                
              </ul>
            )}
    <i className="topSearchIcon fas fa-search"></i>
    </div>

        
      
    </div>
  );
}

export default Topbar;
