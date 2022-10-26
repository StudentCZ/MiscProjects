import React, { useState } from 'react';
import Home from '../Home';
import { Link } from 'react-router-dom';

const Markdown = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <Link to='/'>Home</Link>

      <h1>Markdown Previewer</h1>
      <textarea
        id='editor'
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <div id='preview'>{text}</div>
    </div>
  );
};

export default Markdown;
