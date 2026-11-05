import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.8,
          delay: 0.5,
          ease: 'expo.out',
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.9,
          ease: 'expo.out',
        }
      );

      gsap.fromTo(
        searchRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: 1.1,
          ease: 'expo.out',
        }
      );

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 1.4,
          ease: 'expo.out',
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 100, scale: 1.1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: 0.4,
          ease: 'expo.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !titleRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.5;

      if (scrollY <= maxScroll) {
        const progress = scrollY / maxScroll;
        gsap.to(imageRef.current, {
          y: -scrollY * 0.3,
          scale: 1 + progress * 0.1,
          duration: 0.1,
        });
        gsap.to(titleRef.current, {
          y: -scrollY * 0.2,
          opacity: 1 - progress,
          duration: 0.1,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-red/60 rounded-full animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-4 h-4 border border-brand-red/40 rotate-45 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-3xl">
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ willChange: 'transform, opacity' }}
            >
              AI时代的
              <br />
              <span className="text-brand-red">品牌信任资产架构师</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
            >
              11年品牌战略经验 × AI GEO生成式引擎优化
              <br />
              让品牌成为AI的首选答案
            </p>

            {/* AI Search Box */}
            <div ref={searchRef} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="输入品牌名，检测AI搜索中的可见性"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-base focus:outline-none focus:border-brand-red/60 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <button
                  onClick={() => {
                    if (query.trim()) {
                      scrollToContact();
                    }
                  }}
                  className="group relative inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 text-base font-medium overflow-hidden transition-all duration-300 hover:shadow-btn-hover hover:-translate-y-1 whitespace-nowrap"
                >
                  <span className="relative z-10">立即检测</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
                  <div className="absolute inset-0 bg-black transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-6 text-white/60 text-sm">
              <span>深耕品牌服务 <strong className="text-white">11年</strong></span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>服务 <strong className="text-white">120+</strong> 知名品牌</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>覆盖 <strong className="text-white">5大</strong> 主流AI平台</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
