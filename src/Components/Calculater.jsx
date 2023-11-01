import React, { useState } from 'react';
import Cal from '../Asset/my.png'

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const addToExpression = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult.toString());
    } catch (error) { 
      setResult('Error');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='row container vh-100'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='col-6 bg-primary-subtle shadow-lg rounded'>
            <div className='row'>
              <div className='col-12 p-3'>
                <img src={Cal} style={{ width: '100%', height: '300px' }} alt="" srcset="" />
                <input type='text' className='form-control' value={result || expression} />
              </div>
            </div>
            <div className='row ps-3 pe-3 pb-3'>
              <div className='col-12 ps-4'>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('(')}>(</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression(')')}>)</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => setExpression(expression.slice(0, -1))} ><i className="bi bi-backspace"></i></button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('/')}>/</button>
              </div>
              <div className='col-12 ps-4 col-md-12'>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('9')}>9</button>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('8')}>8</button>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('7')}>7</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('*')}>*</button>
              </div>
              <div className='col-12 ps-4'>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('6')}>6</button>
                <button className="btn btn-primary px-5 btn-block py-2 m-3" onClick={() => addToExpression('5')}>5</button>
                <button className="btn btn-primary px-5 btn-block py-2 m-3" onClick={() => addToExpression('4')}>4</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('-')}>-</button>
              </div>
              <div className='col-12 ps-4'>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('3')}>3</button>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('2')}>2</button>
                <button className="btn btn-primary btn-block px-5 py-2 m-3" onClick={() => addToExpression('1')}>1</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('+')}>+</button>
              </div>
              <div className='col-12 ps-4'>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('0')}>0</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={() => addToExpression('.')}>.</button>
                <button className="btn btn-primary btn-block px-5 py-3 m-3" onClick={clearExpression}>C</button>
                <button className="btn btn-primary btn-block  px-5 py-3 m-3" onClick={calculateResult}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
