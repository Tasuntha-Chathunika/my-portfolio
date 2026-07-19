import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for the transition effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg overflow-hidden"
        >
          {/* Cool animated brand mark or loading text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
             <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-accent-1 border-t-transparent animate-spin"></div>
                <h2 className="text-2xl font-black font-display tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 animate-pulse">
                   Tasuntha
                </h2>
             </div>
          </motion.div>

          {/* Bottom slide up elements for premium feel */}
          <motion.div 
             initial={{ height: '0%' }}
             exit={{ height: '100%' }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="absolute bottom-0 left-0 w-full bg-accent-1 z-[-1]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
