import React from 'react';
import Home from '../Home';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const [color, setColor] = useState('');

  async function getQuote() {
    const res = await fetch('https://animechan.vercel.app/api/quotes');
    const data = await res.json();

    setQuotes(data);
    let randomIdx = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIdx]);
  }

  const getNewQuote = () => {
    const colors = [
      '#FF3F33',
      '#FF9933',
      '#FFD433',
      '#ECFF33',
      '#C4FF33',
      '#5EFF33',
      '#33FF7A',
      '#33FFC7',
      '#33F0FF',
      '#339FFF',
      '#3364FF',
      '#3C33FF',
      '#8633FF',
      '#CA33FF',
      '#FF33F0',
      '#FF33C4',
      '#FF3380',
    ];
    let randomColorIdx = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColorIdx]);
    getQuote();
    // let randomIdx = Math.floor(Math.random() * quotes.length);
    // setRandomQuote(quotes[randomIdx]);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  console.log(quotes);
  return (
    <>
      <Home />
      <div
        className='easeOut'
        style={{ backgroundColor: color, minHeight: '100vh' }}
      >
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
      </div>
    </>
  );
};

export default Quote;
