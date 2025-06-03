import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin as LinkedIn, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@nirvanax.in',
    link: 'mailto:contact@nirvanax.in'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8382990469',
    link: 'tel:+91-8382990469'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sector 150 Noida, India',
    link: 'https://maps.google.com'
  }
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/nirvanaxofficial?igsh=MTV6eDBpZ3BsYjQyMQ=='
  },
  {
    icon: Facebook,
    label: 'Facebook',
    link: 'https://twitter.com'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: 'https://twitter.com'
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/company/nirvana-x/'
  }
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        'service_khn80b9',
        'template_s9z8muo',
        form,
        '8GsJpln8NSybxSk2A'
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      form.reset();
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-true-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ogilvy-red rounded-full opacity-5 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-ogilvy-red rounded-full opacity-5 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-playfair font-bold mb-6 text-white">
            Let's <span className="text-ogilvy-red">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have a project in mind? Reach out and let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800/50"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-ogilvy-red/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-ogilvy-red/50 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-ogilvy-red/50 focus:border-transparent transition-all duration-300"
                  placeholder="Project Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-ogilvy-red/50 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
              </div>

              {formStatus.message && (
                <div className={`p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-ogilvy-red to-ogilvy-red/90 text-white py-5 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg shadow-lg shadow-red-900/20"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Studio Hours */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-xl border border-slate-800/50">
              <h3 className="text-3xl font-playfair font-bold mb-10 text-white">Contact Details</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-6 group"
                    >
                      <div className="p-4 bg-slate-800/50 rounded-lg group-hover:bg-ogilvy-red/20 transition-all duration-500">
                        <Icon className="text-ogilvy-red" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                        <p className="text-lg text-white group-hover:text-ogilvy-red transition-colors duration-500">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links & Studio Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Social Links */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50">
                <h3 className="text-2xl text-center font-playfair font-bold mb-8 text-white">Follow Us</h3>
                <div className="flex  flex-wrap justify-center  gap-6 py-2 ">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className="p-5 bg-slate-800/50 rounded-lg hover:bg-ogilvy-red/20 transition-all duration-500 group flex flex-col items-center"
                      >
                        <Icon className="text-ogilvy-red group-hover:text-white" size={24} />
                        <span className="text-xs text-slate-400 mt-2">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Studio Hours */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50">
                <h3 className="text-2xl font-playfair font-bold mb-8 text-white">Studio Hours</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;