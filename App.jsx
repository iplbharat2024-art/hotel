import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import HomeLoan from './pages/HomeLoan';
import Videos from './pages/Videos';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
      <StickyBottomBar />
    </>
  );
}
