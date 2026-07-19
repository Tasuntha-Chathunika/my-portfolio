import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = '100%', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'visible' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
