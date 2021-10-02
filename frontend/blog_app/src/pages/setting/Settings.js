import "./setting.css";
import SideBar from "../../components/sideBar/SideBar"

function Settings() {
    return (
      <div className="settings">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">u</span>
            <span className="settingsDeleteTitle">d</span>
          </div>
          <from className="settingsFrom">
            <label>profile Picture</label>
            <div className="settingsImg">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input id="fileInput"  type="file" style={{display:"none"}}  className="settingsPPInput"/>
            </div>


            <label>username</label>
            <input type="text" placeholder="emran"/>
            <label>email</label>
            <input type="email" placeholder="emran@gmail.com"/>
            <label>password</label>
            <input type="password" placeholder="password"/>
             <button className="settingsSubmitButton" type="submit">
            Update
          </button>
         
          </from>
          
        </div>
        <SideBar />
        
      </div>
    );
  }
  
  export default Settings;