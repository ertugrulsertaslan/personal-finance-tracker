import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Layout>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/components/Dashboard' element={<Dashboard />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
