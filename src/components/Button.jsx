import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  const scrollToSection = useSmoothScroll(80, 600); // Durée réduite à 600ms pour plus de réactivité
  
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'text-white font-bold hover:shadow-color-lg hover:scale-105 focus:ring-mf-indigo-600 shadow-xl',
    outline: 'border-2 border-mf-indigo-600 text-mf-indigo-700 hover:bg-mf-indigo-50 focus:ring-mf-indigo-600 bg-white',
    gradient: 'bg-gradient-to-r from-mf-amber-500 to-mf-orange-600 text-white hover:shadow-lg hover:scale-105 shadow-lg',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e) => {
    const targetHref = href || to;
    if (targetHref && targetHref.startsWith('#')) {
      e.preventDefault();
      scrollToSection(targetHref.substring(1));
    }
    if (onClick) onClick(e);
  };

  const buttonStyle = variant === 'primary' ? {
    background: 'linear-gradient(to right, #D97706 0%, #EA580C 25%, #0D9488 50%, #4F46E5 75%, #2563EB 100%)',
  } : {};

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={classes}
      style={buttonStyle}
      onClick={handleClick}
      type={type}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (to) {
    if (to.startsWith('#')) {
      return (
        <a href={to} onClick={handleClick} className="inline-block">
          {buttonContent}
        </a>
      );
    }
    return (
      <a href={to} className="inline-block" target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} onClick={handleClick} className="inline-block">
          {buttonContent}
        </a>
      );
    }
    return (
      <a href={href} className="inline-block" target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default Button;
