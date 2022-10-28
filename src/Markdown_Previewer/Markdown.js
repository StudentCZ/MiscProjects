import React, { useState } from 'react';
import Home from '../Home';

const Markdown = () => {
  const [text, setText] = useState('');

  return (
    <div className='text-center'>
      <Home />
      <h1>Markdown Previewer</h1>
      <textarea
        id='editor'
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <div id='preview' className='border border-danger mt-5 w-25 p-4'>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Markdown;
