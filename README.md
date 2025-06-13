## 📬 Project Overview: Phishing Link Detector

This is a lightweight web app built with **React + TypeScript** that helps users identify potentially dangerous links in messages (emails, texts, DMs, etc.).

🔍 Paste any message into the input box, and the app will:
- Extract all visible `http://` or `https://` links
- Analyze each one using phishing heuristics
- Display a summary of risk indicators for each link

---

## ✅ What It Detects

Each link is analyzed using custom logic to flag two key phishing risk signals:

| Heuristic | Description |
|----------|-------------|
| ⚠️ **Shortened Link** | Links using common shortening services like `bit.ly`, `t.co`, `tinyurl.com`, which are often used to mask malicious destinations |
| 🚩 **Suspicious TLD** | Domains that end in high-risk extensions such as `.xyz`, `.zip`, `.click`, `.monster`, etc., which are frequently used in phishing scams |

---

## 🧠 How Results Are Calculated

No AI model is used yet — just smart logic.

Each URL is parsed using JavaScript’s `URL` constructor and evaluated against:
- A list of known **URL shortener domains**
- A list of suspicious or uncommon **top-level domains (TLDs)**

Each result is returned with flags like:

```json
{
  "url": "https://bit.ly/login-now",
  "flags": {
    "isShortener": true,
    "hasSuspiciousTLD": false
  }
}
