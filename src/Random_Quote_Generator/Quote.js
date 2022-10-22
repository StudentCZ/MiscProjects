import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    async function getQuote() {
      const res = await fetch('https://animechan.vercel.app/api/quotes');
      const data = await res.json();

      setQuotes(data);
      let randomIdx = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIdx]);
    }
    getQuote();
  }, []);

  return (
    <>
      <Home />
      <div className='text-center container pt-5'>
        <div className='jumbotron'>
          <div className='card'></div>
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default Quote;
