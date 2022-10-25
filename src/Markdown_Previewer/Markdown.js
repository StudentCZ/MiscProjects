import React, { useState } from 'react';

const Markdown = () => {
  const [text, setText] = useState('');

  return (
    <div>
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
