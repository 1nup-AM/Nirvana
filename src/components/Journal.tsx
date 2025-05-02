import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Journal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="journal" 
      className="py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-ogilvy-red rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-ogilvy-red rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-playfair font-bold mb-6 text-white">
            Our <span className="text-ogilvy-red">Journal</span>
          </h2>
          <div className="w-24 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights, techniques, and stories from our creative journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.slice(0, 4).map((post, index) => (
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
                <div className="relative overflow-hidden h-60">
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
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-ogilvy-red" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-white group-hover:text-ogilvy-red transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-ogilvy-red group-hover:gap-2 transition-all duration-300 pt-2">
                    <span className="font-medium">Read More</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            to="/journal"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-ogilvy-red text-ogilvy-red text-lg font-medium rounded-full hover:bg-ogilvy-red hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
          >
            View All Articles
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Journal;