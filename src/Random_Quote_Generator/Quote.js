import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    async function getQuote() {
      fetch('https://animechan.vercel.app/api/quotes')
        .then((response) => response.json())
        .then((quotes) => setQuotes(quotes));
    }
    getQuote();
  }, []);

  console.log(quotes);
  return (
    <div>
      <Home />
      Quotes = {quotes.anime}
    </div>
  );
};

export default Quote;
