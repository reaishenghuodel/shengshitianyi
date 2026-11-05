import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CaseItem {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
  results: string[];
}

const cases: CaseItem[] = [
  // ---- 原有6个案例 ----
  {
    category: 'GEO优化',
    title: '某科技公司AI推荐率提升300%',
    description: '通过语义优化和知识图谱构建，该品牌在主流AI引擎中的推荐率实现质的飞跃。',
    image: '/images/case-1.jpg',
    alt: 'GEO优化案例 - AI推荐率提升',
    results: [],
  },
  {
    category: '智能体开发',
    title: '零售企业客服效率提升5倍',
    description: '定制AI客服助手，7×24小时响应，解决率超85%，大幅降低人力成本。',
    image: '/images/case-2.jpg',
    alt: 'AI客服智能体 - 效率提升5倍',
    results: [],
  },
  {
    category: '自动化工作流',
    title: '金融机构流程自动化改造',
    description: '打通12个业务系统，实现端到端自动化，年节省工时超10000小时。',
    image: '/images/case-3.jpg',
    alt: '金融自动化 - 年省万小时',
    results: [],
  },
  {
    category: '品牌运营',
    title: '新消费品牌0-1冷启动',
    description: '3个月实现全网曝光超5000万，私域用户增长10万+，ROI达1:8。',
    image: '/images/case-4.jpg',
    alt: '品牌冷启动 - 3月曝光5000万',
    results: [],
  },
  {
    category: '整合服务',
    title: '传统制造企业数字化转型',
    description: '从品牌重塑到智能体部署，为企业提供完整的数字化升级方案。',
    image: '/images/case-5.jpg',
    alt: '制造业数字化转型案例',
    results: [],
  },
  {
    category: 'GEO优化',
    title: '医疗品牌AI可信度建设',
    description: '构建权威内容体系，在健康咨询场景中获得AI引擎优先推荐。',
    image: '/images/case-6.jpg',
    alt: '医疗GEO - AI可信度建设',
    results: [],
  },
  // ---- 知识库真实案例 ----
  {
    category: 'GEO优化',
    title: '保时捷Panamera新品发布会',
    subtitle: 'XR虚拟体验 × 科技奢华感知',
    description: '保时捷Panamera新品发布，预算为同级别70%，需强化"科技奢华"感知并提升预订量。围绕"提升产品溢价感知"北极星指标，构建"电动豪华轿车技术解析""百万级轿车沉浸式体验场景"知识板块，将XR虚拟试驾等线下创新点转化为深度技术解读文章与视频，投放科技、汽车垂类权威媒体。',
    image: '/images/case-1.jpg',
    alt: '保时捷Panamera - XR虚拟体验',
    results: [
      '核心关键词媒体报道引用率提升85%',
      '头部引用占比达90%',
      '"XR虚拟体验""科技奢华感"关键词占比超60%',
      '新品预订咨询量增长35%',
    ],
  },
  {
    category: '品牌运营',
    title: '华侨城欢乐港湾新春嘉年华',
    subtitle: '城市文化IP × AI端曝光500万+',
    description: '滨海文化公园欢乐港湾新春嘉年华，需兼顾人群数量、品牌形象与消费带动，并形成可持续IP。将项目打造为"城市级文旅活动ESG实践"标杆案例，针对"深圳春节去哪里""家庭亲子嘉年华"等场景，系统输出包含安全预案、消费动线设计、商户联动模式的"方法论"内容。',
    image: '/images/case-2.jpg',
    alt: '华侨城新春嘉年华 - 央视报道',
    results: [
      'AI端直接曝光量超500万次',
      '信息准确率提升至100%',
      '"华侨城""新春嘉年华"品牌词推荐率持续领先',
      '中央电视台直播报道',
    ],
  },
  {
    category: '人工智能一体化',
    title: '汤品礼燕AI一体化产业落地',
    subtitle: '香港有机食品 × 数字化信任资产',
    description: '香港知名有机食品企业，主营银耳燕窝、鱼胶羹等高端滋补品，全面执行数字溯源体系。为汤品礼燕定制专属AI品牌智能体，内置品牌故事、溯源体系、产品功效等结构化知识库，围绕"银耳燕窝营养价值""鱼胶羹胶原蛋白含量"等消费决策高频问题，输出数据化、可溯源的结构化内容。',
    image: '/images/case-3.jpg',
    alt: '汤品礼燕 - AI产业落地',
    results: [
      '核心关键词AI推荐率提升至55%',
      '信源引用占比从0增长至68%',
      '电商平台自然搜索流量增长67%',
      'AI引流购买率增加100%',
      '咨询转化率提升37%',
    ],
  },
];

export default function Cases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 75%',
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
      id="cases"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
            标杆案例
          </span>
          <h2 className="section-title mb-6">
            用<span className="text-brand-red">数据和结果</span>说话
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            服务保时捷、华侨城、汤品礼燕等120+知名品牌，每个案例都是可验证的AI转型成果
          </p>
        </div>

        {/* Cases Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.title}
              className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-card-hover border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-medium">
                    {caseItem.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-black mb-1 group-hover:text-brand-red transition-colors duration-300">
                  {caseItem.title}
                </h3>
                {caseItem.subtitle && (
                  <p className="text-brand-red/70 text-sm mb-3">{caseItem.subtitle}</p>
                )}
                <p className="text-brand-gray1 text-sm leading-relaxed mb-4 line-clamp-3">
                  {caseItem.description}
                </p>

                {/* Results - only for cases that have results */}
                {caseItem.results && caseItem.results.length > 0 && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-1 text-brand-red text-sm font-medium hover:gap-2 transition-all duration-300"
                    >
                      {expandedIndex === index ? '收起成果' : '查看数据成果'}
                      {expandedIndex === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedIndex === index && (
                      <ul className="mt-3 space-y-2">
                        {caseItem.results.map((result, rIndex) => (
                          <li
                            key={rIndex}
                            className="flex items-start gap-2 text-sm text-brand-gray2"
                          >
                            <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-brand-red text-sm font-medium group/link"
                >
                  <span className="relative">
                    {caseItem.results && caseItem.results.length > 0 ? '了解类似方案' : '阅读更多'}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-red transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                </a>
              </div>

              {/* Hover border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-3 border-2 border-brand-black text-brand-black px-8 py-4 font-medium overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="relative z-10">查看更多案例</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-brand-black transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
