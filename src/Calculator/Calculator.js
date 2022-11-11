import React from 'react';
import { useState } from 'react';

const Calculator = () => {
  return (
    <div className='calculator card' style={{ width: '400px' }}>
      <input type='text' className='calculator-screen z-depth-1' value='0' />
      <div className='calculator-keys'>
        <div className='row'>
          <div className='col'>
            <button type='button' className='btn btn-info waves-effect'>
              7
            </button>
          </div>
          <div className='col'>
            <button type='button' className='btn btn-info waves-effect'>
              8
            </button>
          </div>
          <div className='col'>
            <button type='button' className='btn btn-info waves-effect'>
              9
            </button>
          </div>

          <div className='col'>
            <button type='button' class='operator btn btn-danger' value='+'>
              +
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button type='button' className='btn btn-info waves-effect'>
              4
            </button>
          </div>
          <div className='col'>
            <button type='button' className='btn btn-info waves-effect'>
              5
            </button>
          </div>
          <div className='col'>
            <button type='button' className='btn btn-info waves-effect'>
              6
            </button>
          </div>
          <div className='col'></div>
        </div>
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
