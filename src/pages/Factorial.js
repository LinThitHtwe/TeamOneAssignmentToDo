import React from "react";

const Factorial = () => {

  const [number, setNumber] = useState('');
    const [output, setOutput] = useState('');
  
    const calculateFactorial = (e) => {
      e.preventDefault();
      const inputNumber = parseInt(number);
  
      if (isNaN(inputNumber) || inputNumber < 0) {
        setOutput('Factorial is not defined for negative numbers or non-numeric input.');
      } else {
        const result = factorial(inputNumber);
        setOutput(`The result of factorial is ${result}`);
      }
    };
  
    const factorial = (num) => {
      let fact = 1;
      for (let i = num; i > 1; i--) {
        fact *= i;
      }
      return fact;
    };

  return (
    <div className="main">
        <div className="center mb-1">
          <h1>Factorial</h1>
        </div>
        <form id="factorialForm" onSubmit={calculateFactorial}>
          <div className="rowFact">
            <div>
              <input
                type="number"
                id="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input type="submit" value="Submit" className="primary" />
            </div>
          </div>
          <div className="rowFact mt-1">
            <div>
              <input
                type="text"
                className="widthFact"
                style={{ height: '100px' }}
                value={output}
                id="output"
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
  );
};

export default Factorial;
