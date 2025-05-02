import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const portfolioItems = [
  {
    id: 1,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    title: 'Premium Audio',
  },
  {
    id: 2,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    title: 'Timeless Elegance',
  },
  {
    id: 3,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80',
    title: 'Urban Sport',
  },
  {
    id: 4,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    title: 'Minimal Workspace',
  },
  {
    id: 5,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    title: 'Contemporary Style',
  },
  {
    id: 6,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    title: 'Modern Essentials',
  },
  {
    id: 7,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    title: 'Sunglasses Collection',
  },
  {
    id: 8,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&q=80',
    title: 'Urban Minimalism',
  },
  {
    id: 9,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80',
    title: 'Studio Lighting',
  },
  {
    id: 10,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    title: 'Minimal Product',
  },
  {
    id: 11,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    title: 'Fashion Editorial',
  },
  {
    id: 12,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=800&q=80',
    title: 'Creative Space',
  },
  {
    id: 13,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    title: 'Watch Collection',
  },
  {
    id: 14,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    title: 'Summer Collection',
  },
  {
    id: 15,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
    title: 'Office Life',
  },
  {
    id: 16,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
    title: 'Tech Accessories',
  },
  {
    id: 17,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&q=80',
    title: 'Autumn Style',
  },
  {
    id: 18,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    title: 'Digital Workspace',
  },
  {
    id: 19,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    title: 'Camera Equipment',
  },
  {
    id: 20,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
    title: 'Winter Collection',
  }
];

const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const slides = filteredItems.map(item => ({
    src: item.image,
    alt: item.title,
  }));

  return (
    <div 
      className="min-h-screen pt-36"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a0000 50%, #330000 100%)'
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-playfair font-bold mb-4 text-white">
            Our <span className="text-ogilvy-red">Portfolio</span>
          </h1>
          <div className="w-24 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our complete collection of visual storytelling across various categories
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg ${
                selectedCategory === category
                  ? 'bg-ogilvy-red text-white shadow-lg shadow-red-900/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl aspect-square"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold font-playfair text-white mb-2">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-ogilvy-red text-white text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;