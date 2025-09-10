import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#17314aff';
      document.body.style.color = 'white';
      document.title = "Textutil - Dark Mode";
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Textutil - Light Mode";
      showAlert('Light mode has been enabled!', 'success');
    }
  };

  return (
    <Router>
      <Navbar title="Textutil" mode={mode} toggleMode={toggleMode} about="AboutUs" />
      <Alerts alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/about"  element={<About  mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter your text to analyze" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
