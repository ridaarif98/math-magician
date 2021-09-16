import React, {useState} from 'react';
import calculate from '../logic/calculator';

function CalculatorDesign () {
  const [inputs, setInput] = useState({total: 0, next: null, operation: null});
  console.log(inputs);

  const handleChange = (e) => {

    // spread opertae map event values to object that we pass to function
    const test = {...inputs, ...calculate(inputs, e.target.name)};
    console.log(test);
    setInput(() => ({...test}));
  } 

  

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
          <li><button type="button" className="calculateBtn" name="AC" value="AC" onClick= {handleChange}>AC</button></li>
          <li><button type="button" className="calculateBtn" name="+/-" value="+/-" onClick= {handleChange}>+/-</button></li>
          <li><button type="button" className="calculateBtn" name="%" value="%" onClick= {handleChange}>%</button></li>
          <li><button type="button" className="calculateBtn" name="÷" value="÷" onClick= {handleChange}>÷</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          <li><button type="button" className="calculateBtn" name="7" value="7" onClick= {handleChange}>7</button></li>
          <li><button type="button" className="calculateBtn" name="8" value="8" onClick= {handleChange}>8</button></li>
          <li><button type="button" className="calculateBtn" name="9" value="9" onClick= {handleChange}>9</button></li>
          <li><button type="button" className="calculateBtn" name="x" value="x" onClick= {handleChange}>x</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          <li><button type="button" className="calculateBtn" name="4" value="4" onClick= {handleChange}>4</button></li>
          <li><button type="button" className="calculateBtn" name="5" value="5" onClick= {handleChange}>5</button></li>
          <li><button type="button" className="calculateBtn" name="6" value="6" onClick= {handleChange}>6</button></li>
          <li><button type="button" className="calculateBtn" name="-" value="-" onClick= {handleChange}>-</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonList">
          <li><button type="button" className="calculateBtn" name="1" value="1" onClick= {handleChange}>1</button></li>
          <li><button type="button" className="calculateBtn" name="2" value="2" onClick= {handleChange}>2</button></li>
          <li><button type="button" className="calculateBtn" name="3" value="3" onClick= {handleChange}>3</button></li>
          <li><button type="button" className="calculateBtn" name="+" value="+" onClick= {handleChange}>+</button></li>
        </ul>
      </li>
      <li>
        <ul className="buttonListBottom">
          <li><button type="button" className="calculateBtn" name="0" value="0" onClick= {handleChange}>0</button></li>
          <li><button type="button" className="calculateBtn" name="." value="." onClick= {handleChange}>.</button></li>
          <li><button type="button" className="calculateBtn" name="=" value="=" onClick= {handleChange}>=</button></li>
        </ul>
      </li>
    </ul>
  );
}

// class CalculatorDesign extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: 0,
//       next: null,
//       operation: null,
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState((state) => calculate(state, e.target.name));
//   }

//   render() {
//     const { total, operation, next } = this.state;

//     return (
//       <ul className="mainList">
//         <li>
//           <ul className="resultList">
//             <li>
//               {total}
//               {operation}
//               {next}
//             </li>
//           </ul>
//         </li>
//         <li>
//           <ul className="buttonList">
//             <li><button type="button" className="calculateBtn" name="AC" value="AC" onClick={this.handleChange}>AC</button></li>
//             <li><button type="button" className="calculateBtn" name="+/-" value="+/-" onClick={this.handleChange}>+/-</button></li>
//             <li><button type="button" className="calculateBtn" name="%" value="%" onClick={this.handleChange}>%</button></li>
//             <li><button type="button" className="calculateBtn" name="÷" value="÷" onClick={this.handleChange}>÷</button></li>
//           </ul>
//         </li>
//         <li>
//           <ul className="buttonList">
//             <li><button type="button" className="calculateBtn" name="7" value="7" onClick={this.handleChange}>7</button></li>
//             <li><button type="button" className="calculateBtn" name="8" value="8" onClick={this.handleChange}>8</button></li>
//             <li><button type="button" className="calculateBtn" name="9" value="9" onClick={this.handleChange}>9</button></li>
//             <li><button type="button" className="calculateBtn" name="x" value="x" onClick={this.handleChange}>x</button></li>
//           </ul>
//         </li>
//         <li>
//           <ul className="buttonList">
//             <li><button type="button" className="calculateBtn" name="4" value="4" onClick={this.handleChange}>4</button></li>
//             <li><button type="button" className="calculateBtn" name="5" value="5" onClick={this.handleChange}>5</button></li>
//             <li><button type="button" className="calculateBtn" name="6" value="6" onClick={this.handleChange}>6</button></li>
//             <li><button type="button" className="calculateBtn" name="-" value="-" onClick={this.handleChange}>-</button></li>
//           </ul>
//         </li>
//         <li>
//           <ul className="buttonList">
//             <li><button type="button" className="calculateBtn" name="1" value="1" onClick={this.handleChange}>1</button></li>
//             <li><button type="button" className="calculateBtn" name="2" value="2" onClick={this.handleChange}>2</button></li>
//             <li><button type="button" className="calculateBtn" name="3" value="3" onClick={this.handleChange}>3</button></li>
//             <li><button type="button" className="calculateBtn" name="+" value="+" onClick={this.handleChange}>+</button></li>
//           </ul>
//         </li>
//         <li>
//           <ul className="buttonListBottom">
//             <li><button type="button" className="calculateBtn" name="0" value="0" onClick={this.handleChange}>0</button></li>
//             <li><button type="button" className="calculateBtn" name="." value="." onClick={this.handleChange}>.</button></li>
//             <li><button type="button" className="calculateBtn" name="=" value="=" onClick={this.handleChange}>=</button></li>
//           </ul>
//         </li>
//       </ul>
//     );
//   }
// }

export default CalculatorDesign;
