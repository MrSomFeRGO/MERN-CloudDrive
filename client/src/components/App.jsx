import React from "react";
import Navbar from "./navbar/navbar";
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
            <div className="wrap">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
