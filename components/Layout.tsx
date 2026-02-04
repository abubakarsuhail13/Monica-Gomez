
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-navy-900 tracking-tight flex items-center">
            <span className="w-8 h-8 bg-blue-600 rounded-lg mr-2 flex items-center justify-center text-white text-xs">MG</span>
            MONICA<span className="text-blue-600">GOMEZ</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-100 ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="hidden md:block bg-navy-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all shadow-md transform hover:-translate-y-0.5 active:scale-95">
            Let's Connect
          </Link>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass absolute top-full left-0 w-full p-6 shadow-2xl flex flex-col space-y-4 border-b border-slate-200"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium p-2 rounded-lg ${location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-slate-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white p-3 rounded-xl text-center font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Monica
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 overflow-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-slate-300 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4 flex items-center">
               <span className="w-6 h-6 bg-blue-600 rounded mr-2 flex items-center justify-center text-white text-[10px]">MG</span>
               Monica Gomez
            </h3>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Bilingual Senior Recruiter & Strategic Recruiting Partner with 10+ years of experience building high-performance teams across multiple industries.
            </p>
            <div className="flex space-x-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:link2test@gmail.com" className="hover:text-blue-400 transition-colors w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 opacity-50"></i> About Monica</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 opacity-50"></i> Talent Solutions</Link></li>
              <li><Link to="/experience" className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 opacity-50"></i> Experience</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-[10px] mr-2 opacity-50"></i> Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start"><i className="fas fa-location-dot mt-1 mr-3 text-blue-500"></i> San Diego, CA (Nationwide)</li>
              <li className="flex items-center"><i className="fas fa-phone mr-3 text-blue-500"></i> 600-700-4000</li>
              <li className="flex items-center"><i className="fas fa-envelope mr-3 text-blue-500"></i> link2test@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Monica Gomez Recruiting. All Rights Reserved.</p>
          <p className="flex items-center">
            Powered by&nbsp;
            <a 
              href="https://www.nexaforgetech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors border-b border-blue-400/30 hover:border-blue-300"
            >
              Nexaforge Technologies
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
