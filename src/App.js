
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Timings from './components/Timings'
import Packages from './components/Packages'
import Benefits from './components/Benefits'


function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/timings">Our Timings </Link>
              </li>
              <li>
                <Link to="/benefits">Our Benefits</Link>
              </li>
              <li>
                <Link to="/packages">Our Packages</Link>
              </li>
            </ul>
          </div>
        </header>
     

        <div className="display">
        <Routes>
          <Route path="/" element={
            <Home/>
          } />
          <Route path="/about" element={
            <About/>
            } />
                <Route path="/timings" element={
            <Timings/>
            } />
              <Route path="/benefits" element={
            <Benefits/>
            } />
          <Route exact path="/packages" element={
          <div>
          <Packages packages={packages}/> 
          </div>
          }/>
        
        </Routes>
        </div>
        </BrowserRouter>
  </div>
  );
}

export default App;



