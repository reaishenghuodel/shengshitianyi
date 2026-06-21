import { useState } from 'react';
import { Clock, ArrowRight, ChevronDown, ChevronUp, Newspaper, Building2, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { companyNews } from '../data/companyNews';
import { industryNews } from '../data/industryNews';

gsap.registerPlugin(ScrollTrigger);

// 通用新闻卡片组件
function NewsCard({ item }: { item: { date: string; tag: string; title: string; summary: string; source: string; content: string } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative bg-brand-gray4 transition-all duration-400 hover:bg-brand-red/5 hover:shadow-card-hover">
      <div
        className="p-6 lg:p-8 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 sm:min-w-[100px]">
            <div className="flex items-center gap-1.5 text-brand-gray2 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>{item.date}</span>
            </div>
            <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-medium">
              {item.tag}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-brand-black mb-2 group-hover:text-brand-red transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-brand-gray1 text-sm leading-relaxed mb-3">
              {item.summary}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-brand-gray2 text-xs">
                来源：{item.source}
              </span>
              <span className="inline-flex items-center gap-1.5 text-brand-red text-xs font-medium">
                {expanded ? '收起详情' : '阅读全文'}
                {expanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className={`absolute left-0 top-0 w-1 bg-brand-red transition-all duration-500 ${expanded ? 'h-full' : 'h-0 group-hover:h-full'}`} />
      </div>

      {expanded && (
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-brand-gray3">
          <div className="pt-6">
            <div className="prose prose-sm max-w-none text-brand-gray1 leading-relaxed">
              {item.content.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function News() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      [companyRef, industryRef].forEach((ref) => {
        const items = ref.current?.children;
        if (items) {
          gsap.fromTo(
            items,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/3 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
            <Newspaper className="w-4 h-4" />
            最新资讯
          </span>
          <h2 className="section-title mb-6">
            企业动态与
            <span className="text-brand-red">行业洞察</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            媒体报道盛世天宜 · GEO/AI行业前沿趋势
          </p>
        </div>

        {/* 企业资讯 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-black">企业资讯</h3>
              <p className="text-brand-gray2 text-sm">权威媒体对盛世天宜的报道</p>
            </div>
          </div>

          <div ref={companyRef} className="space-y-6">
            {companyNews.map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* 行业资讯 */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-black">行业资讯</h3>
              <p className="text-brand-gray2 text-sm">GEO与AI行业最新动态（每日自动更新）</p>
            </div>
          </div>

          <div ref={industryRef} className="space-y-6">
            {industryNews.map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-brand-red hover:-translate-y-1 hover:shadow-btn-hover"
          >
            了解更多资讯
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
