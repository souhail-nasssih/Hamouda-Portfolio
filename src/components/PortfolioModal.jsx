import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const PortfolioModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="relative h-64 bg-gradient-to-br from-mf-amber-100 via-mf-teal-100 to-mf-indigo-100">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Fermer"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 mb-2">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Case Study */}
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-mf-indigo-50 to-mf-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Défi</h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
              <div className="bg-gradient-to-r from-mf-amber-50 to-mf-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Approche</h3>
                <p className="text-gray-700">{project.approach}</p>
              </div>
              <div className="bg-gradient-to-r from-mf-teal-50 to-mf-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">✨ Résultat</h3>
                <p className="text-gray-700">{project.result}</p>
              </div>
            </div>

            {/* Tools & Tags */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Outils utilisés</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-mf-indigo-100 to-mf-blue-100 text-mf-indigo-700 font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 bg-gradient-rainbow text-white rounded-xl font-semibold text-center hover:shadow-color transition-all"
              >
                Voir le projet complet
              </motion.a>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-mf-indigo-500 text-mf-indigo-600 rounded-xl font-semibold hover:bg-mf-indigo-50 transition-colors"
              >
                Fermer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;

