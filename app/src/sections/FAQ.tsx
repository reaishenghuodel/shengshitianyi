import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: '我们已经做了很多品牌宣传和SEO，为什么还需要AI GEO？',
    a: '传统宣传影响"人"，SEO影响"搜索引擎结果页"，而AI GEO影响"AI这个新形态的超级入口"。当用户习惯向AI提问并信任其答案时，未被AI推荐的品牌将在新一代信息环境中"被动消失"。GEO是面向未来的品牌必修课。',
  },
  {
    q: '盛世天宜的GEO服务和传统品牌服务是什么关系？',
    a: '是"内核"与"外延"的关系。传统服务（如发布会、嘉年华）是生产高价值品牌信源和数据的"原料车间"；AI GEO服务是"精炼厂"和"分发中心"，将这些原料加工成AI喜爱的知识产品，并精准分发给全球AI用户，让一次活动的价值获得长尾、倍增的回报。',
  },
  {
    q: '做GEO大概需要多少预算？周期多长？',
    a: '预算取决于目标范围和竞争强度。我们提供从单一知识库搭建的轻量级服务，到全托管运营的年度合作。通常，1-3个月可见核心长尾词引用率显著提升，6个月形成初步的AI认知壁垒。我们建议以季度为单位进行合作，以有效评估和调整策略。',
  },
  {
    q: '哪些AI平台是GEO优化的重点？',
    a: '优先布局用户基数大、行业相关性强的平台：DeepSeek（逻辑推理强，适合B2B及技术参数展示）、腾讯元宝（微信生态，适合私域流量转化与深度案例阅读）、Kimi（长文本处理强，适合发布活动全案白皮书）、豆包（泛化场景，适合大众消费品）、文心一言（本土化适配）。',
  },
  {
    q: '如何衡量AI GEO的商业价值？',
    a: '核心看三类指标：① 引用指标（引用频率、头部引用占比）；② 权威指标（EEAT权重评分）；③ 转化指标（基于AI推荐的咨询量、转化率、用户停留时长）。',
  },
  {
    q: '人工智能一体化服务与传统GEO有何不同？',
    a: '人工智能一体化服务是GEO的战略升维。它不仅解决"AI推荐什么"，更解决"AI如何理解品牌、如何与品牌业务系统（如溯源、CRM）联动、如何形成持续进化的智能资产"。我们交付的是品牌专属的AI智能体，而不仅仅是内容。',
  },
  {
    q: '哪些行业最适合盛世天宜的人工智能一体化服务？',
    a: '特别适合具有高价值决策门槛、需要建立专业信任、拥有可数据化资产的行业，如：政企服务、高端制造、大健康食品（燕窝/滋补品）、跨境品牌、文旅地产等。',
  },
  {
    q: '中小企业预算有限，如何低成本做GEO？',
    a: '可优先做"基础版"：清理公域杂乱信息、搭建核心问答库、优化官网结构化内容，聚焦1-2个核心关键词突破，后续再逐步扩大布局。',
  },
  {
    q: 'AI算法更新后，之前的GEO优化会失效吗？',
    a: '不会完全失效。GEO的核心是构建高质量知识资产，AI算法迭代更偏好优质内容；我们会持续监测算法变化，提供免费的策略适配调整，保障长期效果。',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      const items = listRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
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
      id="faq"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-brand-red text-sm font-medium tracking-wider uppercase mb-4">
            常见问题
          </span>
          <h2 className="section-title mb-6">
            关于<span className="text-brand-red">AI GEO</span>，你想知道的
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            汇总客户最常问的问题，帮你快速了解GEO服务的核心要点
          </p>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 overflow-hidden transition-all duration-300 hover:border-brand-red/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-base font-medium text-brand-black pr-4 group-hover:text-brand-red transition-colors duration-300">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gray2 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-brand-red' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-brand-gray1 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
