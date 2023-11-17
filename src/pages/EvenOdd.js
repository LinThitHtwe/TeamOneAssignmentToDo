import React, { useState } from "react";
import evenodd from "../styles/evenodd.css";

const EvenOdd = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [numberType, setNumberType] = useState('even');
  const [result, setResult] = useState('');

  const calculateResult = (event) => {
    event.preventDefault();
    const startValue = parseInt(start);
    const endValue = parseInt(end);

    if (!isNaN(startValue) && !isNaN(endValue)) {
      let calculatedResult = "";

      for (let i = startValue; i <= endValue; i++) {
        if ((numberType === "even" && i % 2 === 0) || (numberType === "odd" && i % 2 !== 0)) {
          calculatedResult += i + ' ';
        }
      }

      setResult(calculatedResult.trim());
    }
  };

  return (
    <div>
      <form onSubmit={calculateResult}>
        <div className="container">
          <div className="row-container">
            <div className="start-num">
              <label htmlFor='start'>Start Number:</label>
              <input type="text" name="start" className="start" value={start} onChange={(e) => setStart(e.target.value)} />
            </div>

            <div className="end-num">
              <label htmlFor='end'>End Number:</label>
              <input type="text" name="end" className="end" value={end} onChange={(e) => setEnd(e.target.value)} />
            </div>

            <div className="list-even-odd">
              <select className="select-item" value={numberType} onChange={(e) => setNumberType(e.target.value)}>
                <option value='even'>Even</option>
                <option value='odd'>Odd</option>
              </select>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </div>

          <div className="answer-box">
            <label htmlFor="ans">Result Box:</label>
            <div name='ans' className="ans" value={result} readOnly >{result}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EvenOdd;
