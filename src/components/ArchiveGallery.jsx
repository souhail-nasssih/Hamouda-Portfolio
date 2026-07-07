import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import archiveImages from '../data/archiveImages';

const chipColors = {
  Poster: 'from-mf-amber-50 to-mf-orange-50 text-mf-amber-700 border-mf-amber-100',
  Event: 'from-mf-teal-50 to-mf-blue-50 text-mf-teal-700 border-mf-teal-100',
  Sport: 'from-mf-indigo-50 to-mf-blue-50 text-mf-indigo-700 border-mf-indigo-100',
  Banner: 'from-gray-50 to-white text-gray-700 border-gray-100',
  'Social Media': 'from-mf-indigo-50 to-mf-teal-50 text-mf-indigo-700 border-mf-indigo-100',
  Illustration: 'from-mf-amber-50 to-mf-blue-50 text-mf-indigo-700 border-mf-amber-100',
  Design: 'from-mf-indigo-50 to-mf-blue-50 text-mf-indigo-700 border-mf-indigo-100',
};

const ArchiveGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const swiperRef = useRef(null);

  // Obtenir toutes les catégories uniques (mémorisé)
  const categories = useMemo(() => ['Tous', ...new Set(archiveImages.map((img) => img.category))], []);

  // Ordre des groupes pour garder les projets liés côte à côte
  const groupOrder = useMemo(() => {
    const seen = new Set();
    const order = [];
    archiveImages.forEach((img) => {
      if (img.group && !seen.has(img.group)) {
        seen.add(img.group);
        order.push(img.group);
      }
    });
    return order;
  }, []);

  // Filtrer par catégorie puis trier par groupe pour regrouper les projets liés
  const filteredImages = useMemo(() => {
    const images =
      selectedCategory === 'Tous'
        ? archiveImages
        : archiveImages.filter((img) => img.category === selectedCategory);

    return [...images].sort((a, b) => {
      const groupA = a.group ?? a.id;
      const groupB = b.group ?? b.id;
      if (groupA !== groupB) {
        return groupOrder.indexOf(groupA) - groupOrder.indexOf(groupB);
      }
      return archiveImages.indexOf(a) - archiveImages.indexOf(b);
    });
  }, [selectedCategory, groupOrder]);

  // Handlers mémorisés
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  }, []);

  // Index de l'image sélectionnée pour Swiper
  const currentImageIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  // Initialiser Swiper à l'image sélectionnée
  useEffect(() => {
    if (selectedImage && swiperRef.current && currentImageIndex >= 0) {
      swiperRef.current.slideTo(currentImageIndex, 0);
    }
  }, [selectedImage, currentImageIndex]);

  // Gestion du clavier (Escape pour fermer)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage, handleCloseModal]);

  return (
    <div className="space-y-8">
      {/* Filtres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mf-indigo-500 focus:ring-offset-2 ${
              selectedCategory === category
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-soft'
            }`}
            aria-label={`Filtrer par ${category}`}
            aria-pressed={selectedCategory === category}
            style={
              selectedCategory === category
                ? {
                    background:
                      'linear-gradient(to right, #D97706 0%, #EA580C 25%, #0D9488 50%, #4F46E5 75%, #2563EB 100%)',
                  }
                : {}
            }
          >
            {category}
            {selectedCategory === category && (
              <span className="ml-2 text-xs">({filteredImages.length})</span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Galerie */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          layout
        >
          <div className="grid gap-6 justify-items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {/* Afficher toutes les images sauf les 1-2 dernières si elles doivent être centrées */}
            {(filteredImages.length % 4 === 1 || filteredImages.length % 4 === 2) && filteredImages.length > 2
              ? filteredImages.slice(0, filteredImages.length - (filteredImages.length % 4 === 1 ? 1 : 2)).map((item, index) => {
                  const chipClass =
                    chipColors[item.category] ||
                    'from-gray-50 to-white text-gray-700 border-gray-100';

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(index * 0.01, 0.3) }}
                      className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-soft group cursor-pointer w-full max-w-[360px]"
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="relative w-full">
                        <div
                          className="relative w-full overflow-hidden rounded-2xl bg-gray-50/70"
                          style={{ paddingTop: '120%' }}
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>

                        {/* Badge - toujours visible mais discret */}
                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${chipClass} shadow-md backdrop-blur-sm opacity-90`}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Overlay et Title - seulement au hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-semibold text-base drop-shadow-lg">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              : filteredImages.map((item, index) => {
                  const chipClass =
                    chipColors[item.category] ||
                    'from-gray-50 to-white text-gray-700 border-gray-100';

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(index * 0.01, 0.3) }}
                      className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-soft group cursor-pointer w-full max-w-[360px] focus-within:ring-2 focus-within:ring-mf-indigo-500 focus-within:ring-offset-2"
                      onClick={() => handleImageClick(item)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleImageClick(item);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Voir ${item.title} en grand format`}
                    >
                      <div className="relative w-full">
                        <div
                          className="relative w-full overflow-hidden rounded-2xl bg-gray-50/70"
                          style={{ paddingTop: '120%' }}
                        >
                          {!loadedImages.has(item.id) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            onLoad={() => handleImageLoad(item.id)}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                              loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        </div>

                        {/* Badge - toujours visible mais discret */}
                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${chipClass} shadow-md backdrop-blur-sm opacity-90`}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Overlay et Title - seulement au hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-semibold text-base drop-shadow-lg">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            
            {/* Les dernières images dans un conteneur flex centré si nécessaire */}
            {filteredImages.length > 0 && (filteredImages.length % 4 === 1 || filteredImages.length % 4 === 2) && filteredImages.length > 2 && (
              <div className="flex justify-center gap-6 w-full" style={{ gridColumn: '1 / -1' }}>
                {filteredImages.slice(filteredImages.length % 4 === 1 ? -1 : -2).map((item, index) => {
                  const chipClass =
                    chipColors[item.category] ||
                    'from-gray-50 to-white text-gray-700 border-gray-100';
                  const remainder = filteredImages.length % 4;
                  const actualIndex = filteredImages.length - (remainder === 1 ? 1 : 2) + index;

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(actualIndex * 0.01, 0.3) }}
                      className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-soft group cursor-pointer w-full max-w-[360px] focus-within:ring-2 focus-within:ring-mf-indigo-500 focus-within:ring-offset-2"
                      onClick={() => handleImageClick(item)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleImageClick(item);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Voir ${item.title} en grand format`}
                    >
                      <div className="relative w-full">
                        <div
                          className="relative w-full overflow-hidden rounded-2xl bg-gray-50/70"
                          style={{ paddingTop: '120%' }}
                        >
                          {!loadedImages.has(item.id) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            onLoad={() => handleImageLoad(item.id)}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                              loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        </div>

                        {/* Badge - toujours visible mais discret */}
                        <div className="absolute top-3 left-3 z-10 pointer-events-none">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${chipClass} shadow-md backdrop-blur-sm opacity-90`}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Overlay et Title - seulement au hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-semibold text-base drop-shadow-lg">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Message si aucune image */}
      {filteredImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">
            Aucune image trouvée dans cette catégorie.
          </p>
        </motion.div>
      )}

      {/* Modal pour voir l'image en grand avec Swiper */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full"
            >
              {/* Bouton Fermer amélioré */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/95 to-white/85 rounded-full flex items-center justify-center hover:from-white hover:to-white transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 backdrop-blur-sm border border-white/20"
                aria-label="Fermer la modal"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Swiper Carousel */}
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  if (currentImageIndex >= 0) {
                    swiper.slideTo(currentImageIndex, 0);
                  }
                }}
                modules={[Navigation, Pagination, Keyboard, EffectFade]}
                navigation={true}
                pagination={{
                  type: 'fraction',
                  clickable: true,
                }}
                keyboard={{
                  enabled: true,
                }}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                speed={600}
                loop={false}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                className="swiper-modal"
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                  '--swiper-pagination-bullet-size': '8px',
                }}
              >
                {filteredImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="flex items-center justify-center h-[90vh] p-4">
                      <div className="relative group">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl"
                          loading="eager"
                        />
                        {/* Overlay avec titre au hover */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <p className="text-white font-semibold text-lg drop-shadow-lg">
                            {image.title}
                          </p>
                          <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchiveGallery;
