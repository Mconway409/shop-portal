import React, { Component } from 'react'
import Button from '@material-ui/core/IconButton';


class Quantity extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 1
        }
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    decrement() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }
    
    render() {
        return (
            <div>
            <Button onClick={() => this.decrement()}> - </Button>
            <div>
               {this.state.count}
            </div>
            <Button onClick={() => this.increment()}> + </Button>
            </div>
        )
    }
}

export default Quantity
