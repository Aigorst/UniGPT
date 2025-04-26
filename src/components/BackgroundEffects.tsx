import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-accent-600/20 blur-3xl"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundSize: '400% 400%'
        }}
      />
      
      {/* Left Blob */}
      <motion.div
        className="absolute -left-32 top-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Right Blob */}
      <motion.div
        className="absolute -right-32 top-2/3 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Center Blob */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[40rem] h-[40rem] bg-accent-600/20 rounded-full blur-3xl"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-transparent to-primary-950/80" />
    </div>
  );
};

export default BackgroundEffects;