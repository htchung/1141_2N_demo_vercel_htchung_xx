import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './blog_xx.scss';
import App from './App_xx.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
