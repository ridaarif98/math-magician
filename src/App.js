import React from 'react';
import './styles/style.css';
import CalculatorDesign from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { res: '' };
  }

  render() {
    const { res } = this.state;
    return (
      <div>
        { res }
        <CalculatorDesign />
      </div>
    );
  }
}

export default App;
