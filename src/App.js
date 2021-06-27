import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<p> York University School of Continuing Studies </p>
	    <p> Certificate in DevOps </p>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <code><li>CSDO1000-Introduction to DevOps</li></code>
          <code><li>CSDO1010-The DevOps Toolchain in Practice</li></code>
          <code><li>CSDO1020-Next Generation DevOps</li></code>
        </ul> 
        <a
          className="App-link"
          href="https://continue.yorku.ca/programs/certificate-in-devops/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps with York University School of Continuing Studies
        </a>
      </header>
    </div>
  );
}

export default App;
