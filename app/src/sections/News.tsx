import { useEffect, useRef } from 'react';
import { Clock, ArrowRight, Newspaper } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    date: '2026-06-18',
    tag: 'AI趋势',
    title: 'OpenAI发布GPT-5：多模态能力大幅提升',
    summary: '新一代模型在视觉理解、代码生成和复杂推理方面取得突破性进展，企业级应用场景进一步拓宽。',
    source: '科技日报',
  },
  {
    date: '2026-06-17',
    tag: '行业动态',
    title: '国务院发布《关于促进人工智能产业高质量发展的若干意见》',
    summary: '明确提出支持AI在品牌营销、客户服务等领域的深度应用，鼓励企业开展智能化转型。',
    source: '新华社',
  },
  {
    date: '2026-06-15',
    tag: 'GEO研究',
    title: 'SearchGPT正式上线：生成式搜索时代全面到来',
    summary: 'OpenAI推出的SearchGPT正式向所有用户开放，品牌在AI搜索引擎中的可见性成为新的竞争焦点。',
    source: '36氪',
  },
  {
    date: '2026-06-12',
    tag: '技术前沿',
    title: 'Anthropic推出Claude企业版：智能体能力全面升级',
    summary: '新版Claude支持更复杂的工具调用和多步骤任务执行，为企业智能体部署提供更强底座。',
    source: '极客公园',
  },
  {
    date: '2026-06-10',
    tag: '市场洞察',
    title: '2026年中国AI营销市场规模预计突破800亿元',
    summary: '报告显示，GEO优化和AI智能体定制成为企业数字化转型的两大核心需求，年增速超过45%。',
    source: '艾瑞咨询',
  },
];

export default function News() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      const items = listRef.current?.children;
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
              trigger: listRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
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
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
            <Newspaper className="w-4 h-4" />
            行业快讯
          </span>
          <h2 className="section-title mb-6">
            AI行业
            <span className="text-brand-red">最新动态</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            洞察AI技术前沿与市场趋势，把握智能时代脉搏
          </p>
        </div>

        <div ref={listRef} className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-brand-gray4 p-6 lg:p-8 transition-all duration-400 hover:bg-brand-red/5 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
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
                    <ArrowRight className="w-4 h-4 text-brand-gray2 group-hover:text-brand-red group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-0 w-1 h-0 bg-brand-red transition-all duration-500 group-hover:h-full" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-brand-red hover:-translate-y-1 hover:shadow-btn-hover"
          >
            查看更多快讯
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
