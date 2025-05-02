import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const JournalPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-32 min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)'
    }}>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-playfair font-bold mb-6 text-white">
            Our <span className="text-ogilvy-red">Journal</span>
          </h1>
          <div className="w-24 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Dive deep into our world of photography, techniques, and creative insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link 
                to={`/journal/${post.id}`} 
                className="block h-full bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 hover:border-ogilvy-red/30 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="inline-block px-3 py-1 bg-ogilvy-red/80 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-ogilvy-red" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-playfair font-bold text-white group-hover:text-ogilvy-red transition-colors duration-500">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-ogilvy-red group-hover:gap-2 transition-all duration-300 pt-4">
                    <span className="font-medium">Read More</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;