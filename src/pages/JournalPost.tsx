import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

const JournalPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="pt-32 min-h-screen" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)'
      }}>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-8 text-white">Post not found</h1>
          <Link 
            to="/journal"
            className="inline-flex items-center px-6 py-3 bg-ogilvy-red/10 text-ogilvy-red rounded-lg hover:bg-ogilvy-red/20 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)'
    }}>
      <article className="container mx-auto px-4 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/journal"
            className="inline-flex items-center px-5 py-3 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-800/50 hover:border-ogilvy-red/30 text-ogilvy-red hover:text-white transition-all duration-500 mb-12"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Journal
          </Link>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 p-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
                <Calendar size={16} className="text-ogilvy-red" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full">
                <Tag size={16} className="text-ogilvy-red" />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-10 text-white leading-tight">
              {post.title}
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video mb-16 rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                {post.excerpt}
              </p>
              
              <div className="space-y-8 text-slate-300">
                <p className="text-lg leading-relaxed">
                  In the ever-evolving world of photography, mastering the art of visual storytelling requires a deep understanding of both technical expertise and creative vision. At Nirvana X, we believe that every image should not just capture a moment, but tell a compelling story that resonates with viewers on an emotional level.
                </p>

                <p className="text-lg leading-relaxed">
                  Our approach combines traditional photography techniques with innovative modern methods, always pushing the boundaries of what's possible while maintaining the highest standards of quality and artistic integrity.
                </p>

                <h2 className="text-3xl font-playfair font-bold text-white mt-16 mb-8">
                  The Creative Process
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Every project begins with a thorough understanding of the subject matter and the story we want to tell. We carefully consider lighting, composition, and timing to create images that not only look beautiful but also convey the intended message effectively.
                </p>

                <p className="text-lg leading-relaxed">
                  Through careful attention to detail and a commitment to excellence, we ensure that each photograph meets our exacting standards while fulfilling our clients' creative vision.
                </p>

                <blockquote className="border-l-4 border-ogilvy-red pl-6 my-12 italic text-xl text-white">
                  "Photography is the story I fail to put into words."
                </blockquote>

                <h2 className="text-3xl font-playfair font-bold text-white mt-16 mb-8">
                  Technical Excellence
                </h2>

                <p className="text-lg leading-relaxed">
                  Our team utilizes state-of-the-art equipment and cutting-edge techniques to deliver images of unparalleled quality. From lighting setups to post-processing, every step is executed with precision and care.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default JournalPost;