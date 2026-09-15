import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import CallFloat from './components/CallFloat';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WhyConsult from './pages/WhyConsult';
import Testimonials from './pages/Testimonials';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* ScrollToTop handles scrolling to the top on page changes and displays a quick scroll-up button */}
        <ScrollToTop />
        
        {/* Main layout */}
        <div className="flex flex-col min-h-screen bg-spiritual-black text-spiritual-cream">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/pourquoi-me-consulter" element={<WhyConsult />} />
              <Route path="/temoignages" element={<Testimonials />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/politique-de-confidentialite" element={<Privacy />} />
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <Footer />
        </div>

        {/* Floating Urgencies Buttons */}
        <WhatsAppFloat />
        <CallFloat />
      </Router>
    </HelmetProvider>
  );
}

export default App;
