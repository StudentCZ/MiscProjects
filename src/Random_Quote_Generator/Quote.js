import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://animechan.vercel.app/api/random')
      .then((response) => response.json())
      .then((quote) => setQuotes(quote));
    setLoading(false);
  }, []);

  return (
    <div>
      <Home />
      Quotes = {quotes.anime}
    </div>
  );
};

export default Quote;
