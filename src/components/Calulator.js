/** @format */

import { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="box">
          <div className="result four-cell">0</div>
          <button type="button" className="key">
            AC
          </button>
          <button type="button" className="key">
            +/-
          </button>
          <button type="button" className="key">
            %
          </button>
          <button type="button" className="key operator">
            /
          </button>
          <button type="button" className="key">
            7
          </button>
          <button type="button" className="key">
            8
          </button>
          <button type="button" className="key">
            9
          </button>
          <button type="button" className="key operator">
            *
          </button>
          <button type="button" className="key">
            4
          </button>
          <button type="button" className="key">
            5
          </button>
          <button type="button" className="key">
            6
          </button>
          <button type="button" className="key operator">
            -
          </button>
          <button type="button" className="key">
            1
          </button>
          <button type="button" className="key">
            2
          </button>
          <button type="button" className="key">
            3
          </button>
          <button type="button" className="key operator">
            +
          </button>
          <button type="button" className="key two-cell">
            0
          </button>
          <button type="button" className="key">
            .
          </button>
          <button type="button" className="key operator">
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
