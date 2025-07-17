import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function Emoji() {
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleDelete = () => {
    const chars = Array.from(text);
    chars.pop();
    setText(chars.join(''));
  };

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Emoji Picker</h2>

      <input
        type="text"
        readOnly
        value={text}
        placeholder="Click emojis to add here..."
        style={{
          padding: '10px',
          fontSize: 18,
          width: '90%',
          maxWidth: 400,
          marginBottom: 10,
          textAlign: 'center',
        }}
      />

      <div>
        <button
          onClick={() => setShowPicker((v) => !v)}
          style={{
            margin: 5,
            padding: '8px 16px',
            fontSize: 16,
            cursor: 'pointer',
            borderRadius: 6,
            border: '1px solid #007bff',
            backgroundColor: showPicker ? '#0056b3' : '#007bff',
            color: 'white',
          }}
        >
          {showPicker ? 'Hide Picker' : 'Show Picker'}
        </button>

        <button
          onClick={handleDelete}
          style={{
            margin: 5,
            padding: '8px 16px',
            fontSize: 16,
            cursor: 'pointer',
            borderRadius: 6,
            border: '1px solid #dc3545',
            backgroundColor: '#dc3545',
            color: 'white',
          }}
        >
          ⬅ Delete Last Emoji
        </button>
      </div>

      {showPicker && (
        <div style={{ marginTop: 20, display: 'inline-block' }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}