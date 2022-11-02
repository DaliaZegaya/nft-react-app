import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthProvider } from '../src/contexts/userAuth.context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
  <UserAuthProvider>
    <Router>
      <App />
    </Router>
  </UserAuthProvider>
  </React.StrictMode>
);

