import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  down: {
    hidden: { opacity: 0, y: -60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  rotate: {
    hidden: { opacity: 0, y: 40, rotate: -3, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' },
  },
};

const Reveal = ({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
  staggerChildren = 0,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'visible' }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay,
          ease: [0.17, 0.55, 0.55, 1],
          ...(staggerChildren > 0 && {
            staggerChildren,
            delayChildren: delay,
          }),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
