import React from 'react';
import logo from './logo.png';
import './App.css';

const swStats = require('swagger-stats');
App.use(swStats.getMiddleware());

const promClient = require('prom-client');
promClient.collectDefaultMetrics();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Certificate in DevOps.
		  <code>CSDO1000 Introduction to DevOps</code>
		  <code>CSDO1010 The DevOps Toolchain in Practice</code>
		  <code></code>
        </p>
		<ul>
		  <code><li>CSDO1000 - Introduction to DevOps</li></code>
		  <code><li>CSDO1010 - The DevOps Toolchain in Practice</li></code>
		  <code><li>CSDO1020 - Next Generation DevOps</li></code>
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
