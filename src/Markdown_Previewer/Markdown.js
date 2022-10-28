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
      <div class='border border-danger p-5 mb-5 mt-5'>
        <div class='text-center'>
          <div class='border p-4'>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
