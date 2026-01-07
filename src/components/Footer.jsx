import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = useSmoothScroll(80, 1000);

  const footerLinks = {
    navigation: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À Propos' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'experience', label: 'Expérience' },
      { id: 'contact', label: 'Contact' },
    ],
    social: [
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
      { name: 'Behance', href: '#', icon: 'behance' },
      { name: 'Dribbble', href: '#', icon: 'dribbble' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              Mohamed Fechtali
            </h3>
            <p className="text-gray-400 mb-4">
              Designer d'infographies créatif, transformant des données complexes en visualisations engageantes.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mf-indigo-700 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon === 'linkedin' ? 'in' : social.icon[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-mf-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mf-indigo-500 focus:ring-offset-2 rounded"
                    aria-label={`Aller à la section ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Travaillons ensemble</h4>
            <p className="text-gray-400 mb-4">
              Vous avez un projet en tête ? Discutons-en !
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-block px-6 py-3 bg-gradient-rainbow text-white rounded-xl font-semibold hover:shadow-color transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mf-indigo-500 focus:ring-offset-2"
              aria-label="Aller à la section contact"
            >
              Me Contacter
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Mohamed Fechtali. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
