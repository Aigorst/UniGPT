import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="early-access" className="py-20 relative">
      <div className="container">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="glass-card relative overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-600/30 to-primary-800/40 z-0" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your College Experience?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join our early access program and be among the first to experience the power of AI in your academic journey.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <motion.a
                    href="#"
                    className="btn btn-primary py-3 px-6 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} className="mr-2" />
                    <span>Download for iOS</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="btn btn-outline py-3 px-6 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} className="mr-2" />
                    <span>Download for Android</span>
                  </motion.a>
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-400 mb-4">Or join our waitlist for early access:</p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-primary-800/50 border border-primary-700 focus:border-accent-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">Join Waitlist</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </form>
                </div>
                
                <p className="text-gray-400 text-sm mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-600/20 via-purple-600/20 to-blue-600/20 rounded-xl blur-xl"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="relative glass-card p-8 rounded-xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          className="aspect-square bg-accent-600/20 rounded-lg"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <Mail size={24} className="text-accent-400" />
                      <div>
                        <p className="text-white font-medium">Newsletter</p>
                        <p className="text-gray-300 text-sm">Weekly updates on new features</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;