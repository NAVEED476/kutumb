import React from 'react';

interface QuoteItemProps {
  quote: {
    text: string;
    mediaUrl: string;
    username: string;
    created_at: string;
  };
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  return (
    <div className="quote-item">
      <div className="quote-image" style={{ backgroundImage: `url(${quote.mediaUrl})` }}>
        <p className="quote-text">{quote.text}</p>
      </div>
      <div className="quote-info">
        <p>Posted by: {quote.username}</p>
        <p>Created at: {new Date(quote.created_at).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default QuoteItem;