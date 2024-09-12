import React from 'react';
import QuoteItem from './QuoteItem';

interface Quote {
  id: string;
  text: string;
  mediaUrl: string;
  username: string;
  created_at: string;
}

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes = [] }) => {
  if (!Array.isArray(quotes)) {
    console.error('Quotes prop is not an array:', quotes);
    return <div>Error: Quotes data is not valid.</div>;
  }

  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {quotes.map((quote) => (
        <QuoteItem key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;
