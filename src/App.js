import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Button1 from './pages/Button1';
import Button2 from './pages/Button2';
import Menubar from './pages/Menubar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar/>}>
        <Route path="/home" element={<Home />}></Route>        
        <Route path="/1button" element={<Button1 />}></Route>
        <Route path="/2button" element={<Button2 />}></Route>
      </Route>
    </Routes>
  );
};

export default App;