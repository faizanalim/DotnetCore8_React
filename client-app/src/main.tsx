//import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './layout/style.css'
import App from './layout/App';
//import reportWebVitals from './rep';
import { store, StoreContext } from './stores/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
//reportWebVitals();