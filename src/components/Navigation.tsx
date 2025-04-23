import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-true-black/90 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair text-white">
          NIRVANA X
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-9">
          <button onClick={() => handleNavClick('portfolio')} className="nav-link">Portfolio</button>
          <button onClick={() => handleNavClick('team')} className="nav-link">Team</button>
          <button onClick={() => handleNavClick('about')} className="nav-link">About</button>
          <Link to="/journal" className="nav-link">Journal</Link>
          <button onClick={() => handleNavClick('contact')} className="nav-link bg-ogilvy-red rounded-full px-2 hover:text-white">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-true-black/90 backdrop-blur-sm transform transition-transform duration-300 ease-custom ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-8 space-y-6">
            <button 
              className="self-end text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <button onClick={() => handleNavClick('portfolio')} className="nav-link">Portfolio</button>
            <button onClick={() => handleNavClick('team')} className="nav-link">Team</button>
            <button onClick={() => handleNavClick('about')} className="nav-link">About</button>
            <Link to="/journal" className="nav-link text-center" onClick={() => setIsOpen(false)}>Journal</Link>
            <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;