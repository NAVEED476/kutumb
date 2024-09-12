import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImage, createQuote } from '../services/api';
import './quoteForm.css';

const QuoteFormPage: React.FC = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

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
    <div className="quote-form-page">
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
          onChange={handleFileChange}
          required
        />
        {preview && (
          <div className="preview-container">
            <img src={preview} alt="Preview" />
          </div>
        )}
        <button type="submit">Create Quote</button>
      </form>
    </div>
  );
};

export default QuoteFormPage;
