import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import History from './components/History';
import Cases from './components/Cases';
import Reporting from './components/Reporting';
import SupportGyn from './components/SupportGyn';
import SpecializedServices from './components/SpecializedServices';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Definition />
        <History />
        <Cases />
        <Reporting />
        <SupportGyn />
        <SpecializedServices />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
