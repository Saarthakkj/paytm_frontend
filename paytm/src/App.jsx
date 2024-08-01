import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'; //import react framework
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //imports router components for react to function
// import Dashboard from './pages/dashboard';
// import Send from './pages/send';
// import Signin from './pages/Signin';
import Signup from './pages/Signup';
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
  <div className = "App">
    <Signup />
  </div>
  )
}

export default App
