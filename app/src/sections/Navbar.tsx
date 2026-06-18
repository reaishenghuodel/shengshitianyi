import { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '服务', href: '#services' },
  { name: '案例', href: '#cases' },
  { name: '联系', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src="/images/logo.jpg"
                alt="盛世天宜"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-brand-black' : 'text-white'
              }`}
            >
              盛世天宜
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative text-sm font-medium transition-colors duration-300 link-underline ${
                  isScrolled
                    ? 'text-brand-gray1 hover:text-brand-red'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="group relative inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-btn-hover hover:-translate-y-0.5"
            >
              <span className="relative z-10">开始对话</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-black transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? 'text-brand-black' : 'text-white'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-white">
              <div className="flex flex-col h-full pt-12">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-2xl font-medium text-brand-black hover:text-brand-red transition-colors duration-300"
                      style={{
                        animation: `fade-in-up 0.4s ease-out ${index * 0.1}s forwards`,
                        opacity: 0,
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="mt-auto pb-8">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#contact');
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-brand-red text-white py-4 font-medium"
                  >
                    开始对话
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
