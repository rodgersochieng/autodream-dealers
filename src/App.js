
import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      {/* <Navbar />  */}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

