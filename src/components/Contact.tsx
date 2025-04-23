import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin as LinkedIn } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'studio@nirvanax.com',
    link: 'mailto:studio@nirvanax.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'SoHo, New York City',
    link: 'https://maps.google.com'
  }
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://instagram.com'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: 'https://twitter.com'
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    link: 'https://linkedin.com'
  }
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 bg-true-black scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-playfair mb-8 text-center">Get in Touch</h2>
            <p className="text-slate-gray text-lg mb-12 text-center">
              Let's discuss your next project and create something extraordinary together.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                  placeholder="Project Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-slate-gray/10 border border-slate-gray/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ogilvy-red transition-colors duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ogilvy-red text-white py-4 rounded-lg hover:bg-ogilvy-red/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pl-16"
          >
            <div className="space-y-12">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-playfair mb-8">Contact Details</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.link}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="p-3 bg-slate-gray/10 rounded-lg group-hover:bg-ogilvy-red/10 transition-colors duration-300">
                          <Icon className="text-ogilvy-red" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-gray">{info.label}</p>
                          <p className="text-white group-hover:text-ogilvy-red transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-playfair mb-8">Follow Us</h3>
                <div className="flex gap-4">
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
                        className="p-4 bg-slate-gray/10 rounded-lg hover:bg-ogilvy-red/10 transition-colors duration-300 group"
                      >
                        <Icon className="text-ogilvy-red" size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Studio Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="p-8 bg-slate-gray/10 rounded-lg"
              >
                <h3 className="text-2xl font-playfair mb-6">Studio Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-gray">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-gray">Saturday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-gray">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;