import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'blitzy-ui/styles/global.css'
import reportWebVitals from './reportWebVitals';
import { BlitzyThemeProvider } from 'blitzy-ui';

// Define custom themes without needing daisyUI or Tailwind
const myCustomThemes = [
  {
    name: 'corporate',
    colors: {
      primary: '#0066CC',
      primaryContent: '#FFFFFF',
      secondary: '#00AA55',
      secondaryContent: '#FFFFFF',
      accent: '#FF6600',
      accentContent: '#FFFFFF',
      neutral: '#333333',
      neutralContent: '#FFFFFF',
      base100: '#FFFFFF',
      base200: '#F8F8F8',
      base300: '#E0E0E0',
      baseContent: '#333333',
      info: '#0099FF',
      infoContent: '#FFFFFF',
      success: '#00AA55',
      successContent: '#FFFFFF',
      warning: '#FFAA00',
      warningContent: '#000000',
      error: '#FF3333',
      errorContent: '#FFFFFF',
    }
  },
  {
    name: 'midnight',
    colors: {
      primary: '#7C3AED',
      primaryContent: '#FFFFFF',
      secondary: '#10B981',
      secondaryContent: '#FFFFFF',
      accent: '#F59E0B',
      accentContent: '#000000',
      neutral: '#1F2937',
      neutralContent: '#F9FAFB',
      base100: '#111827',
      base200: '#1F2937',
      base300: '#374151',
      baseContent: '#F9FAFB',
      info: '#3B82F6',
      infoContent: '#FFFFFF',
      success: '#10B981',
      successContent: '#FFFFFF',
      warning: '#F59E0B',
      warningContent: '#000000',
      error: '#EF4444',
      errorContent: '#FFFFFF',
    }
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlitzyThemeProvider customThemes={myCustomThemes}>
      <App />
    </BlitzyThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
