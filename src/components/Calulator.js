/** @format */

import { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

 handleResult = (e) => {
   const name = e.target.textContent;
   this.setState((prev) => ({
     ...prev,
     total: name,
   }));
 };

 handleKeyPress = (e) => {
   const keyValue = e.target.textContent;
   const result = calculate(this.state, keyValue);
   this.setState(result);
 };

 render() {
   const { total, next, operation } = this.state;
   return (
     <div className="calculator">
       <div className="box">
         <div className="result four-cell" onChange={this.handleClick}>
           {total}
           {operation}
           {next}
         </div>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           AC
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           +/-
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           %
         </button>
         <button
           type="button"
           className="key operator"
           onClick={this.handleKeyPress}
         >
           /
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           7
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           8
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           9
         </button>
         <button
           type="button"
           className="key operator"
           onClick={this.handleKeyPress}
         >
           *
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           4
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           5
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           6
         </button>
         <button
           type="button"
           className="key operator"
           onClick={this.handleKeyPress}
         >
           -
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           1
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           2
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           3
         </button>
         <button
           type="button"
           className="key operator"
           onClick={this.handleKeyPress}
         >
           +
         </button>
         <button
           type="button"
           className="key two-cell"
           onClick={this.handleKeyPress}
         >
           0
         </button>
         <button type="button" className="key" onClick={this.handleKeyPress}>
           .
         </button>
         <button
           type="button"
           className="key operator"
           onClick={this.handleKeyPress}
         >
           =
         </button>
       </div>
     </div>
   );
 }
}
export default Calculator;
