import { useEffect, useRef } from 'react';
import { Globe, Bot, Workflow, TrendingUp, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: '生成式引擎优化 (GEO)',
    description: '让AI推荐您的品牌。我们优化内容结构和语义标记，提升在ChatGPT、Claude等AI引擎中的推荐率。',
    features: ['语义优化', '知识图谱构建', 'AI可见性分析'],
    color: 'from-red-500/10 to-transparent',
  },
  {
    icon: Bot,
    title: 'AI智能体定制',
    description: '为企业量身打造专属AI助手，从客服机器人到内部知识库助手，提升运营效率。',
    features: ['多轮对话设计', '知识库集成', '持续学习优化'],
    color: 'from-blue-500/10 to-transparent',
  },
  {
    icon: Workflow,
    title: '自动化工作流',
    description: '打通数据孤岛，构建智能化业务流程，让重复性工作自动化完成。',
    features: ['流程梳理', '系统集成', 'RPA实施'],
    color: 'from-green-500/10 to-transparent',
  },
  {
    icon: TrendingUp,
    title: '品牌运营服务',
    description: '全渠道品牌内容策略与执行，构建品牌数字资产，提升市场影响力。',
    features: ['内容策略', '社媒运营', '数据分析'],
    color: 'from-purple-500/10 to-transparent',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Cards stagger animation
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
            stagger: 0.15,
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
            我们的服务
          </span>
          <h2 className="section-title mb-6">
            落地可用的
            <span className="text-brand-red">AI解决方案</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            从策略到执行，从技术到运营——方案要落地，效果看得见
          </p>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white p-8 lg:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-brand-red/10 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-red group-hover:scale-110">
                      <Icon className="w-8 h-8 text-brand-red transition-colors duration-500 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-brand-black mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-gray1 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-brand-gray2"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
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

                {/* Border animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
