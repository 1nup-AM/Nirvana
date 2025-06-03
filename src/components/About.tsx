import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Users } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: '15+ International Photography Awards'
  },
  {
    icon: Users,
    title: 'Global Clientele',
    description: 'Trusted by 200+ Premium Brands'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Featured in Leading Publications'
  }
];

const testimonials = [
  {
    quote: "Nirvana X transformed our brand identity through their exceptional visual storytelling. Their attention to detail and creative vision exceeded our expectations.",
    author: "Aman Singh",
    position: "Developer, Tech Innovations"
  },
  {
    quote: "Working with Nirvana X was a game-changer for our product launches. Their ability to capture the essence of our brand is unmatched.",
    author: "Anupam Mishra",
    position: "Developer, Tech Innovations"
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      className="py-32 scroll-mt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ogilvy-red rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-ogilvy-red rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Studio Philosophy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="relative">
              <h2 className="text-6xl font-playfair font-bold mb-6 text-white">
                Crafting <span className="text-ogilvy-red">Visual</span> Excellence
              </h2>
              <div className="w-24 h-1 bg-ogilvy-red mb-8"></div>
              <div className="space-y-6">
                <p className="text-xl text-slate-300 leading-relaxed">
                  At <span className="text-ogilvy-red font-medium">Nirvana X</span>, we believe in the transformative power of visual storytelling. Our approach combines technical mastery with artistic innovation to create imagery that captivates and inspires.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed">
                  We treat each project as a unique opportunity to push creative boundaries while maintaining the essence of your brand's identity.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-ogilvy-red/30 transition-all duration-500"
                  >
                    <div className="p-3 bg-ogilvy-red/10 rounded-lg w-max mb-4">
                      <Icon className="text-ogilvy-red" size={24} />
                    </div>
                    <h3 className="text-xl font-playfair font-bold mb-2 text-white">{achievement.title}</h3>
                    <p className="text-slate-400">{achievement.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50">
              <div className="space-y-12">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    className="relative"
                  >
                    <div className="text-3xl absolute -left-8 -top-4 text-ogilvy-red opacity-20 font-playfair">"</div>
                    <blockquote className="text-xl font-playfair italic mb-6 text-white leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-px w-12 bg-ogilvy-red mr-4" />
                      <div>
                        <p className="font-medium text-white">{testimonial.author}</p>
                        <p className="text-slate-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Studio Stats */}
            <div className="p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50">
              <h3 className="text-2xl font-playfair font-bold mb-8 text-white">Studio Excellence</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Client Satisfaction</span>
                    <span className="text-ogilvy-red font-bold">98%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '98%' } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-ogilvy-red to-ogilvy-red/70 rounded-full"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Project Completion</span>
                    <span className="text-ogilvy-red font-bold">100%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-ogilvy-red to-ogilvy-red/70 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Repeat Clients</span>
                    <span className="text-ogilvy-red font-bold">85%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '85%' } : {}}
                      transition={{ duration: 1, delay: 1.0 }}
                      className="h-full bg-gradient-to-r from-ogilvy-red to-ogilvy-red/70 rounded-full"
                    />
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

export default About;