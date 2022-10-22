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

  console.log(quotes);
  return (
    <>
      <Home />
      <div className='container'>
        {quotes.map((quote, idx) => {
          return <div key={idx}>{quote.anime}</div>;
        })}
      </div>
    </>
  );
};

export default Quote;
