import "./setting.css";
import SideBar from "../../components/sideBar/SideBar"
import {useState,useContext } from "react";
import { Context } from "../../context/Context";

import axios from 'axios'

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/"


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const updatedUser = {
      userId:user._id,
      username,
      email,
      password
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file", file);
      updatedUser.pofilePic = filename;
  
      try {
         await axios.post("http://localhost:8000/upload" , data )
      } catch (err) {
        
      }
    }  
    try{
  
      const res = await axios.put("http://localhost:8000/user/"+user._id, updatedUser)
     
      setSuccess(true);

      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    }
    catch (err){
      dispatch({ type: "UPDATE_FAILURE" })
    }
    }

    return (
      <div className="settings">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">u</span>
            <span className="settingsDeleteTitle">d</span>
          </div>
          <form className="settingsFrom" onSubmit={handleSubmit}>
            <label>profile Picture</label>
            <div className="settingsImg">
            <img
              src={ file ? URL.createObjectURL(file) :PF+ user.pofilePic}
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input id="fileInput"  type="file" style={{display:"none"}}  className="settingsPPInput"
             onChange={(e)=>setFile(e.target.files[0])}/>
            </div>


            <label>username</label>
            <input type="text" placeholder={user.username}  onChange={(e)=>setUsername(e.target.value)}/>
            <label>email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} />
            <label>password</label>
            <input type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
             <button className="settingsSubmitButton" type="submit">
            Update
          </button>

          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
         
          </form>
          
        </div>
        <SideBar />
        
      </div>
    );
  }
  
  export default Settings;