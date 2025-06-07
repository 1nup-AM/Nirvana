import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const portfolioItems = [
  {
    id: 1,
    category: 'Product',
    image: 'Product/1.webp',
    title: 'Premium Audio',
  },
  {
    id: 2,
    category: 'Fashion',
    image: 'Fashion/1.webp',
    title: 'Timeless Elegance',
  },
  {
    id: 3,
    category: 'Product',
    image: 'Product/2.webp',
    title: 'Urban Sport',
  },
  {
    id: 4,
    category: 'Brand',
    image: 'Brand/1.webp',
    title: 'Minimal Workspace',
  },
  {
    id: 5,
    category: 'Fashion',
    image: 'Fashion/2.webp',
    title: 'Contemporary Style',
  },
  {
    id: 6,
    category: 'Brand',
    image: 'Brand/2.webp',
    title: 'Modern Essentials',
  },
  {
    id: 7,
    category: 'Fashion',
    image: 'Fashion/3.webp',
    title: 'Esthaetic shoot',
  },
  {
    id: 8,
    category: 'Fashion',
    image: 'Fashion/Vidhi2.webp',
    title: 'Fashion Shoot',
  },
  {
    id: 9,
    category: 'Brand',
    image: 'Brand/3.webp',
    title: 'Studio Lighting',
  },
  {
    id: 10,
    category: 'Gallery',
    image: 'Gallery/2.webp',
    title: 'Urban Vibes',
  },
{
    id: 11,
    category: 'Fashion',
    image: 'Fashion/VIdhi.webp',
    title: 'Fashion Shoot',
  },
  {
    id: 12,
    category: 'Brand',
    image: 'Brand/4.webp',
    title: 'Creative Space',
  },
  {
    id: 13,
    category: 'Fashion',
    image: 'Fashion/Vidhi3.webp',
    title: 'Fashion Shoot',
  },
  {
    id: 14,
    category: 'Gallery',
    image: 'Gallery/5.webp',
    title: 'Summer Collection',
  },
  {
    id: 15,
    category: 'Brand',
    image: 'Brand/5.webp',
    title: 'Office Life',
  },
{
    id: 16,
    category: 'Fashion',
    image: 'Fashion/keerti1.webp',
    title: 'Fashion Shoot',
  },
  {
    id: 17,
    category: 'Brand',
    image: 'Brand/6.webp',
    title: 'Autumn Style',
  },
  {
    id: 18,
    category: 'Gallery',
    image: 'Gallery/7.webp',
    title: 'Digital Workspace',
  },
  {
    id: 19,
    category: 'Brand',
    image: 'Brand/7.webp',
    title: 'Camera Equipment',
  },
  {
    id: 20,
    category: 'Gallery',
    image: 'Gallery/10.webp',
    title: 'Winter Collection',
  },
  {
    id: 21,
    category: 'Gallery',
    image: 'Gallery/9.webp',
    title: 'Hansraj Raghuwanshi',
  },
  {
    id: 22,
    category: 'Brand',
    image: 'Brand/8.webp',
    title: 'Brand Identity',
  },
  {
    id: 23,
    category: 'E-Commerce',
    image: 'E-commerce/1.webp',
    title: 'Rings of Radiance',
  },
  {
    id: 24,
    category: 'E-Commerce',
    image: 'E-commerce/2.webp',
    title: 'Rings of Radiance',
  },
  {
    id: 25,
    category: 'E-Commerce',
    image: 'E-commerce/3.webp',
    title: 'Rings of Radiance',
  },
  {
    id: 26,
    category: 'E-Commerce',
    image: 'E-commerce/4.webp',
    title: 'Rings of Radiance',
  },
  {
    id: 27,
    category: 'Gallery',
    image: 'Gallery/1.webp',
    title: 'Fashion Shoot',
  },
  {
    id: 28,
    category: 'Gallery',
    image: 'Gallery/3.webp',
    title: 'Fashion Shoot',
  },
  {
    id: 29,
    category: 'Gallery',
    image: 'Gallery/4.webp',
    title: 'Hansraj Raghuwanshi',
  },
  {
    id: 30,
    category: 'Gallery',
    image: 'Gallery/6.webp',
    title: 'Baby Photoshoot',
  },
  {
    id: 31,
    category: 'Gallery',
    image: 'Gallery/8.webp',
    title: 'Colourful Workspace',
  },
  {
    id: 32,
    category: 'Product',
    image: 'Brand/4.webp',
    title: 'Colourful Workspace',
  },
  {
    id: 33,
    category: 'Product',
    image: 'Brand/7.webp',
    title: 'Colourful Workspace',
  },
  {
    id: 34,
    category: 'E-Commerce',
    image: 'E-commerce/5.webp',
    title: 'Saaris of Elegance',
  },
  {
    id: 35,
    category: 'E-Commerce',
    image: 'E-commerce/6.webp',
    title: 'Saaris of Elegance',
  },
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
