import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const allPortfolioItems = [
  {
    id: 1,
    category: 'Product',
    image: 'Brand/1.webp',
    title: 'Premium Audio',
    gridArea: '1 / 1 / 3 / 3'
  },
  {
    id: 2,
    category: 'Fashion',
    image: 'Fashion/1.webp',
    title: 'Timeless Elegance',
    gridArea: '1 / 3 / 2 / 4'
  },
  {
    id: 3,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80',
    title: 'Urban Sport',
    gridArea: '2 / 3 / 3 / 4'
  },
  {
    id: 4,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    title: 'Minimal Workspace',
    gridArea: '3 / 1 / 4 / 2'
  },
  {
    id: 5,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    title: 'Contemporary Style',
    gridArea: '3 / 2 / 5 / 4'
  },
  {
    id: 6,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    title: 'Modern Essentials',
    gridArea: '4 / 1 / 5 / 2'
  },
  {
    id: 7,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    title: 'Sunglasses Collection',
    gridArea: '5 / 1 / 6 / 3'
  },
  {
    id: 8,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&q=80',
    title: 'Urban Minimalism',
    gridArea: '5 / 3 / 7 / 4'
  },
  {
    id: 9,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80',
    title: 'Studio Lighting',
    gridArea: '6 / 1 / 7 / 2'
  },
  {
    id: 10,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    title: 'Minimal Product',
    gridArea: '6 / 2 / 7 / 3'
  },
  {
    id: 11,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    title: 'Fashion Editorial',
    gridArea: '7 / 1 / 8 / 2'
  },
  {
    id: 12,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=800&q=80',
    title: 'Creative Space',
    gridArea: '7 / 2 / 9 / 4'
  },
  {
    id: 13,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    title: 'Watch Collection',
    gridArea: '8 / 1 / 9 / 2'
  },
  {
    id: 14,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    title: 'Summer Collection',
    gridArea: '9 / 2 / 10 / 4'
  },
  {
    id: 15,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
    title: 'Office Life',
    gridArea: '9 / 1 / 10 / 2'
  },
  {
    id: 16,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
    title: 'Tech Accessories',
    gridArea: '10 / 1 / 11 / 3'
  },
  {
    id: 17,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&q=80',
    title: 'Autumn Style',
    gridArea: '10 / 3 / 11 / 4'
  },
  {
    id: 18,
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    title: 'Digital Workspace',
    gridArea: '11 / 1 / 12 / 2'
  },
  {
    id: 19,
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    title: 'Camera Equipment',
    gridArea: '11 / 2 / 12 / 3'
  },
  {
    id: 20,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
    title: 'Winter Collection',
    gridArea: '11 / 3 / 12 / 4'
  }
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slides = allPortfolioItems.map(item => ({
    src: item.image,
    alt: item.title,
  }));

  return (
    <section 
      id="portfolio" 
      className="py-24 px-4 scroll-mt-10"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a0000 50%, #330000 100%)'
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-6xl font-playfair font-bold mb-4 text-white">
            Our <span className="text-ogilvy-red">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our curated collection of creative works
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] mb-16">
            {allPortfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ gridArea: item.gridArea }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading='lazy'
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

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-10 py-4 bg-transparent border-2 border-ogilvy-red text-ogilvy-red text-lg font-semibold rounded-full hover:bg-ogilvy-red hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
          >
            View All Works →
          </Link>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      </motion.div>
    </section>
  );
};

export default Portfolio;

