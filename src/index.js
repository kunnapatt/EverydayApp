import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar' ;
import reportWebVitals from './reportWebVitals';
import Form from './Form' ;
import Sakura from './sakura' ;
import Background from './background' ;
import './sakura.css' ;
import { TextField, Grid, Button, Icon, IconButton } from '@material-ui/core' ;

ReactDOM.render(
  <React.StrictMode>
    {/* <Form />, */}
    {/* <div styles={test}> */}
    {/* <h1>AAA</h1> */}
      {/* <Button variant="contained" color="primary" onClick={() => {
        const el = document.querySelector(".aaa") ;
        console.log(el) ;
        el.classList.add('aaaclick') ;
       }}>AAA</Button> */}
      <Background></Background>
      <Sakura></Sakura>
  {/* //   <App /> */}
  {/* //   <Navbar /> */}
  </React.StrictMode>,
  // button,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
