import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DrawerRight from './components/sidebar';
import { Route, BrowserRouter, Link, Switch, withRouter } from 'react-router-dom';

import './css/sakura.css';
import Home from './components/home';

const webs = ["/", "/myimage", "/About", "/post", "/project"];
const a = ["/myimage", "/About", "/post", "/project"];


const componentweb = a.map((p, i) => {
    return <Route path={p}
        render={
            () => < div style={
                { position: "absolute" }} > <h1> {p} </h1></div >
        }
        key={i}
    />
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/"
                    component={Home}
                /> {componentweb}

                {
                    /* <Route path="/myimage"  />
                                <Route path="/About" render={() => <div style={{position: "absolute"}}><h1 > About </h1></div>} />
                                <Route path="/post" render={() => <div style={{position: "absolute"}}><h1 > Post </h1></div>} />
                                <Route path="/project" render={() => <div style={{position: "absolute"}}><h1 > Project </h1></div>} /> */
                } 
            </Switch> <DrawerRight webs={webs} > </DrawerRight> 
        </BrowserRouter > 
    </React.StrictMode>,
                // button,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
