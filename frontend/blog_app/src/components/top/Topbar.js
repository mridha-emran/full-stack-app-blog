import './topbar.css';

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
        <li className="top-list-item">HOME</li>
        <li className="top-list-item">ABOUT</li>
        <li className="top-list-item">CONTACT</li>
        <li className="top-list-item">WRITE</li>
        <li className="top-list-item">LOGOUT</li>
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
