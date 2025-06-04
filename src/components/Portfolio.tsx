import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const allPortfolioItems = [
  {
    id: 1,
    category: "E-Commerce",
    image: "E-commerce/3.webp",
    title: "Ring of Radiance",
    gridArea: "1 / 1 / 3 / 3", // Large first item
  },
  {
    id: 2,
    category: "Fashion",
    image: "Fashion/1.webp",
    title: "Summer Collection",
    gridArea: "1 / 3 / 2 / 4",
  },
  {
    id: 3,
    category: "Brand",
    image: "Brand/6.webp",
    title: "Urban Landscape",
    gridArea: "2 / 3 / 3 / 4",
  },
  {
    id: 4,
    category: "Product",
    image: "Product/1.webp",
    title: "Luxury Packaging",
    gridArea: "3 / 1 / 4 / 2",
  },
  {
    id: 5,
    category: "Fashion",
    image: "Fashion/2.webp",
    title: "Contemporary Style",
    gridArea: "3 / 2 / 5 / 4", // Vertical double
  },
  {
    id: 6,
    category: "Brand",
    image: "Brand/2.webp",
    title: "Tech Branding",
    gridArea: "4 / 1 / 5 / 2",
  },
  {
    id: 7,
    category: "Product",
    image: "Product/2.webp",
    title: "Eco-Friendly Design",
    gridArea: "5 / 1 / 6 / 3", // Horizontal double
  },
  {
    id: 8,
    category: "Fashion",
    image: "Fashion/VIdhi.webp",
    title: "Abstract Moments",
    gridArea: "5 / 3 / 7 / 4", // Vertical double
  },
  
  {
    id: 9,
    category: "Fashion",
    image: "Fashion/keerti1.webp",
    title: "Lifestyle Brand",
    gridArea: "6 / 1 / 7 / 2",
  },
  {
    id: 10,
    category: "Fashion",
    image: "Fashion/Vidhi2.webp",
    title: "Winter Collection",
    gridArea: "6 / 2 / 7 / 3",
  },
  {
    id: 11,
    category: "Fashion",
    image: "Fashion/Keerti2.webp",
    title: "Creative Space",
    gridArea: "7 / 1 / 8 / 3",
  },
  {
    id: 12,
    category: "Brand",
    image: "Brand/4.webp",
    title: "Minimal Brand",
    gridArea: "7 / 3 / 8 / 4", // Large bottom item
  },
  // {
  //   id: 13,
  //   category: "Gallery",
  //   image: "Gallery/4.webp",
  //   title: "Studio Lighting",
  //   gridArea: "8 / 1 / 9 / 4",
  // },
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slides = allPortfolioItems.map((item) => ({
    src: item.image,
    alt: item.title,
  }));

  return (
    <section
      id="portfolio"
      className="py-20 px-4 scroll-mt-10"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #1a0000 50%, #330000 100%)",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-4 text-white">
            Our <span className="text-ogilvy-red">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-ogilvy-red mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of our finest creative works
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className="grid gap-4 mb-12 
            grid-cols-1 sm:grid-cols-3 
            auto-rows-auto sm:auto-rows-[minmax(200px,300px)]"
          >
            {allPortfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ gridArea: item.gridArea }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl hover:shadow-2xl hover:shadow-red-900/20 transition-all"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-playfair text-white mb-1">
                      {item.title}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-ogilvy-red text-white text-xs md:text-sm rounded-full">
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
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-ogilvy-red text-ogilvy-red text-base md:text-lg font-semibold rounded-full hover:bg-ogilvy-red hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
          >
            View Full Portfolio →
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
