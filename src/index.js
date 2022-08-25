import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
