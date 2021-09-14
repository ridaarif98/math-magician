import React from 'react';

class CalculatorDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result : 0};
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
            <li>AC</li>
            <li>+/-</li>
            <li>%</li>
            <li>÷</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>x</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>-</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>+</li>
          </ul>
        </li>
        <li>
          <ul className="buttonListBottom">
            <li>0</li>
            <li>.</li>
            <li>=</li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default CalculatorDesign;
