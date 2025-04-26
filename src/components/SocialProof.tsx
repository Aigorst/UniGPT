import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Users, Book, School } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Computer Science Student',
    quote: 'UniGPT transformed how I plan my semesters. The course recommendations are spot-on and I\'ve saved hours of time.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Business Major',
    quote: 'The networking feature helped me connect with alumni in my field. I ended up securing an internship through a connection I made!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Engineering Student',
    quote: 'Study group matching is a game-changer. I found peers who complement my learning style and we\'ve been acing our exams together.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
  },
];

const universityPartners = [
  'Stanford University',
  'MIT',
  'Harvard University',
  'UC Berkeley',
  'NYU',
  'University of Michigan',
];

const stats = [
  { label: 'Active Users', value: '25,000+', icon: Users },
  { label: 'Universities', value: '120+', icon: School },
  { label: 'Courses Planned', value: '180,000+', icon: Book },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6"
    >
      <div className="flex items-start mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-gray-300">{testimonial.quote}</p>
    </motion.div>
  );
};

const SocialProof = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative">
      <div className="container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Students Nationwide
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of students using UniGPT to transform their college experience.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-accent-600/20 rounded-full">
                  <StatIcon size={32} className="text-accent-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* University Partners */}
        <motion.div
          ref={partnersRef}
          initial={{ opacity: 0, y: 20 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl text-gray-300 mb-8">Trusted by top universities</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {universityPartners.map((partner, index) => (
              <div key={partner} className="text-lg md:text-xl font-medium text-gray-400 hover:text-accent-400 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;