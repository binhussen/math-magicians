/** @format */

import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleResult = (e) => {
    const name = e.target.textContent;
    setCalcState((prev) => ({
      ...prev,
      total: name,
    }));
  };

  const handleKeyPress = (e) => {
    const keyValue = e.target.textContent;
    const result = calculate(calcState, keyValue);
    setCalcState(result);
  };
  const { total, next, operation } = calcState;
  return (
    <div className="calculator">
      <div className="box">
        <div className="result four-cell" onChange={handleResult}>
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="key" onClick={handleKeyPress}>
          AC
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          +/-
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          %
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handleKeyPress}
        >
          ÷
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          7
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          8
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          9
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handleKeyPress}
        >
          x
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          4
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          5
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          6
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handleKeyPress}
        >
          -
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          1
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          2
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          3
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handleKeyPress}
        >
          +
        </button>
        <button
          type="button"
          className="key two-cell"
          onClick={handleKeyPress}
        >
          0
        </button>
        <button type="button" className="key" onClick={handleKeyPress}>
          .
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handleKeyPress}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
