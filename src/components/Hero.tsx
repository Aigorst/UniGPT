import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block">AI-Powered Planning</span>
              <span className="block text-accent-400">for the Modern Student</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Plan Smarter. Network Better. Achieve More. Unlock your academic potential with our intelligent assistant.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative max-w-md w-full mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-lg bg-primary-800/50 border border-primary-700 focus:border-accent-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                />
                <button className="mt-3 sm:mt-0 sm:absolute sm:right-1 sm:top-1 btn btn-primary !py-2 sm:!px-4">
                  <span className="mr-2">Get Started</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-16"
          >
            <div className="relative max-w-3xl mx-auto">
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-accent-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-50"
                animate={{ 
                  opacity: [0.3, 0.4, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6 
                }}
              />
              <div className="relative glass-card p-6 md:p-8 overflow-hidden">
                <div className="aspect-[16/9] bg-primary-800 rounded-lg flex items-center justify-center">
                  <div className="text-accent-400 text-6xl font-bold opacity-20">UniGPT</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;