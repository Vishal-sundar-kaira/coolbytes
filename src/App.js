
import './App.css';
import { Routes, Route } from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './Components/Navbar';
import Notestate from './Components/context/notes/Notestate';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import Home from './Components/Home'
import Retailer from './Components/Retailer';
import About from './Components/About';
import Contact from './Components/Contact'
import Events from './Components/Events';
import Homee from './Components/Homee';
import Productsstate from './Components/context/notes/Productsstate';


function App() {
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
    <>
    <Productsstate>
    <Notestate>
    <Router>
      <div className="relative">
      </div>
      <div>
      <Routes>
        <Route exact path="/" element={<Home showalert={showalert}/>}></Route>
        <Route exact path="/login" element={<Login showalert={showalert}/>}></Route>
        <Route exact path="/signup" element={<Signup showalert={showalert}/>}></Route>
        <Route exact path="/retailer" element={<Retailer showalert={showalert}/>}></Route>
        <Route exact path="/events" element={<Events showalert={showalert}/>}></Route>
        <Route exact path="/homee" element={<Homee showalert={showalert}/>}></Route>
        <Route exact path="/about" element={<About showalert={showalert}/>}></Route>
        <Route exact path="/contact" element={<Contact showalert={showalert}/>}></Route>
      </Routes> 
      </div>
    </Router>
    </Notestate>
    </Productsstate>
    </>
  );
}

export default App;
