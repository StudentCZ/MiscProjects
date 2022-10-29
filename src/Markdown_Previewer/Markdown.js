import React, { useState } from 'react';
import Home from '../Home';
import { marked } from 'marked';

const Markdown = () => {
  const [text, setText] = useState(`
  # H1
  ## H2
  []() LINK
  ![]() Image
  ** Bold Text **
  *Italicized Text*
  > BlockQuote

Ordered List
1. First item
2. Second item
3. Third item

Unordered List
- First item
- Second item
- Third item

 \`code\`

  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className='text-center'>
      <Home />
      <h1 className='mt-3'>Type Text Below</h1>
      <textarea
        className='w-75'
        style={{ height: 200 }}
        id='editor'
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>

      <div class='border border-danger p-5 pt-2 m-5 mt-5'>
        <h1>Markdown Previewer</h1>
        <div class='text-center'>
          <div
            id='preview'
            class='border p-4'
            style={{ backgroundColor: 'lightblue' }}
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
