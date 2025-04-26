import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, UserPlus, BookOpen, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create Your Profile',
    description: 'Sign up and tell us about your academic goals, interests, and schedule preferences.',
    icon: UserPlus,
    illustration: (
      <div className="relative h-64 bg-primary-800/50 rounded-lg p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-transparent rounded-lg" />
        <motion.div
          className="w-20 h-20 bg-accent-600/20 rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <UserPlus size={32} className="text-accent-400" />
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Input Your Courses',
    description: 'Add your current and past courses, or import your academic record directly.',
    icon: BookOpen,
    illustration: (
      <div className="relative h-64 bg-primary-800/50 rounded-lg p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-transparent rounded-lg" />
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-16 h-24 bg-accent-600/20 rounded-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Get Personalized Plans',
    description: 'Receive AI-generated recommendations optimized for your goals and preferences.',
    icon: Zap,
    illustration: (
      <div className="relative h-64 bg-primary-800/50 rounded-lg p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-transparent rounded-lg" />
        <motion.div
          className="grid grid-cols-2 gap-3"
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-8 bg-accent-600/20 rounded" />
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Stay Connected',
    description: 'Discover events, form study groups, and expand your network throughout the semester.',
    icon: Download,
    illustration: (
      <div className="relative h-64 bg-primary-800/50 rounded-lg p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-transparent rounded-lg" />
        <motion.div
          className="flex gap-6"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 bg-accent-600/20 rounded-full" />
          ))}
        </motion.div>
      </div>
    ),
  }
];

const Step = ({ step, index, isActive, onClick }) => {
  const Icon = step.icon;
  
  return (
    <div 
      className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-110' : 'opacity-70 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div 
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? 'bg-accent-600 text-white' : 'bg-primary-800 text-gray-300'
        }`}
      >
        <Icon size={24} />
      </div>
      <div className="mt-3 text-center">
        <h4 className={`font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
          {step.title}
        </h4>
      </div>
      
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute h-[2px] bg-primary-700 top-7 left-1/2 w-full transform translate-x-1/2">
          <div 
            className={`h-full bg-accent-600 transition-all duration-500 ${
              isActive ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentStep = steps.find(step => step.id === activeStep);

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300">
            Get started with UniGPT in just a few simple steps.
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 mb-12">
            {steps.map((step, index) => (
              <Step 
                key={step.id} 
                step={step} 
                index={index}
                isActive={step.id === activeStep}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>

          {/* Step Details */}
          <div className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {currentStep?.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {currentStep?.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-accent-600/20 p-1 rounded mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">Quick and intuitive setup process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-600/20 p-1 rounded mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">Secure data protection and privacy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-600/20 p-1 rounded mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">Personalized to your unique needs</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                key={`illustration-${activeStep}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                {currentStep?.illustration}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;