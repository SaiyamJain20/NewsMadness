import './App.css';
import NavBar from './components/NavBar';
import NewsRow from './components/NewsRow';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('general');

  return (
    <div className="App">
      <Router>
        <NavBar setCountry={setCountry} setCategory={setCategory} country={country}/>
        <NewsRow key={country.concat(category)} country={country} category={category}/>
      </Router>
    </div>
  );
}

export default App;
