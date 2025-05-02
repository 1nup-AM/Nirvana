import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Aperture, Film, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    specialty: 'Editorial & Fashion',
    bio: 'With over a decade of experience in fashion photography, Alexandra brings her unique vision to every project.',
    icon: Camera,
    notable: 'Vogue, Elle, Harper Bazaar'
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    specialty: 'Product & Lighting',
    bio: 'Marcus specializes in creating stunning product imagery through innovative lighting techniques.',
    icon: Aperture,
    notable: 'Apple, Nike, Samsung'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    specialty: 'Conceptual & Fine Art',
    bio: 'Sarahs work bridges the gap between commercial photography and fine art.',
    icon: Lightbulb,
    notable: 'Museum of Modern Art, Venice Biennale'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Cinematographer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    specialty: 'Motion & Narrative',
    bio: 'David brings stories to life through his cinematic approach to commercial photography.',
    icon: Film,
    notable: 'BMW, Mercedes-Benz, Audi'
  }
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="team" 
      className="py-24 px-4 scroll-mt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ogilvy-red rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ogilvy-red rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-playfair font-bold mb-6 text-white">
            Meet <span className="text-ogilvy-red">The Team</span>
          </h2>
          <div className="w-24 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collective of visionary photographers and artists pushing the boundaries of visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ogilvy-red/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 group-hover:border-ogilvy-red/30 transition-all duration-500">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div>
                        <p className="text-slate-300 mb-4">{member.bio}</p>
                        <div className="border-t border-ogilvy-red/30 pt-4">
                          <p className="text-sm text-slate-400">Notable Projects</p>
                          <p className="text-white font-medium">{member.notable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-ogilvy-red/20 transition-colors duration-500">
                        <Icon className="text-ogilvy-red group-hover:text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-white">{member.name}</h3>
                        <p className="text-slate-400">{member.role}</p>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-ogilvy-red/10 text-ogilvy-red rounded-full text-sm font-medium border border-ogilvy-red/20">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;