import React, { useState } from 'react';
import calculate from '../logic/calculator';

function CalculatorDesign() {
  const [inputs, setInput] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleChange = (e) => {
    // spread opertae map event values to object that we pass to function
    const test = { ...inputs, ...calculate(inputs, e.target.name) };
    setInput(() => ({ ...test }));
  };

  return (
    <div className="calculateDiv">
      <h3>Let&apos;s do some Math!</h3>
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
            {['AC', '+/-', '%', '÷'].map((btn) => (
              <li key={btn}>
                <button
                  type="button"
                  className="calculateBtn"
                  name={btn}
                  value={btn}
                  onClick={handleChange}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {['7', '8', '9', 'x'].map((btn) => (
              <li key={btn}>
                <button
                  type="button"
                  className="calculateBtn"
                  name={btn}
                  value={btn}
                  onClick={handleChange}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {['4', '5', '6', '-'].map((btn) => (
              <li key={btn}>
                <button
                  type="button"
                  className="calculateBtn"
                  name={btn}
                  value={btn}
                  onClick={handleChange}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="buttonList">
            {['1', '2', '3', '+'].map((btn) => (
              <li key={btn}>
                <button
                  type="button"
                  className="calculateBtn"
                  name={btn}
                  value={btn}
                  onClick={handleChange}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="buttonListBottom">
            {['0', '.', '='].map((btn) => (
              <li key={btn}>
                <button
                  type="button"
                  className="calculateBtn"
                  name={btn}
                  value={btn}
                  onClick={handleChange}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default CalculatorDesign;
