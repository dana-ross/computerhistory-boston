import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const RootComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<RootComponent />);
}