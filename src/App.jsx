import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/aboutPage';
import ProductsPage from './pages/productsPage';
import KosherPage from './pages/KosherPage';
import PressPage from './pages/pressPage';
import HoneyGalleryPage from './pages/honeyGalleryPage';
import FieldGalleryPage from './pages/fieldGalleryPage';
import ContactPage from './pages/contactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/kosher" element={<KosherPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/honey-gallery" element={<HoneyGalleryPage />} />
        <Route path="/field-gallery" element={<FieldGalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;