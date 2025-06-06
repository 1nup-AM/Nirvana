import { useState, useEffect } from "react";
import {
  X,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Image,
  Users,
  Info,
  BookOpen,
  Contact,
  AlignLeft,
  Facebook
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

interface NavLink {
  label: string;
  id?: string;
  path?: string;
  icon: React.ElementType;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: Mail, href: "mailto:admin@nirvanax.in", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/nirvanaxofficial?igsh=MTV6eDBpZ3BsYjQyMQ==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576143164463", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/NirvanaX_agency", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/nirvana-x/", label: "LinkedIn" },
    
  ];

  const navLinks: NavLink[] = [
    { label: "Portfolio", id: "portfolio", icon: Image },
    { label: "Team", id: "team", icon: Users },
    { label: "About", id: "about", icon: Info },
    { label: "Journal", path: "/journal", icon: BookOpen },
    { label: "Contact", id: "contact", icon: Contact },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2"
            : "py-4"
        }`}
      >
        <div className="container mx-auto px-3 flex justify-between items-center max-w-7xl">
          {/* <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-3xl font-playfair font-bold text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            NIRVANA<span className="text-ogilvy-red">X</span>
          </Link> */}

          <Link
    to="/"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="text-3xl font-playfair font-bold text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
  >
    <img src="aaab.png" alt="Logo" className="h-12 w-auto" />
   
  </Link>


          <button
            className="text-white z-50 p-2 rounded-full hover:bg-slate-800/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ogilvy-red/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={32} className="text-ogilvy-red" />
            ) : (
              <AlignLeft size={32} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-true-black/95 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Navigation Panel - Now on the right side */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-2/5 xl:w-1/3 bg-true-black/90 backdrop-blur-sm z-40 flex flex-col justify-center px-12 border-l border-slate-800/50 pt-20"
            >
              <div className="space-y-8 mb-16">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {link.path ? (
                        <Link
                          to={link.path}
                          className="group flex items-center gap-6 py-4"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-ogilvy-red/20 transition-colors duration-500">
                            <Icon size={24} className="text-ogilvy-red" />
                          </div>
                          <span className="text-2xl lg:text-3xl font-playfair text-white group-hover:text-ogilvy-red transition-colors duration-500">
                            {link.label}
                          </span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(link.id!)}
                          className="group flex items-center gap-6 py-4 w-full text-left"
                        >
                          <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-ogilvy-red/20 transition-colors duration-500">
                            <Icon size={24} className="text-ogilvy-red" />
                          </div>
                          <span className="text-2xl lg:text-3xl font-playfair text-white group-hover:text-ogilvy-red transition-colors duration-500">
                            {link.label}
                          </span>
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-6 mt-auto pb-16"
              >
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-800/50 rounded-full hover:bg-ogilvy-red/20 transition-colors duration-500 group"
                      whileHover={{ y: -5 }}
                      aria-label={link.label}
                    >
                      <Icon
                        size={24}
                        className="text-ogilvy-red group-hover:text-white"
                      />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
