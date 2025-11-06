import React from 'react';
import ReactDOM from 'react-dom/client';
import Food from './App'; // or './Food'
import Food from './Food';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Food type="Continental" />
  </React.StrictMode>
);


