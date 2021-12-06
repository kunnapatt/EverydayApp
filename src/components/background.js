import React from 'react';
import {useEffect} from 'react';
import './../css/sakura.css' ;


function Background() {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const el = document.querySelector('.aaa') ;
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