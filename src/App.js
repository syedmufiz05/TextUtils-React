import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import Textform from './components/Textform';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default App;

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
    } else {
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }

  const anotherMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='green';
      document.body.style.color='white';
      showAlert("Green mode has been enabled","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <Router>
      <Navbar title="Text" mode={mode} toggleMode={toggleMode} 
       anotherMode={anotherMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
      </Router>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Insert title here",
  aboutText: "About",
};
