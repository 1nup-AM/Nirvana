import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { useState } from 'react';
// import { Rotate3D } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    category: 'Fashion',
    image: '/Fashion/Z50_8718-3.jpg',
    title: 'Premium Luxury',
  },
  {
    id: 2,
    category: 'Fashion',
    image: '/Fashion/Z50_9537-2.jpg',
    title: 'Premium Luxury',
  },
  {
    id: 3,
    category: 'Fashion',
    image: '/Fashion/Z50_9467-2.jpg',
    title: 'Premium Luxury',
  },
  // {
  //   id: 4,
  //   category: 'Fashion',
  //   image: 'public/Fashion/DSC_9551.MOV',
  //   title: 'Premium Luxury',
  // },

  {
    id: 5,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    title: 'Summer Collection',
  },

  ////////////////////////////////////////////////
  {
    id: 6,
    category: 'Product',
    image: '/Product/shot4.png',
    title: 'Timeless Elegance',
  },
  // {
  //   id: 7,
  //   category: 'Product',
  //   image: '/Product/almond.mp4',
  //   title: 'Necromantic',
  // },
  // {
  //   id: 8,
  //   category: 'Product',
  //   image: 'public/Product/almond.mp4',
  //   title: 'Necromantic',
  // },
  // {
  //   id: 9,
  //   category: 'Product',
  //   image: 'public/Product/almond.mp4',
  //   title: 'Necromantic',
  // },
  // {
  //   id: 10,
  //   category: 'Product',
  //   image: 'public/Product/almond.mp4',
  //   title: 'Necromantic',
  // },
  {
    id: 11,
    category: 'Brand',
    image: '/Brand/1709313030770.jpg',
    title: 'Minimal Workspace',
  },
  ////////////////////////////////////////////////////////
  {
    id: 12,
    category: 'Brand',
    image: '/Brand/1711028885117.jpg',
    title: 'Minimal Workspace',
  },{
    id: 13,
    category: 'Brand',
    image: '/Brand/1710875419228.jpg',
    title: 'Minimal Workspace',
  },{
    id: 14,
    category: 'Brand',
    image: '/Brand/1710534508842.jpg',
    title: 'Minimal Workspace',
  },{
    id: 15,
    category: 'Brand',
    image: '/Brand/1705566827784.jpg',
    title: 'Minimal Workspace',
  },{
    id: 16,
    category: 'Brand',
    image: '/Brand/shot3.png',
    title: 'Minimal Workspace',
  },
  {
    id: 17,
    category: 'Brand',
    image: '/Brand/shot2.png',
    title: 'Minimal Workspace',
  },
  {
    id: 18,
    category: 'Brand',
    image: '/Brand/shot1.png',
    title: 'Minimal Workspace',
  },
  
  ////////////////////////////////////////////////
 

  {
    id: 19,
    category: 'Gallery',
    image: '/Gallery/1707659296759.jpg',
    title: 'Minimal Workspace',
  },
  {
    id: 20,
    category: 'Gallery',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80',
    title: 'Studio Lighting',
  },
  
  
  // {
  //   id: 21,
  //   category: 'Gallery',
  //   image: '/Gallery/VN20240307_214525.mp4',
  //   title: 'Creative Space',
  // },
  
  
  {
    id: 22,
    category: 'Gallery',
    image: '/Gallery/1698652147277.jpg',
    title: 'Office Life',
  },
  {
    id: 23,
    category: 'Gallery',
    image: '/Gallery/1711730853565.jpg',
    title: 'Office Life',
  },
  {
    id: 24,
    category: 'Gallery',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
    title: 'Office Life',
  },
  {
    id: 25,
    category: 'Gallery',
    image: '/Gallery/IMG_20240107_030613.jpg',
    title: 'Office Life',
  },
  {
    id: 26,
    category: 'Gallery',
    image: '/Gallery/1705938528551 (1).jpg',
    title: 'Office Life',
  },
  {
    id: 27,
    category: 'Gallery',
    image: '/Gallery/_UR03329.JPG',
    title: 'Office Life',
  },
  {
    id: 28,
    category: 'Gallery',
    image: '/Gallery/_UR03300.JPG',
    title: 'Office Life',
  },
  {
    id: 29,
    category: 'Gallery',
    image: '/Gallery/_UR03306.JPG',
    title: 'Office Life',
  },
  {
    id: 30,
    category: 'Gallery',
    image: '/Gallery/_UR03217.JPG',
    title: 'Office Life',
  },
  {
    id: 32,
    category: 'Gallery',
    image: '/Gallery/_UR03207.JPG',
    title: 'Office Life',
  },
];

const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500:1,
  };

  return (
    <section id="portfolio" className="py-24 px-4 bg-true-black scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-5xl font-playfair mb-12 text-center">Portfolio</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-ogilvy-red text-white'
                  : 'bg-slate-gray/20 text-slate-gray hover:bg-slate-gray/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="relative group overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-true-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-playfair text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </section>
  );
};

export default Portfolio;