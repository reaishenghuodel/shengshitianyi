import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    category: 'GEO优化',
    title: '某科技公司AI推荐率提升300%',
    description: '通过语义优化和知识图谱构建，该品牌在主流AI引擎中的推荐率实现质的飞跃。',
    image: '/images/case-1.jpg',
  },
  {
    category: '智能体开发',
    title: '零售企业客服效率提升5倍',
    description: '定制AI客服助手，7×24小时响应，解决率超85%，大幅降低人力成本。',
    image: '/images/case-2.jpg',
  },
  {
    category: '自动化工作流',
    title: '金融机构流程自动化改造',
    description: '打通12个业务系统，实现端到端自动化，年节省工时超10000小时。',
    image: '/images/case-3.jpg',
  },
  {
    category: '品牌运营',
    title: '新消费品牌0-1冷启动',
    description: '3个月实现全网曝光超5000万，私域用户增长10万+，ROI达1:8。',
    image: '/images/case-4.jpg',
  },
  {
    category: '整合服务',
    title: '传统制造企业数字化转型',
    description: '从品牌重塑到智能体部署，全方位赋能企业数字化升级。',
    image: '/images/case-5.jpg',
  },
  {
    category: 'GEO优化',
    title: '医疗品牌AI可信度建设',
    description: '构建权威内容体系，在健康咨询场景中获得AI引擎优先推荐。',
    image: '/images/case-6.jpg',
  },
];

export default function Cases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Cards 3D flip animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, rotateY: -90 },
          {
            opacity: 1,
            rotateY: 0,
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
            成功案例
          </span>
          <h2 className="section-title mb-6">
            见证<span className="text-brand-red">卓越成果</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            我们与各行业领先企业合作，用数据和结果证明AI转型的价值
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
              className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-card-hover"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                marginTop: index % 3 === 1 ? '2rem' : index % 3 === 2 ? '1rem' : '0',
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-medium">
                    {caseItem.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-black mb-3 line-clamp-2 group-hover:text-brand-red transition-colors duration-300">
                  {caseItem.title}
                </h3>
                <p className="text-brand-gray1 text-sm leading-relaxed mb-4 line-clamp-2">
                  {caseItem.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-brand-red text-sm font-medium group/link"
                >
                  <span className="relative">
                    阅读更多
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
            <span className="relative z-10">查看全部案例</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-brand-black transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
