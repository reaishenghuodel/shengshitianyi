import { useState } from 'react';
import { Clock, ArrowRight, ChevronDown, ChevronUp, Newspaper } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    date: '2026-06-01',
    tag: 'AI趋势',
    title: '2026年AI Agent十大发展趋势：企业应用渗透率超35%',
    summary: 'AI Agent进入爆发期，从单一任务执行发展到多Agent协作，企业应用渗透率突破35%。',
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
    date: '2026-06-01',
    tag: '市场洞察',
    title: '2026年AI营销十大趋势：GEO优化与智能体营销成热点',
    summary: 'AI营销呈现十大趋势，GEO优化、AI Agent营销、个性化内容生成、智能投放成行业热点。',
    source: '36氪',
    content: `2026年AI营销领域呈现十大核心趋势：

1. GEO（生成式引擎优化）成为品牌营销新标配
2. AI Agent营销自动化，从线索获取到成交全链路智能化
3. 个性化内容生成规模化，千人千面不再是口号
4. 智能投放系统自我优化，ROI持续提升
5. 视频内容AI生产成本大幅下降
6. 社媒运营AI助手普及率超50%
7. 客户服务智能体解决率突破85%
8. 数据驱动的品牌策略取代经验主义
9. AI搜索品牌可见性管理成为新课题
10. 营销归因模型从last-click向AI多触点归因演进

行业分析师指出，GEO优化将成为继SEO之后最重要的数字营销能力。`,
  },
  {
    date: '2026-05-15',
    tag: '行业动态',
    title: 'Perplexity AI月活用户突破1.5亿，估值达180亿美元',
    summary: 'Perplexity AI月活用户突破1.5亿，较去年同期增长300%，成为增长最快的AI搜索引擎。',
    source: '界面新闻',
    content: `AI搜索引擎Perplexity宣布其月活跃用户已突破1.5亿，较去年同期增长300%，成为全球增长最快的AI搜索产品。

Perplexity以其"答案引擎"定位，直接提供结构化的回答而非传统的链接列表，正在改变用户的搜索习惯。最新一轮融资后，公司估值达到180亿美元。

对于品牌而言，Perplexity的崛起意味着新的流量入口——用户不再通过Google搜索，而是直接向AI提问。品牌需要确保自己的内容被AI引擎正确引用和推荐，这正是GEO（生成式引擎优化）的核心价值。

Perplexity CEO表示，公司计划在未来12个月内将其广告平台扩展到更多市场，为品牌提供在AI搜索结果中的展示机会。`,
  },
  {
    date: '2026-05-15',
    tag: '行业动态',
    title: 'Perplexity推出广告平台，AI搜索商业化加速',
    summary: 'Perplexity正式推出广告平台，品牌可在AI搜索结果中展示广告，标志商业化新阶段。',
    source: '广告门',
    content: `Perplexity正式推出其广告平台"Perplexity for Brands"，允许品牌在AI搜索结果中展示赞助内容。

这是AI搜索引擎首次大规模尝试商业化，标志着AI搜索从免费工具向商业平台的转变。广告形式包括：
- 赞助回答：品牌信息融入AI生成的回答中
- 推荐卡片：在相关问答中展示品牌推荐
- 品牌专区：品牌可以在特定话题下建立专属内容区

对于营销从业者来说，这既是机遇也是挑战——传统SEO技能需要升级为GEO（生成式引擎优化）能力，才能在AI搜索时代保持品牌可见性。

业内专家认为，这将催生一个全新的"GEO营销"市场，预计2027年市场规模将超过500亿元。`,
  },
  {
    date: '2026-05-10',
    tag: 'GEO研究',
    title: 'GEO优化成为品牌营销新标配，企业加速布局',
    summary: '随着AI搜索普及，GEO优化已成品牌营销新标配，越来越多企业开始布局生成式引擎优化。',
    source: '梅花网',
    content: `随着ChatGPT、Perplexity、豆包、DeepSeek等AI搜索产品的普及，GEO（生成式引擎优化）正在成为品牌营销的新标配。

什么是GEO？简单来说，就是优化品牌内容，使其更容易被AI搜索引擎引用和推荐。与传统SEO不同，GEO关注的是：
- 内容的语义结构化（让AI更容易理解和引用）
- 权威信号建设（让AI认为你的内容值得信赖）
- 知识图谱构建（让AI在相关话题中优先想到你的品牌）

目前，已有超过40%的头部品牌开始布局GEO策略。早期布局者报告称，其品牌在AI搜索中的被引用率提升了200-500%。

行业专家建议，品牌应该立即开始GEO布局，因为AI搜索引擎的算法会优先引用已经建立权威性的内容源。`,
  },
  {
    date: '2026-05-10',
    tag: '技术前沿',
    title: '微软推出Copilot Agent Studio，企业智能体开发进入新阶段',
    summary: '微软推出低代码AI智能体开发平台Copilot Agent Studio，降低企业AI应用门槛。',
    source: '微软官方博客',
    content: `微软正式推出Copilot Agent Studio，一个低代码的AI智能体开发平台，旨在降低企业构建AI应用的技术门槛。

核心功能包括：
- 可视化Agent设计器：拖拽式构建智能体工作流
- 预置模板库：覆盖客服、销售、HR等常见场景
- 企业知识库集成：一键连接SharePoint、OneDrive等数据源
- 安全合规框架：内置数据隔离和审计日志

微软表示，Copilot Agent Studio的目标是让"每个企业都能拥有自己的AI智能体"，而不需要专业的AI工程师团队。

这一举措将加速AI智能体在中小企业的普及，预计2026年下半年将有超过10万家企业使用该平台。`,
  },
  {
    date: '2026-05-08',
    tag: '市场洞察',
    title: 'AI驱动营销自动化市场规模2026年将达800亿元',
    summary: '艾瑞咨询预测中国AI驱动营销自动化市场规模将达800亿元，同比增长65%。',
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
  {
    date: '2026-05-05',
    tag: 'AI趋势',
    title: 'AI智能体在营销自动化中的应用爆发，60%头部品牌已部署',
    summary: 'AI智能体在营销自动化领域呈爆发态势，超过60%的头部品牌已部署AI营销智能体。',
    source: '梅花网',
    content: `最新调研数据显示，超过60%的头部品牌已经在营销自动化领域部署了AI智能体，这一比例较去年同期翻了一番。

AI营销智能体的典型应用场景包括：
- 智能客服：7×24小时响应，解决率超85%
- 线索评分：自动识别高价值线索，提升转化率
- 内容生成：批量生产个性化的营销内容
- 社媒运营：自动回复、内容发布、数据分析
- 广告优化：实时调整投放策略，降低成本

已部署AI智能体的品牌报告称，营销效率平均提升3-5倍，人力成本降低40%。

行业专家预测，到2027年，AI智能体将成为每个营销团队的"标配成员"。`,
  },
  {
    date: '2026-04-22',
    tag: 'GEO研究',
    title: 'AI搜索重塑品牌可见性：Google AI Overview覆盖超40%查询',
    summary: 'AI搜索引擎正重塑品牌可见性，Google AI Overview覆盖超40%搜索查询，GEO策略成关键。',
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
    date: '2026-04-03',
    tag: '行业动态',
    title: 'AI搜索时代品牌如何在DeepSeek、豆包上获得曝光',
    summary: '超60%中国网民使用过AI搜索产品，品牌需从传统SEO升级为GEO策略获取AI信源曝光。',
    source: '人人都是产品经理',
    content: `最新数据显示，超过60%的中国网民已经使用过AI搜索产品（如DeepSeek、豆包、Kimi等），AI搜索正在快速改变用户获取信息的方式。

对于品牌而言，这意味着：
- 传统SEO的流量正在被AI搜索分流
- 品牌需要确保自己成为AI的"可信信息源"
- 内容策略需要从"关键词优化"转向"语义覆盖"

在DeepSeek和豆包上获得品牌曝光的关键策略：
1. 创建高质量的行业深度内容，被AI引用的概率更高
2. 在权威平台（知乎、微信公众号、行业媒体）建立品牌内容矩阵
3. 使用结构化数据标记，让AI更容易解析你的内容
4. 建立品牌知识图谱，让AI在相关话题中优先想到你

品牌越早布局GEO，越能在AI搜索时代占据先机。`,
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
