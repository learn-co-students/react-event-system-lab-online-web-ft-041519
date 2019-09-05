import React from 'react'

  class KeyPad extends React.Component {


    render(){
      return (
        <div>
          <input type="password" onKeyUp={() => console.log('Entering password...')}/>
        </div>
      )
    }
  }
export default KeyPad;
