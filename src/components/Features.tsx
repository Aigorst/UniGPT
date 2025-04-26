import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Compass, Clock, School, BookOpen } from 'lucide-react';

const featureItems = [
  {
    title: 'Course Planning Assistant',
    description: 'Get personalized course recommendations based on your interests, requirements, and past performance.',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Event Discovery',
    description: 'Discover campus events, workshops, and networking opportunities matched to your interests and goals.',
    icon: Compass,
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Networking Recommendations',
    description: 'Connect with peers, mentors, and professors in your field of study to expand your academic network.',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Schedule Optimization',
    description: 'Generate optimal schedules that balance your classes, study time, personal commitments, and rest.',
    icon: Clock,
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Campus Resources',
    description: 'Easily find and access the right campus resources when you need them, from libraries to tutoring services.',
    icon: School,
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Study Group Matching',
    description: 'Find the perfect study partners based on your courses, learning style, and availability.',
    icon: Calendar,
    color: 'from-yellow-500 to-amber-600',
  },
];

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card glass-card p-6 h-full"
    >
      <div className={`mb-4 p-3 inline-block rounded-xl bg-gradient-to-br ${feature.color}`}>
        <Icon size={24} className="feature-icon text-white transition-all duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 relative">
      <div className="container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Supercharge Your College Experience
          </h2>
          <p className="text-xl text-gray-300">
            UniGPT provides powerful tools to help you navigate your academic journey with confidence and ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;