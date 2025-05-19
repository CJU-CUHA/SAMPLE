import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Dev from './pages/Dev';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logon" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;