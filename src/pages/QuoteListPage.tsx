import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuotes } from '../services/api';
import QuoteList from '../components/QuoteList';

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
      const newQuotes = await getQuotes(20, offset);
      if (newQuotes.length === 0) {
        setHasMore(false);
      } else {
        setQuotes((prevQuotes) => [...prevQuotes, ...newQuotes]);
        setOffset((prevOffset) => prevOffset + newQuotes.length);
      }
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
      // Handle error (e.g., show error message)
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList quotes={quotes} />
      {hasMore && <button onClick={fetchQuotes}>Load More</button>}
      <Link to="/create-quote">
        <button>Create Quote</button>
      </Link>
    </div>
  );
};

export default QuoteListPage;