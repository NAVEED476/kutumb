import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImage, createQuote } from '../services/api';

const QuoteCreationPage: React.FC = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    try {
      const uploadResponse = await uploadImage(file);
      const mediaUrl = uploadResponse.mediaUrl;
      await createQuote(text, mediaUrl);
      navigate('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
    }
  };

  return (
    <div>
      <h1>Create Quote</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your quote"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          required
        />
        <button type="submit">Create Quote</button>
      </form>
    </div>
  );
};

export default QuoteCreationPage;