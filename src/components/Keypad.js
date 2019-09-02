import React, {Component} from 'react'

class Keypad extends Component {
    printMsg = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.printMsg}/>
        )
    }
}

export default Keypad
