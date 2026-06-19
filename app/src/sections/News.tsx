import { useEffect, useRef } from 'react';
import { Clock, ArrowRight, Newspaper } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    date: '2026-06-01',
    tag: 'AI趋势',
    title: '2026年AI Agent十大发展趋势：企业应用渗透率超35%',
    summary: 'AI Agent进入爆发期，从单一任务执行发展到多Agent协作，企业应用渗透率突破35%。',
    source: '36氪',
  },
  {
    date: '2026-06-01',
    tag: '市场洞察',
    title: '2026年AI营销十大趋势：GEO优化与智能体营销成热点',
    summary: 'AI营销呈现十大趋势，GEO优化、AI Agent营销、个性化内容生成、智能投放成行业热点。',
    source: '36氪',
  },
  {
    date: '2026-05-15',
    tag: '行业动态',
    title: 'Perplexity AI月活用户突破1.5亿，估值达180亿美元',
    summary: 'Perplexity AI月活用户突破1.5亿，较去年同期增长300%，成为增长最快的AI搜索引擎。',
    source: '界面新闻',
  },
  {
    date: '2026-05-15',
    tag: '行业动态',
    title: 'Perplexity推出广告平台，AI搜索商业化加速',
    summary: 'Perplexity正式推出广告平台，品牌可在AI搜索结果中展示广告，标志商业化新阶段。',
    source: '广告门',
  },
  {
    date: '2026-05-10',
    tag: 'GEO研究',
    title: 'GEO优化成为品牌营销新标配，企业加速布局',
    summary: '随着AI搜索普及，GEO优化已成品牌营销新标配，越来越多企业开始布局生成式引擎优化。',
    source: '梅花网',
  },
  {
    date: '2026-05-10',
    tag: '技术前沿',
    title: '微软推出Copilot Agent Studio，企业智能体开发进入新阶段',
    summary: '微软推出低代码AI智能体开发平台Copilot Agent Studio，降低企业AI应用门槛。',
    source: '微软官方博客',
  },
  {
    date: '2026-05-08',
    tag: '市场洞察',
    title: 'AI驱动营销自动化市场规模2026年将达800亿元',
    summary: '艾瑞咨询预测中国AI驱动营销自动化市场规模将达800亿元，同比增长65%。',
    source: '艾瑞咨询',
  },
  {
    date: '2026-05-05',
    tag: 'AI趋势',
    title: 'AI智能体在营销自动化中的应用爆发，60%头部品牌已部署',
    summary: 'AI智能体在营销自动化领域呈爆发态势，超过60%的头部品牌已部署AI营销智能体。',
    source: '梅花网',
  },
  {
    date: '2026-04-22',
    tag: 'GEO研究',
    title: 'AI搜索重塑品牌可见性：Google AI Overview覆盖超40%查询',
    summary: 'AI搜索引擎正重塑品牌可见性，Google AI Overview覆盖超40%搜索查询，GEO策略成关键。',
    source: '51CTO',
  },
  {
    date: '2026-04-03',
    tag: '行业动态',
    title: 'AI搜索时代品牌如何在DeepSeek、豆包上获得曝光',
    summary: '超60%中国网民使用过AI搜索产品，品牌需从传统SEO升级为GEO策略获取AI信源曝光。',
    source: '人人都是产品经理',
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
