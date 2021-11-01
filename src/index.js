import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-DLVQMH2GLR');
ReactGA.send("pageview")

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
