import React, { Component } from 'react';


class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timer = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft -1
        })
        
    }


    render() {
        const timeLeft = this.state.secondsLeft
        return (
            <div>
                { this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
                {setTimeout(this.timer, 5000)}
            {/* { this.state.secondsLeft == 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>} */}
            </div>
        );
    }
}

export default Bomb