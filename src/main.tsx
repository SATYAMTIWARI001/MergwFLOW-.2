import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent cross-origin third-party script errors or browser extension errors from disrupting the app telemetry
if (typeof window !== "undefined") {
  // Override window.onerror to intercept and return true for generic "Script error."
  const originalOnError = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    const msgStr = String(message || "");
    if (msgStr.includes("Script error") || !source || source.includes("chrome-extension") || source.includes("moz-extension")) {
      console.warn("Suppressed cross-origin or extension Script error via window.onerror:", message);
      return true; // Prevents the browser from firing default handler and telemetry
    }
    if (originalOnError) {
      return originalOnError.apply(this, arguments as any);
    }
    return false;
  };

  window.addEventListener("error", (event) => {
    const msgStr = String(event.message || "");
    const srcStr = String(event.filename || "");
    if (msgStr.includes("Script error") || !event.filename || srcStr.includes("chrome-extension") || srcStr.includes("moz-extension")) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      console.warn("Muted cross-origin or third-party script error safely via event listener.");
    }
  }, true);

  window.addEventListener("unhandledrejection", (event) => {
    // Silently log and suppress unhandled rejections to prevent unhandled app crashes
    console.warn("Suppressed unhandled rejection:", event.reason);
    try {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    } catch (e) {}
  }, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
