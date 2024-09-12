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

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  return (
    <div>
      {quotes.map((quote) => (
        <QuoteItem key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;