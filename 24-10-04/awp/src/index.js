import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App1 from './App1'
import App2 from './App2'

var d = new Date()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data="DS-A"/>
    <App1/>
    <App2 date={d}/>
  </React.StrictMode>
);
