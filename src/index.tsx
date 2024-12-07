import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { setUpStore } from './store/store';
import { Provider } from 'react-redux';
import { SelectContext } from './context/SubjectContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setUpStore()

root.render(
  <Provider store={store}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
  </Provider>
);


