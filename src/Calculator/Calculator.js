import React from 'react';
import { useState } from 'react';

const Calculator = () => {
  return (
    <div className='calculator card'>
      <input type='text' className='calculator screen z-depth-1' value='0' />
      <div class='calculator-keys'></div>
      <button type='button' class='btn btn-info waves-effect'>
        7
      </button>
    </div>
  );
};

export default Calculator;
