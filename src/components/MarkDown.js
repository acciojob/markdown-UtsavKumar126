import React, { useState, useEffect } from 'react'
import { markdown } from 'markdown';

const MarkdownApp = () => {
  const [markdownText, setMarkdownText] = useState('');
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // You can add additional processing here if needed
    // For now, just update the preview with the markdown content
    setPreview(markdown);
  }, [markdown]);

  const handleMarkdownChange = (event) => {
    // Update the markdown state when the user types in the textarea
    setMarkdownText(event.target.value);
  };

  const handlePreviewLoading = () => {
    // Simulate loading if needed
    setIsLoading(true);

    // Simulate asynchronous processing (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdownText}
          onChange={handleMarkdownChange}
          placeholder="Write your markdown here..."
        />
      </div>

      <div className="preview">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div>
            <h2>Markdown Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(markdownText) }} />
          </div>
        )}
      </div>

      <button onClick={handlePreviewLoading}>Load Preview</button>
    </div>
  );
};

export default MarkdownApp;
