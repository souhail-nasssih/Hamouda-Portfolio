import { useCallback } from 'react';

/**
 * Hook personnalisé pour le scroll smooth avec easing
 * @param {number} offset - Offset en pixels pour compenser la navbar (défaut: 80)
 * @param {number} duration - Durée de l'animation en ms (défaut: 1000)
 * @returns {Function} Fonction pour scroller vers une section
 */
export const useSmoothScroll = (offset = 80, duration = 1000) => {
  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, [offset, duration]);

  return scrollToSection;
};

