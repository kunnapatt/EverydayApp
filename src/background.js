import React from 'react';
import {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './sakura.css' ;
import background from './test.jpg' ;


function Background() {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const el = document.querySelector('.aaa') ;
            console.log(el) ;
            el.classList.add("aaaclick") ;
        }, 1000) ;
        return () => clearTimeout(timer) ;
    }, []) ;

    return (
        <div className="aaa">
        </div>
    ) ;
} ;

export default Background ;