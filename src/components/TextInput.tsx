import { useState } from 'react';
import { extractLinks } from '../utils/linkExtractor';
import { analyzeLink } from '../utils/phishingHeuristics';
import type { LinkData } from '../types/LinkData';

interface Props {
  onScanComplete: (results: LinkData[]) => void;
}

export default function TextInput({ onScanComplete }: Props) {
  const [message, setMessage] = useState('');

  const handleScan = () => {
    const links = extractLinks(message);
    const analyzed = links.map((url) => ({
      url,
      flags: analyzeLink(url)
    }));
    onScanComplete(analyzed);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <textarea
        rows={8}
        cols={80}
        placeholder="Paste your text message or email content here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', padding: '0.5rem' }}
      />
      <button onClick={handleScan} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>
        Scan
      </button>
    </div>
  );
}
