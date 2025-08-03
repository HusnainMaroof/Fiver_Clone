import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster} from "react-hot-toast" 
import Main from "./Pages/Main";
const App = () => {
  return (
    <>
      <Toaster/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/main-page" element={<Main/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
