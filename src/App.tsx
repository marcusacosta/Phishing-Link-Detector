import { useEffect, useState } from 'react';
import TextInput from './components/TextInput';
import LinkResult from './components/LinkResult';
import type { LinkData } from './types/LinkData';

function App() {
  const [results, setResults] = useState<LinkData[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the 'dark' class on <body>
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🔍 Phishing Link Detector</h1>
        <p>Paste a message or email to scan for suspicious links and scams.</p>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <TextInput onScanComplete={setResults} />
      <LinkResult results={results} />
    </div>
  );
}

export default App;
