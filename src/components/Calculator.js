import React from 'react';
// import calculate from '../logic/calculator';

class CalculatorDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      next: null,
      operation: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this.state, e.target.name);
  }

  render() {
    const { result } = this.state;
    return (
      <ul className="mainList">
        <li>
          <ul className="resultList">
            <li>{result}</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li><button className="calculateBtn" name="AC" value="AC" onClick={this.handleChange}>AC</button></li>
            <li><button className="calculateBtn" name="+/-" value="+/-" onClick={this.handleChange}>+/-</button></li>
            <li><button className="calculateBtn" name="%" value="%" onClick={this.handleChange}>%</button></li>
            <li><button className="calculateBtn" name="÷" value="÷" onClick={this.handleChange}>÷</button></li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li><button className="calculateBtn" name='7' value="7" onClick={this.handleChange}>7</button></li>
            <li><button className="calculateBtn" name="8" value="8" onClick={this.handleChange}>8</button></li>
            <li><button className="calculateBtn" name="9" value="9" onClick={this.handleChange}>9</button></li>
            <li><button className="calculateBtn" name="x" value="x" onClick={this.handleChange}>x</button></li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li><button className="calculateBtn" name="4" value="4" onClick={this.handleChange}>4</button></li>
            <li><button className="calculateBtn" name="5" value="5" onClick={this.handleChange}>5</button></li>
            <li><button className="calculateBtn" name="6" value="6" onClick={this.handleChange}>6</button></li>
            <li><button className="calculateBtn" name="-" value="-" onClick={this.handleChange}>-</button></li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li><button className="calculateBtn" name="1" value="1" onClick={this.handleChange}>1</button></li>
            <li><button className="calculateBtn" name="2" value="2" onClick={this.handleChange}>2</button></li>
            <li><button className="calculateBtn" name="3" value="3" onClick={this.handleChange}>3</button></li>
            <li><button className="calculateBtn" name="+" value="+" onClick={this.handleChange}>+</button></li>
          </ul>
        </li>
        <li>
          <ul className="buttonListBottom">
            <li><button className="calculateBtn" name="0" value="0" onClick={this.handleChange}>0</button></li>
            <li><button className="calculateBtn" name="." value="." onClick={this.handleChange}>.</button></li>
            <li><button className="calculateBtn" name="=" value="=" onClick={this.handleChange}>=</button></li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default CalculatorDesign;
