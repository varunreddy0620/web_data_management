// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import Navbar from "./Navbar";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import UserScreen from "./pages/UserScreen";
import Family_Mem from "./pages/Family_Mem";
import Profile from "./pages/Profile";
import Admin from "./Admin";
import Changepassword from "./Changepassword";
import { useEffect,useState } from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import Projects from "./pages/Projects";
const logopic = new URL("./img/header.png", import.meta.url);
function App() {
  const history=useHistory()
  const [isAuth,setIsAuth]=useState(localStorage.getItem("login"))


 
  return (
    <>
     
      <div style={{ display: "flex" }}>
        <div>
          <h2 style={{ color: "#120E43" }}>Land Records</h2>
        </div>
        <div>
          <img src={logopic} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/changepassword" component={Changepassword} />
          </Switch>
        </div>
        <Switch>
        {/* <ProtectedRoutes path="/userdashboard" component={UserScreen } auth={isAuth} /> */}
        <Route exact path="/userdashboard" component={UserScreen} />
        {/* <Route exact path="/userdashboard/projects" component={Projects} /> */}
        <Route exact path="/userdashboard/profile" component={Profile} />
        <Route exact path="/userdashboard/family" component={Family_Mem} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
