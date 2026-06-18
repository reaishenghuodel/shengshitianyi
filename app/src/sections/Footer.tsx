import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '服务', href: '#services' },
  { name: '案例', href: '#cases' },
  { name: '联系', href: '#contact' },
  { name: '隐私政策', href: '#' },
];



export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.children;
      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-brand-black text-white py-16 md:py-20"
    >
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div ref={contentRef} className="flex flex-col items-center gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center animate-pulse-slow">
              <img
                src="/images/logo.jpg"
                alt="盛世天宜"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white/60 text-sm text-center max-w-md">
              构建AI时代的品牌护城河
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white/70 text-sm hover:text-brand-red transition-colors duration-300 link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/10" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/40 text-xs">
            <p>© 2024 盛世天宜品牌管理有限公司. 保留所有权利.</p>
            <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/60 transition-colors">
                隐私政策
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white/60 transition-colors">
                使用条款
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white/60 transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand-red text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black hover:-translate-y-1 z-50"
        aria-label="回到顶部"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
