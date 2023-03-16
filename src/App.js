import React from 'react';
import './css/main.css';
import {Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <>
          <Router>
              <Routes>
                <Route path="/" element="" />
              </Routes>
          </Router>
        </>
    </div>
  );
}

export default App;
