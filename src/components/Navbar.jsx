import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = useSmoothScroll(80, 1000);

  const sections = useMemo(() => ['home', 'about', 'portfolio', 'experience', 'contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Détecter la section active
      const scrollPosition = window.scrollY + 100; // Offset pour la navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Appel initial pour définir la section active
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleScrollToSection = useCallback((sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  }, [scrollToSection]);

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Expérience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleScrollToSection('home')}
            className="flex items-center space-x-2"
            aria-label="Retour à l'accueil"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold text-gradient"
            >
              MF
            </motion.div>
            <span className="hidden sm:block text-lg font-semibold text-gray-900">
              Mohamed Fechtali
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className={`font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-mf-indigo-500 focus:ring-offset-2 border-none ${
                    isActive 
                      ? 'text-gray-900 font-semibold' 
                      : 'text-gray-700 hover:text-mf-indigo-700'
                  }`}
                  style={{ border: 'none', outline: 'none' }}
                  aria-label={`Aller à la section ${link.label}`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{
                      background: 'linear-gradient(to right, #D97706 0%, #EA580C 25%, #0D9488 50%, #4F46E5 75%, #2563EB 100%)'
                    }}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScrollToSection(link.id)}
                    className={`block w-full text-left py-2 font-medium transition-colors relative pl-4 focus:outline-none focus:ring-2 focus:ring-mf-indigo-500 focus:ring-offset-2 ${
                      isActive 
                        ? 'text-gray-900 font-semibold' 
                        : 'text-gray-700 hover:text-mf-indigo-700'
                    }`}
                    aria-label={`Aller à la section ${link.label}`}
                  >
                    {link.label}
                    {isActive && (
                      <span 
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                        style={{
                          background: 'linear-gradient(to bottom, #D97706 0%, #EA580C 25%, #0D9488 50%, #4F46E5 75%, #2563EB 100%)'
                        }}
                      ></span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
