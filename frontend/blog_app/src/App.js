

import Topbar from './components/top/Topbar';
import Settings from './pages/setting/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from "../src/pages/register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context"
function App() {
  const { user } = useContext(Context);
  return (
    
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route   path="/register">
        {user ? <Home /> : <Register />}
        </Route>
        <Route   path="/login">
        {user ? <Home /> : <Login />}
        </Route>
        <Route  path="/write">
        {user ? <Write /> : <Login />}
        </Route>
        <Route  path="/setting">
        {user ? <Settings /> : <Login />}
        </Route>
        <Route  path="/post/:postId">
          <Single />
        </Route>
      </Switch>
     
  
      
      
    </Router>
  );
}

export default App;
