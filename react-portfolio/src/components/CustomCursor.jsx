import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const innerSize = isHovering ? 8 : 6;
  const outerSize = isHovering ? 40 : 30;

  // Spring physics for smooth trailing
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const innerX = useSpring(mouseX, { damping: 30, stiffness: 500, mass: 0.1 });
  const innerY = useSpring(mouseY, { damping: 30, stiffness: 500, mass: 0.1 });

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Elements that should trigger the hover scale effect
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.group\\/stat') ||
        target.closest('.glass-card') ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[1000] pointer-events-none rounded-full mix-blend-difference bg-white"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
          width: innerSize,
          height: innerSize,
          boxShadow: '0 0 10px rgba(255,255,255,0.8)'
        }}
        animate={{
          scale: isHovering ? 0 : 1, // Hide inner dot on hover
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Outer Ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[999] pointer-events-none rounded-full mix-blend-difference border-[1.5px] border-white/50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: outerSize,
          height: outerSize,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'transparent',
          boxShadow: isHovering ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'transparent' : 'rgba(255,255,255,0.5)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
