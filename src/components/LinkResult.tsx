import type { LinkData } from '../types/LinkData';

interface Props {
  results: LinkData[];
}

export default function LinkResult({ results }: Props) {
  if (results.length === 0) return null;

  return (
    <div>
      <h2>Scan Results</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>URL</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Shortener?</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Suspicious TLD?</th>
          </tr>
        </thead>
        <tbody>
          {results.map((link, idx) => (
            <tr key={idx}>
              <td style={{ padding: '0.5rem 0' }}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </td>
              <td style={{ textAlign: 'center' }}>
                {link.flags.isShortener ? '⚠️ Shortener' : '✅ Safe'}
              </td>
              <td style={{ textAlign: 'center' }}>
                {link.flags.hasSuspiciousTLD ? '🚩 Suspicious' : '✅ Safe'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
