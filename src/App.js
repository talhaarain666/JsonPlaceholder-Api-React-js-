import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import ResponsiveAppBar from './components/navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Photos from './pages/Photos';



function App() {



  return (


    <div className="App">
      <Router>

        <ResponsiveAppBar />

        <Routes>
          <Route element={<Users />} path="/" />
          <Route element={<Users />} key="users" path="users" />
          <Route element={<Photos />} path="photos" />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
