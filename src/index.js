import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/ModalContext';
import { Provider2 } from './context/gameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Provider2>
        <App />
      </Provider2>
    </Provider>
  </React.StrictMode>
);
