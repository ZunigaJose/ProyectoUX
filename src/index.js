import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './logIn'
import MainNavBar from './MainNav';
import Home from './Home'

function App() {
  return (
    <div>
      <div>
        <MainNavBar/>
      </div>
      <div>
        <br/>
        <br/>
        <br/>
        <Home/>
      </div>
    </div>
  )
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

