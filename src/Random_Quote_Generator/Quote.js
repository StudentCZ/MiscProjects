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
      <div className='container pt-5 text-center'>
        <div className='jumbotron'>
          <div className='card'>
            <div className='card-header'>Anime Quotes</div>
            <div className='card-body'>
              {randomQuote ? (
                <div>
                  <h5 className='card-title'>{randomQuote.character}</h5>
                  <p className='card-text'>&quot;{randomQuote.quote}&quot;</p>
                </div>
              ) : (
                <>
                  <h2>Loading</h2>
                </>
              )}
              <div className='row pt-3 btn-group'>
                <div className='col'>
                  <button className='btn btn-primary' onClick={getNewQuote}>
                    New Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
