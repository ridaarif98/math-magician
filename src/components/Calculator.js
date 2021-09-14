import React from 'react';

class CalculatorDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 'AC',
      c: '+/-',
      d: '%',
      e: '÷',
      f: 7,
      g: 8,
      h: 9,
      i: 'x',
    };
  }
  render() {
    return (
      <ul className="mainList">
        <li>
          <ul className="resultList">
            <li>{this.state.a}</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li>{this.state.b}</li>
            <li>{this.state.c}</li>
            <li>{this.state.d}</li>
            <li>{this.state.e}</li>
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            <li>{this.state.f}</li>
            <li>{this.state.g}</li>
            <li>{this.state.h}</li>
            <li>{this.state.i}</li>
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
