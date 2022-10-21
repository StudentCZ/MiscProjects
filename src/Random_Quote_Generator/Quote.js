import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/random')
      .then((response) => response.json())
      .then((quote) => setQuotes(quote));
  }, []);

  return (
    <div>
      <Home />
      Quotes = {quotes.anime}
    </div>
  );
};

export default Quote;
