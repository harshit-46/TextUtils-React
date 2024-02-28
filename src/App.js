import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';
/*
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
*/

function App() {
  const [mode,setMode] = useState('light');
  const [modeText, setModeText] = useState('Dark mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout( () => {
      setAlert(null)
    },1500);
  }

  const togglemode = () => {
    if(mode === 'light') {
      setMode('dark');
      setModeText('Light mode');
      document.body.style.backgroundColor = '#262323';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setModeText('Dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} modetext={modeText} aboutText="About"/>
      <Alert alert={alert}/>
      <div className="container">
        {/*<Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text to analyze" mode={mode}/>}></Route>
          </Routes>*/}
          <TextForm showAlert={showAlert} heading="Enter your Text to analyze" mode={mode}/>
      </div>
      {/*</Router>*/}
    </>
  );
}
export default App;