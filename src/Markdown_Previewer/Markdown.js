import React, { useState } from 'react';

const Markdown = () => {
  const [text, setText] = useState('');

  return (
    <div>
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
