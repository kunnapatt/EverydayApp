import React from 'react';
import Sakura from './sakura' ;
import Background from './background' ;

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Background></Background>
                <Sakura></Sakura>
            </div> 
        ) ;
    }
}

export default Home ;