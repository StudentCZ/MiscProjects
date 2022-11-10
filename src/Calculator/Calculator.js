import React from 'react';
import { useState } from 'react';

const Calculator = () => {
  return (
    <div className='calculator card' style={{ width: '400px' }}>
      <input type='text' className='calculator-screen z-depth-1' value='0' />
      <div className='calculator-keys'>
        <button type='button' className='btn btn-info waves-effect'>
          7
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          8
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          9
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          4
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          5
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          6
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          1
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          2
        </button>
        <button type='button' className='btn btn-info waves-effect'>
          3
        </button>
      </div>
    </div>
  );
};

export default Calculator;
