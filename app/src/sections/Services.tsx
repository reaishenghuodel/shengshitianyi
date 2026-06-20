import { useEffect, useRef } from 'react';
import { Search, Bot, Globe, BarChart3, GraduationCap, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dscItems = [
  {
    letter: 'D',
    title: '策略深度',
    subtitle: 'Depth',
    desc: '北极星指标工作法，围绕品牌核心商业目标反向构建AI信任链',
  },
  {
    letter: 'S',
    title: '信源体系',
    subtitle: 'System',
    desc: '官网+标杆案例+白皮书，构建权威信源铁三角',
  },
  {
    letter: 'C',
    title: '闭环验证',
    subtitle: 'Closed-loop',
    desc: '蜂巢协同系统，全链路数据监测与策略迭代',
  },
];

const dssItems = [
  {
    letter: 'D',
    title: '语义深度',
    subtitle: 'Depth',
    desc: '问题定义→逻辑分析→案例支撑→结论，提升AI理解效率',
  },
  {
    letter: 'S',
    title: '数据支持',
    subtitle: 'Support',
    desc: '所有核心观点标注明确来源，确保信息可验证',
  },
  {
    letter: 'S',
    title: '权威来源',
    subtitle: 'Source',
    desc: '行业机构共创、官方白皮书、高权重平台背书',
  },
];

const services = [
  {
    icon: Search,
    module: 'A',
    title: '品牌AI认知资产审计与战略规划',
    description: '诊断品牌AI认知现状，扫描线下活动、案例、荣誉等资产，转化为高价值信源。',
    deliverables: ['《AI GEO健康度诊断报告》', '《AI认知资产构建战略路线图》'],
    color: 'from-red-500/10 to-transparent',
  },
  {
    icon: Bot,
    module: 'B',
    title: 'AI智能体工作流与品牌知识库搭建',
    description: '设计品牌专属AI智能体交互逻辑，搭建覆盖品牌故事、核心业务、标杆案例的结构化内容库。',
    deliverables: ['智能体交互原型', '结构化品牌知识图谱', '初期内容库'],
    color: 'from-blue-500/10 to-transparent',
  },
  {
    icon: Globe,
    module: 'C',
    title: '全托管GEO优化与运营服务',
    description: '内容生产、信源建设、全平台投放、数据监测、策略迭代全流程托管。',
    deliverables: ['内容生产', '信源建设', '全平台投放', '数据监测', '策略迭代'],
    color: 'from-green-500/10 to-transparent',
  },
  {
    icon: BarChart3,
    module: 'D',
    title: '人工智能一体化产业落地服务',
    description: '从AI战略咨询、智能体开发、知识库部署到运营培训的全链路一体化解决方案。',
    deliverables: ['食品溯源', '大健康', '跨境品牌', '产业场景适配'],
    color: 'from-purple-500/10 to-transparent',
  },
  {
    icon: GraduationCap,
    module: 'E',
    title: 'GEO技能培训与工具赋能',
    description: '帮助品牌内部团队掌握GEO基础能力，交付培训手册、工具账号、定制化创作模板。',
    deliverables: ['培训手册', '工具账号', '定制化创作模板'],
    color: 'from-orange-500/10 to-transparent',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        frameworkRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: frameworkRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
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
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-gray4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
            核心方法论
          </span>
          <h2 className="section-title mb-6">
            DSC策略原则 ×
            <span className="text-brand-red"> DSS技术框架</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            策略引领 + 技术赋能 —— 让每一次AI推荐都承载明确的商业价值
          </p>
        </div>

        {/* Framework: DSC + DSS */}
        <div ref={frameworkRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* DSC */}
          <div className="bg-white p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-brand-black mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-brand-red text-white text-sm font-bold flex items-center justify-center">S</span>
              DSC 战略层原则
            </h3>
            <div className="space-y-4">
              {dscItems.map((item) => (
                <div key={item.letter} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-red/10 text-brand-red font-bold text-lg flex items-center justify-center flex-shrink-0">
                    {item.letter}
                  </div>
                  <div>
                    <p className="font-medium text-brand-black">
                      {item.title} <span className="text-brand-gray2 text-sm font-normal">({item.subtitle})</span>
                    </p>
                    <p className="text-brand-gray1 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DSS */}
          <div className="bg-white p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-brand-black mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-brand-red text-white text-sm font-bold flex items-center justify-center">S</span>
              DSS 执行层框架
            </h3>
            <div className="space-y-4">
              {dssItems.map((item) => (
                <div key={item.letter + item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-red/10 text-brand-red font-bold text-lg flex items-center justify-center flex-shrink-0">
                    {item.letter}
                  </div>
                  <div>
                    <p className="font-medium text-brand-black">
                      {item.title} <span className="text-brand-gray2 text-sm font-normal">({item.subtitle})</span>
                    </p>
                    <p className="text-brand-gray1 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Modules */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-brand-black mb-4">
            核心服务模块
          </h3>
          <p className="text-brand-gray1 max-w-xl mx-auto">
            从诊断到落地，从内容到运营，5大模块覆盖全链路
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.module}
                className="group relative bg-white p-8 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Module badge + Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-red group-hover:scale-110">
                      <Icon className="w-6 h-6 text-brand-red transition-colors duration-500 group-hover:text-white" />
                    </div>
                    <span className="text-xs font-bold text-brand-red bg-brand-red/10 px-2 py-1">
                      模块 {service.module}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-brand-black mb-3 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-brand-gray1 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.deliverables.map((d) => (
                      <span
                        key={d}
                        className="text-xs px-2 py-1 bg-gray-100 text-brand-gray2 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors duration-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-brand-red font-medium text-sm group/link"
                  >
                    <span className="relative">
                      了解详情
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-red transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
