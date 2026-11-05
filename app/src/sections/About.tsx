import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2015-2020',
    title: '奠基期',
    desc: '以前沿创意与精准执行为核心，服务保时捷、华润、华侨城等120+知名品牌，奠定"策略-创意-执行"一体化服务基因。',
  },
  {
    year: '2021-2023',
    title: '数字化融合期',
    desc: '率先将XR虚拟制作、AI数据洞察等技术应用于保时捷发布会、华侨城嘉年华等标杆项目，完成从传统策划到"技术驱动创意"的转型。',
  },
  {
    year: '2024-2025',
    title: 'AI赋能探索期',
    desc: '基于全链路服务中积累的海量用户行为与转化数据，内部孵化AI应用，用于用户偏好分析、KOL精准匹配、内容创意生成。',
  },
  {
    year: '2026',
    title: 'AI GEO战略升级期',
    desc: '正式成立"盛世天宜AI研究院"，推出"人工智能一体化服务"产业落地解决方案，构建AI智能体工作流+GEO品牌运营系统化服务能力。',
  },
];

const qualifications = [
  '大型群众性活动安全许可协调经验',
  '知识产权管理体系认证',
  '政府采购供应商库准入资质',
  '互联网营销资质、数据安全合规认证',
  '25人核心AI技术团队',
  '自研AI引用监测工具',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const qualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (timelineRef.current) {
        const items = timelineRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (qualRef.current) {
        const items = qualRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: qualRef.current,
              start: 'top 85%',
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div ref={contentRef}>
            <span className="inline-block text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
              关于我们
            </span>

            <h2 className="section-title mb-6">
              深耕品牌服务
              <span className="text-brand-red">11年</span>
              <br />
              升级AI GEO战略服务商
            </h2>

            <p className="section-subtitle mb-6">
              深圳盛世天宜品牌管理有限公司，2015年成立，2026年正式升级为"AI GEO战略服务商"与"AI时代品牌信任资产架构师"。聚焦政企机构、高端消费品牌、新兴消费品牌三大核心客群。
            </p>

            <p className="text-brand-gray2 leading-relaxed mb-8">
              我们不仅是活动策划与品牌运营的执行者，更是帮助品牌在DeepSeek、豆包、腾讯元宝、文心一言、Kimi等主流生成式AI平台实现"提问即曝光、答案即转化"的信息架构师与信任资产构建者。
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-brand-black mb-4 uppercase tracking-wider">
                核心资质
              </h4>
              <div ref={qualRef} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {qualifications.map((q) => (
                  <div
                    key={q}
                    className="flex items-center gap-2 text-sm text-brand-gray2"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 text-brand-red font-medium hover:gap-4 transition-all duration-300"
            >
              了解我们的服务
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Right: Timeline */}
          <div>
            <h4 className="text-sm font-semibold text-brand-black mb-8 uppercase tracking-wider">
              发展历程
            </h4>
            <div ref={timelineRef} className="relative pl-8 border-l-2 border-brand-red/20 space-y-8">
             {milestones.map((m, _index) => (
                <div key={m.year} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[2.35rem] top-1 w-4 h-4 bg-brand-red rounded-full border-4 border-white shadow-sm" />

                  <div className="bg-brand-gray4 p-5 transition-all duration-300 hover:bg-brand-red/5 hover:shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-brand-red font-bold text-lg">{m.year}</span>
                      <span className="text-brand-black font-medium">{m.title}</span>
                    </div>
                    <p className="text-brand-gray1 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
