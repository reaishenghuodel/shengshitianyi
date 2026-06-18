import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const redBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Red block animation
      gsap.fromTo(
        redBlockRef.current,
        { scale: 0, rotation: -10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image 3D reveal animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      const contentElements = contentRef.current?.children;
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(redBlockRef.current, {
        rotation: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Content */}
          <div ref={contentRef} className="relative z-10 lg:pr-16 order-2 lg:order-1">
            <span className="inline-block text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
              关于我们
            </span>
            
            <h2 className="section-title mb-6">
              策略引领 · 技术赋能 ·
              <br />
              <span className="text-brand-red">长期主义</span>
            </h2>
            
            <p className="section-subtitle mb-6">
              盛世天宜品牌管理有限公司是AI时代的品牌护城河构建者。我们深耕GEO服务、智能体开发、自动化工作流定制及品牌运营服务，以技术为驱动，以策略为引领，帮助企业在智能时代建立可持续的竞争优势。
            </p>
            
            <p className="text-brand-gray2 leading-relaxed mb-8">
              我们相信，在AI重塑商业格局的时代，品牌需要构建自己的"数字护城河"——通过生成式引擎优化（GEO）提升AI可见性，通过智能体部署提升运营效率，通过自动化工作流释放人力价值，通过精准的品牌运营建立市场影响力。
            </p>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 text-brand-red font-medium hover:gap-4 transition-all duration-300"
            >
              了解更多关于我们
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 lg:pl-8">
            {/* Red decorative block */}
            <div
              ref={redBlockRef}
              className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-red/10 -z-10"
              style={{ willChange: 'transform' }}
            />
            
            {/* Main image */}
            <div
              ref={imageRef}
              className="relative overflow-hidden group"
              style={{
                perspective: '800px',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/about-us.jpg"
                  alt="关于盛世天宜"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-red/0 transition-colors duration-300 group-hover:bg-brand-red/10" />
              </div>
              
              {/* Shadow effect */}
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full bg-brand-red/20 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
