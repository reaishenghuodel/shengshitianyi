import { useState } from 'react';
import { Clock, ArrowRight, ChevronDown, ChevronUp, Newspaper } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    date: '2026-06-21',
    tag: 'GEO研究',
    title: '2026年6月头部GEO服务商盘点与选型指南发布',
    summary: '博客园发布2026年6月GEO服务商TOP榜单，为企业选型提供权威参考。',
    source: '博客园',
    content: `博客园发布2026年6月国内头部GEO服务商盘点与选型指南，对当前GEO行业格局进行了全面梳理。

报告指出，随着AI搜索引擎（ChatGPT Search、Perplexity、豆包、DeepSeek等）用户规模持续增长，GEO（生成式引擎优化）已成为企业数字营销的核心能力。

选型指南建议企业关注：
1. 服务商的AI搜索引擎覆盖广度
2. 内容语义优化技术实力
3. 行业案例与效果数据
4. 持续监测与优化能力

报告认为，GEO行业正在从早期的探索阶段进入规模化应用阶段，头部服务商之间的差异化竞争将更加明显。`,
  },
  {
    date: '2026-06-07',
    tag: '行业动态',
    title: 'GEO是什么？与SEO/SEM区别及2026决策指南',
    summary: '知乎热文详解GEO概念，对比SEO/SEM三大营销方式，提供企业决策指南。',
    source: '知乎',
    content: `知乎专栏发布长文，系统性地解析了GEO（生成式引擎优化）的概念、原理及其与SEO、SEM的核心区别。

文章指出：
- SEO优化的是传统搜索引擎（Google、百度）的排名
- SEM是通过付费广告获取搜索流量
- GEO优化的是AI搜索引擎（ChatGPT、Perplexity、豆包）的引用和推荐

2026年决策指南建议：
1. 预算充足的企业应同时布局SEO和GEO
2. 中小企业优先投入GEO，因为AI搜索流量增长更快
3. GEO需要持续的内容建设和权威性积累，不能急功近利
4. 选择GEO服务商时要关注其技术实力和行业经验

文章认为，GEO将成为继SEO之后最重要的数字营销能力。`,
  },
  {
    date: '2026-05-20',
    tag: 'AI趋势',
    title: 'AI智能体企业应用渗透率突破35%，多Agent协作成主流',
    summary: 'AI Agent进入爆发期，企业应用渗透率突破35%，多Agent协作模式成为新趋势。',
    source: '36氪',
    content: `2026年，AI Agent（智能体）正式进入爆发期。根据多家研究机构的报告，企业级AI Agent应用渗透率已突破35%，较去年同期增长近一倍。

核心趋势包括：
1. 从单一任务执行发展到多Agent协作，复杂业务流程的自动化程度大幅提升
2. 低代码/无代码Agent开发平台兴起，非技术人员也能搭建智能体
3. Agent安全与可控性成为企业采购的首要考量
4. 垂直领域Agent（金融、医疗、法律）开始产生实际商业价值
5. Agent与RPA的融合加速，传统自动化向智能化升级

专家预测，到2027年，超过60%的企业将至少部署一个AI Agent用于核心业务流程。`,
  },
  {
    date: '2026-05-15',
    tag: '行业动态',
    title: 'Perplexity AI月活用户突破1.5亿，AI搜索商业化加速',
    summary: 'Perplexity月活突破1.5亿，推出广告平台，AI搜索正式进入商业化阶段。',
    source: '界面新闻',
    content: `AI搜索引擎Perplexity宣布其月活跃用户已突破1.5亿，较去年同期增长300%，成为全球增长最快的AI搜索产品。

Perplexity以其"答案引擎"定位，直接提供结构化的回答而非传统的链接列表，正在改变用户的搜索习惯。

同时，Perplexity正式推出其广告平台"Perplexity for Brands"，允许品牌在AI搜索结果中展示赞助内容。广告形式包括：
- 赞助回答：品牌信息融入AI生成的回答中
- 推荐卡片：在相关问答中展示品牌推荐
- 品牌专区：品牌可以在特定话题下建立专属内容区

对于品牌而言，这意味着新的流量入口和GEO（生成式引擎优化）的核心价值。`,
  },
  {
    date: '2026-04-20',
    tag: 'GEO科普',
    title: '大白话科普：到底什么是GEO？一次性讲清原理、区别与误区',
    summary: '网易订阅发布GEO科普文章，用通俗语言解释GEO原理及与SEO的区别。',
    source: '网易',
    content: `网易订阅发布GEO科普文章，用通俗易懂的语言解释了GEO（生成式引擎优化）的核心概念。

文章指出：
- GEO是优化品牌内容，使其更容易被AI搜索引擎引用和推荐
- 与传统SEO不同，GEO关注的是内容的语义结构化和权威信号建设
- GEO不是要取代SEO，而是SEO在AI搜索时代的延伸

常见误区包括：
1. GEO就是写更多文章——错误，关键是内容质量和结构
2. GEO可以快速见效——错误，需要持续积累权威性
3. GEO只适用于大企业——错误，中小企业同样需要布局

文章建议企业尽早开始GEO布局，因为AI搜索引擎的算法会优先引用已建立权威性的内容源。`,
  },
  {
    date: '2026-04-08',
    tag: '市场洞察',
    title: '如何挑选GEO服务商？企业做GEO能提升多少转化？',
    summary: '界面新闻发布GEO服务商权威测评，提供企业选型避坑指南。',
    source: '界面新闻',
    content: `界面新闻发布2026年GEO优化公司权威测评，为企业提供选型指南。

测评指出，选择GEO服务商时应关注：
1. 技术实力：是否掌握AI搜索引擎的引用机制
2. 行业经验：是否有同行业的成功案例
3. 服务范围：是否覆盖主流AI搜索引擎
4. 效果保障：是否有明确的效果评估体系

关于GEO的转化效果，测评数据显示：
- 早期布局GEO的品牌，AI搜索引用率提升200-500%
- 品牌在AI搜索中的曝光可带来15-30%的转化率提升
- GEO的ROI通常高于传统SEO

报告提醒企业避坑：警惕承诺"快速上AI搜索"的服务商，GEO需要持续积累。`,
  },
  {
    date: '2026-03-15',
    tag: '技术前沿',
    title: 'GEO优化技术详解：从概念起源到基本原理',
    summary: '知乎专栏详解GEO技术原理，从概念起源到实践方法全面解析。',
    source: '知乎',
    content: `知乎专栏发布GEO技术详解文章，从概念起源到基本原理进行了全面解析。

GEO（Generative Engine Optimization）概念最早由普林斯顿大学等研究机构提出，旨在优化内容以提高在AI生成式搜索引擎中的可见性。

核心原理包括：
1. 语义相关性：内容需要与用户查询在语义上高度相关
2. 权威性信号：引用来源、专家背书、行业认可等
3. 结构化表达：使用清晰的标题、列表、FAQ等格式
4. 知识图谱构建：让AI将品牌与特定话题关联

实践方法：
- 创建高质量的行业深度内容
- 在权威平台建立品牌内容矩阵
- 使用Schema.org等结构化数据标记
- 持续监测品牌在AI搜索中的引用情况`,
  },
  {
    date: '2026-02-19',
    tag: '行业动态',
    title: '爆火的GEO到底是什么？GEO与SEO有什么区别？',
    summary: '艾媒网发布GEO深度解读，分析GEO爆火原因及与SEO的核心区别。',
    source: '艾媒网',
    content: `艾媒网发布GEO深度解读文章，分析了GEO（生成式引擎优化）爆火的原因及与SEO的核心区别。

文章指出GEO爆火的原因：
1. AI搜索引擎用户规模快速增长（ChatGPT、Perplexity、豆包等）
2. 传统SEO效果逐渐下降，品牌需要新的流量入口
3. AI搜索正在改变用户获取信息的方式
4. 企业对AI搜索品牌可见性的需求日益迫切

GEO与SEO的核心区别：
- 优化对象不同：SEO优化传统搜索引擎，GEO优化AI搜索引擎
- 评价标准不同：SEO看排名，GEO看引用率和推荐度
- 内容策略不同：SEO关注关键词，GEO关注语义覆盖
- 效果周期不同：SEO见效慢但稳定，GEO见效快但需要持续维护

文章认为，GEO将成为2026年数字营销领域最重要的新能力。`,
  },
  {
    date: '2026-01-10',
    tag: 'GEO研究',
    title: 'AI搜索重塑品牌可见性：Google AI Overview覆盖超40%查询',
    summary: 'Google AI Overview覆盖超40%搜索查询，品牌可见性面临重塑，GEO策略成关键。',
    source: '51CTO',
    content: `Google的AI Overview（AI概述）功能已覆盖超过40%的搜索查询，这意味着近一半的搜索结果页面顶部都会显示AI生成的摘要。

这对品牌的影响是深远的：
- 传统的"蓝色链接"流量正在下降
- 被AI Overview引用的品牌获得显著的流量提升
- 未被引用的品牌可能失去大量潜在客户

GEO（生成式引擎优化）策略变得至关重要：
1. 结构化内容：使用Schema.org标记、FAQ格式、清晰的标题层级
2. 权威性建设：获取行业白皮书引用、专家背书、第三方评测
3. 语义覆盖：覆盖用户可能向AI提问的各种表述方式
4. 持续监测：定期检查品牌在AI搜索中的引用情况

专家建议，品牌应该将GEO预算占到整体数字营销预算的15-20%。`,
  },
  {
    date: '2025-12-05',
    tag: 'AI营销',
    title: 'AI驱动营销自动化市场规模2026年将达800亿元',
    summary: '艾瑞咨询预测中国AI驱动营销自动化市场规模将达800亿元，GEO优化需求爆发。',
    source: '艾瑞咨询',
    content: `艾瑞咨询最新报告显示，2026年中国AI驱动的营销自动化市场规模预计将达到800亿元，同比增长65%。

市场增长的主要驱动力包括：
1. 企业数字化转型加速，AI成为核心工具
2. GEO优化需求爆发，品牌需要在AI搜索中获得可见性
3. AI智能体在客服、销售等场景的ROI得到验证
4. 低代码平台降低了AI应用的门槛

报告还指出，GEO优化和AI智能体定制是企业数字化转型的两大核心需求，年增速分别达到120%和85%。

值得注意的是，中小企业正在成为市场增长的新引擎——过去一年，中小企业在AI营销工具上的支出增长了150%。`,
  },
];

export default function News() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              className="group relative bg-brand-gray4 transition-all duration-400 hover:bg-brand-red/5 hover:shadow-card-hover"
            >
              {/* Main card - clickable to expand */}
              <div
                className="p-6 lg:p-8 cursor-pointer"
                onClick={() => toggleExpand(index)}
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
                        {expandedIndex === index ? '收起详情' : '阅读全文'}
                        {expandedIndex === index ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`absolute left-0 top-0 w-1 bg-brand-red transition-all duration-500 ${expandedIndex === index ? 'h-full' : 'h-0 group-hover:h-full'}`} />
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
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
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://36kr.com/search/articles/GEO"
            target="_blank"
            rel="noopener noreferrer"
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
