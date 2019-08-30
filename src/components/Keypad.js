import React from 'react';

export default class KeyPad extends React.Component {
    
    render() {
        return <input type="password" onKeyUp = {() => {console.log('Entering password...')}} /> 
    }

}