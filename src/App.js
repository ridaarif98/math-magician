import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/style.css';
import CalculatorDesign from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Qoute';
import Navbar from './pages/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { res: '' };
  }

  render() {
    const { res } = this.state;
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/calculator">
            <div>
              {res}
              <CalculatorDesign />
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Quote">
            <Quote />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
