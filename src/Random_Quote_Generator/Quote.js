import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');

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

  const getNewQuote = () => {
    let randomIdx = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIdx]);
  };

  return (
    <>
      <Home />
      <div className='container pt-5'>
        <div className='jumbotron'>
          <div className='card'>
            <div className='card-header text-center'>Anime Quotes</div>
            <div className='card-body'>
              {randomQuote ? (
                <div>
                  <h5 className='card-title text-center'>
                    {randomQuote.character}
                  </h5>
                  <p className='card-text text-center'>
                    &quot;{randomQuote.quote}&quot;
                  </p>
                </div>
              ) : (
                <>
                  <h2>Loading</h2>
                </>
              )}
              <div className='row'>
                <button
                  className='btn btn-primary text-right'
                  onClick={getNewQuote}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
