import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from './PortfolioModal';

const PortfolioCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      'Infographie': 'bg-mf-blue-500',
      'Branding': 'bg-mf-indigo-500',
      'Social Media': 'bg-mf-teal-500',
      'Brochure': 'bg-mf-orange-500',
      'Poster': 'bg-mf-amber-500',
      'Data Visualization': 'bg-mf-indigo-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl shadow-soft overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-mf-amber-100 to-mf-indigo-100">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`${getCategoryColor(project.category)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
            >
              {project.category}
            </span>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-semibold">Voir les détails →</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-mf-indigo-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gradient-to-r from-mf-indigo-50 to-mf-blue-50 text-mf-indigo-700 text-xs font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <PortfolioModal
            project={project}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioCard;

