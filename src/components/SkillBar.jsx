import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '0px'
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Force animation to start
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Also trigger on mount for testing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setAnimate(true);
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-soft"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-900">{skill.name}</span>
        <span className="text-mf-indigo-700 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ 
            duration: 2,
            delay: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(to right, #F59E0B 0%, #F97316 25%, #14B8A6 50%, #6366F1 75%, #3B82F6 100%)',
            minWidth: animate ? '2px' : '0px'
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
