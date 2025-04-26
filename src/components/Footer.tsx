import React from 'react';
import { BrainCircuit, Mail, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Early Access', href: '#early-access' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Student Resources', href: '#' },
      { name: 'University Partners', href: '#' },
      { name: 'API Documentation', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };
  
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="pt-20 pb-10 bg-primary-900/50 border-t border-primary-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-white mb-4">
              <BrainCircuit size={28} className="text-accent-500" />
              <span className="text-xl font-display font-semibold">UniGPT</span>
            </a>
            
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered student planning and networking assistant. Plan smarter, network better, and achieve more in your academic journey.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                
                return (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-800 hover:bg-accent-600 text-gray-300 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-accent-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="glass-card p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-medium mb-1">Stay up to date</h4>
              <p className="text-gray-400">Get notified about new features and updates.</p>
            </div>
            
            <form className="flex w-full md:w-auto">
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-lg bg-primary-800 border border-primary-700 focus:border-accent-500 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 rounded-r-lg bg-accent-600 hover:bg-accent-700 text-white font-medium"
              >
                Subscribe
                <Mail size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} UniGPT. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;