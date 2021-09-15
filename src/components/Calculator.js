import React from 'react';
import calculate from '../logic/calculator';

class CalculatorDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      calculate(this.state, e.target.name),
    );
    console.log(this.state, e.target.name);
  }

  render() {
    const opArray = ['AC', '+/-', '%', '÷'].map((test) => <li><button className="calculateBtn" name={test} value={test} onClick={this.handleChange}>{test}</button></li>)
    const numArrayOne = [7, 8, 9, 'x'].map((test) => <li><button className="calculateBtn" name={test} value={test} onClick={this.handleChange}>{test}</button></li>)
    const numArrayTwo = [4, 5, 6, '-'].map((test) => <li><button className="calculateBtn" name={test} value={test} onClick={this.handleChange}>{test}</button></li>)
    const numArrayThree = [1, 2, 3, '+'].map((test) => <li><button className="calculateBtn" name={test} value={test} onClick={this.handleChange}>{test}</button></li>)
    const numArrayFour = [0, '.', '='].map((test) => <li><button className="calculateBtn" name={test} value={test} onClick={this.handleChange}>{test}</button></li>)
   
    return (
      <ul className="mainList">
        <li>
          <ul className="resultList">
            <li>{this.state.total } {this.state.operation} {this.state.next}</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {opArray}
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {numArrayOne}
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {numArrayTwo}
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {numArrayThree}
          </ul>
        </li>
        <li>
          <ul className="buttonListBottom">
            {numArrayFour}
          </ul>
        </li>
      </ul>
    );
  }
}

export default CalculatorDesign;
