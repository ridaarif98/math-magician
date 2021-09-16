import React, { useState } from 'react';
import calculate from '../logic/calculator';

function CalculatorDesign() {
  const [inputs, setInput] = useState({ total: 0, next: null, operation: null });

  const handleChange = (e) => {
    // spread opertae map event values to object that we pass to function
    const test = { ...inputs, ...calculate(inputs, e.target.name) };
    setInput(() => ({ ...test }));
  };

  return (
    <ul className="mainList">
      <li>
        <ul className="resultList">
          <li>
            {inputs.total}
            {inputs.operation}
            {inputs.next}
          </li>
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          {['AC', '+/-', '%', '÷'].map((btn) => (<li><button type="button" className="calculateBtn" key={btn} name={btn} value={btn} onClick={handleChange}>{btn}</button></li>))}
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          <li><button type="button" className="calculateBtn" name="7" value="7" onClick={handleChange}>7</button></li>
          <li><button type="button" className="calculateBtn" name="8" value="8" onClick={handleChange}>8</button></li>
          <li><button type="button" className="calculateBtn" name="9" value="9" onClick={handleChange}>9</button></li>
          <li><button type="button" className="calculateBtn" name="x" value="x" onClick={handleChange}>x</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          <li><button type="button" className="calculateBtn" name="4" value="4" onClick={handleChange}>4</button></li>
          <li><button type="button" className="calculateBtn" name="5" value="5" onClick={handleChange}>5</button></li>
          <li><button type="button" className="calculateBtn" name="6" value="6" onClick={handleChange}>6</button></li>
          <li><button type="button" className="calculateBtn" name="-" value="-" onClick={handleChange}>-</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          <li><button type="button" className="calculateBtn" name="1" value="1" onClick={handleChange}>1</button></li>
          <li><button type="button" className="calculateBtn" name="2" value="2"onClick={handleChange}>2</button></li>
          <li><button type="button" className="calculateBtn" name="3" value="3" onClick={handleChange}>3</button></li>
          <li><button type="button" className="calculateBtn" name="+" value="+" onClick={handleChange}>+</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonListBottom">
          <li><button type="button" className="calculateBtn" name="0" value="0" onClick={handleChange}>0</button></li>
          <li><button type="button" className="calculateBtn" name="." value="." onClick={handleChange}>.</button></li>
          <li><button type="button" className="calculateBtn" name="=" value="=" onClick={handleChange}>=</button></li>
        </ul>
      </li>
    </ul>
  );
}

export default CalculatorDesign;
