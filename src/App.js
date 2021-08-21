// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import About from "./components/About";

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{ //showAlert is a function here it helps in showing alerts
    setAlert({ // here setAlert is a method
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled","success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutils is amazing website";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Bookmark textutils site!!!";
      // }, 1500);
    }
    else{
      setmode ('light')
      document.body.style.backgroundcolor = 'light';
      showAlert("Light mode has been enabled","success")
      document.title = "Textutils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
        <Textform showAlert={showAlert} heading="Enter the tet for analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
        {/* </Router> */}
    </>
  );
}
export default App;
