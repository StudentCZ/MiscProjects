import React, { useState } from 'react';

const Markdown = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea id='editor'></textarea>
      <div id='preview'></div>
    </div>
  );
};

export default Markdown;
