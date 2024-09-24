import React, { useState, useEffect } from 'react';
import "./App.css"
function App() {
  const [text, setText] = useState('');
  const [uniqueWords, setUniqueWords] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    const countUniqueWords = (text) => {
      const words = text.split(/\s+/);
      const uniqueWordsSet = new Set(words.map((word) => word.toLowerCase()));
      return uniqueWordsSet.size;
    };

    const countCharacters = (text) => {
      return text.replace(/[^a-zA-Z0-9]/g, '').length;
    };

    setUniqueWords(countUniqueWords(text));
    setCharacterCount(countCharacters(text));
  }, [text]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleReplace = () => {
    const searchString = document.getElementById('searchString').value;
    const replaceString = document.getElementById('replaceString').value;
    const replacedText = text.replace(new RegExp(searchString, 'g'), replaceString);
    setText(replacedText);
  };
  return (
    <div className="textarea-container">
      <textarea id="textInput" rows="10" cols="50" value={text} onChange={handleInputChange} />
      <div className="statistics">
        <p className = "uniqueWord">Unique Words: <span id="uniqueWordCount">{uniqueWords}</span></p>
        <p className = "uniqueChar">Character Count: <span id="characterCount">{characterCount}</span></p>
      </div>
      <div className="replacement-controls">
        <input type="text" id="searchString" placeholder="Search String" />
        <br/>
        <input type="text" id="replaceString" placeholder="Replace String" />
        <br/>
        <button className = "ButtonElement" id="replaceButton" onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
}

export default App;