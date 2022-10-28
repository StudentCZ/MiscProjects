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
      <div id='preview'></div>
      <span className='border border-primary w-100 p-3'>{text}</span>
    </div>
  );
};

export default Markdown;
