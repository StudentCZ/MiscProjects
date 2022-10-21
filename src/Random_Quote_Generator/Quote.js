import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  return (
    <div>
      <Home />
      Quotes
    </div>
  );
};

export default Quote;
