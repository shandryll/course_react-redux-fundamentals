import React, {Component} from "react";

import Buttons from './Buttons'
import Display from './Display'
import FormStep from './FormStep'
import './Counter.css'

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.intialStep || 5
  };

  setStep = (newStep) => {
    this.setState({
      step: newStep
    })
  }

  increment = () => {
    this.setState({
      number: this.state.number + this.state.step
    })
  }

  decrement = () => {
    this.setState({
      number: this.state.number - this.state.step
    })
  }

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <Display number={this.state.number}></Display>
        <FormStep step={this.state.step} onStep={this.setStep}></FormStep>
        <Buttons onIncrement={this.increment} onDecrement={this.decrement}></Buttons>
      </div>
    )
  }
};

export default Counter
