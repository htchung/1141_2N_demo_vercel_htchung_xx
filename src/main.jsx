import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './blog_xx.scss';
import './index.css';
import App from './App_xx.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
