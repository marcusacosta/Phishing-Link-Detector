export interface PhishingFlags {
  isShortener: boolean;
  hasSuspiciousTLD: boolean;
}

export function analyzeLink(url: string): PhishingFlags {
  const suspiciousTLDs = ['.zip', '.xyz', '.top', '.monster', '.click', '.tk'];
  const shorteners = ['bit.ly', 't.co', 'tinyurl.com', 'goo.gl', 'ow.ly'];

  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch (e) {
    return { isShortener: false, hasSuspiciousTLD: false };
  }

  return {
    isShortener: shorteners.some(domain => hostname.includes(domain)),
    hasSuspiciousTLD: suspiciousTLDs.some(tld => hostname.endsWith(tld)),
  };
}
