import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuotes } from '../services/api';
import QuoteList from '../components/QuoteList';
import './quoteList.css';

interface Quote {
  id: string;
  text: string;
  mediaUrl: string;
  username: string;
  created_at: string;
}

const QuoteListPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchQuotes = async () => {
    try {
      const response: any = await getQuotes(20, offset);
      const newQuotes = response.data;
  
      if (Array.isArray(newQuotes)) {
        if (newQuotes.length === 0) {
          setHasMore(false);
        } else {
          setQuotes((prevQuotes) => [...prevQuotes, ...newQuotes]);
          setOffset((prevOffset) => prevOffset + newQuotes.length);
        }
      } else {
        console.error('API response data is not an array:', newQuotes);
      }
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
    }
  };
  

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="quote-list-page">
      <h1>Quotes of the Day!</h1>
      <Link to="/create-quote">
        <button className="create-button">Create Quote</button>
      </Link>
      <div className='quotes-list'>
      <QuoteList quotes={quotes} />
      </div>
      {hasMore && <button className="load-more-button" onClick={fetchQuotes}>Load More</button>}
      <Link to="/create-quote">
        <button className="create-button">Create Quote</button>
      </Link>
    </div>
  );
};

export default QuoteListPage;
