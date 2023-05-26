import React from 'react';
import App from './components/App';
import { createRoot } from'react-dom/client';
import './style/index.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
    <App />
);


