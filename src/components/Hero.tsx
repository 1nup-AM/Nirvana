import { motion,useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const gridImages = [

  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", //Headphone
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80", //Clothes
  "Fashion/keerti1.webp", //KEERTI
  "E-commerce/3.webp", //Ring of Radiance
  "Brand/1.webp", //Urban Landscape
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  "Fashion/Vidhi3.webp", //Summer Collection
  "E-commerce/3.webp",
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // when top of hero hits top of viewport to when bottom hits top
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]); // slight zoom out
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // fade out


  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/*Scrolling Background Grid */}
      <div className="absolute inset-0 bg-true-black/90" />

      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center text-6xl font-bold"
      >

      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -100] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-1"
        >
          {[...gridImages, ...gridImages].map((image, index) => (
            <div
              key={`col1-${index}`}
              className="aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover filter opacity-30"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: [-50, -150] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-4"
        >
          {[...gridImages.reverse(), ...gridImages.reverse()].map(
            (image, index) => (
              <div
                key={`col2-${index}`}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover filter opacity-30"
                />
              </div>
            )
          )}
        </motion.div>
        <motion.div
          initial={{ y: -25 }}
          animate={{ y: [-25, -125] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 22,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-1"
        >
          {[...gridImages, ...gridImages].map((image, index) => (
            <div
              key={`col3-${index}`}
              className="aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover filter opacity-30"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: -75 }}
          animate={{ y: [-75, -175] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          }}
          className="grid grid-cols-1 gap-1"
        >
          {[...gridImages.reverse(), ...gridImages.reverse()].map(
            (image, index) => (
              <div
                key={`col4-${index}`}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover filter opacity-30"
                />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/*Content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* <h1 className="text-7xl md:text-8xl font-playfair mb-6">
          <span>NIRVANA<span className="text-ogilvy-red">X</span></span>
        </h1> */}
        <img src="aaab.png" alt="Logo" className="h-36 w-auto" />
   
        {/* <p className="text-xl  italic opacity-85 tracking-widest md:text-2xl  max-w-2xl mx-auto px-4">
          Vision to Visuals
        </p> */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-ogilvy-red" />
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
