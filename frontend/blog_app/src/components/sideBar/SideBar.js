import './SideBar.css';

function SideBar() {
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
          <li className="sidebareListItem">life</li>
          <li className="sidebareListItem">sport</li>
          <li className="sidebareListItem">music</li>
          <li className="sidebareListItem">tech</li>
          <li className="sidebareListItem">movie</li>
          <li className="sidebareListItem">style</li>
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