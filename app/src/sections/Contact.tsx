import { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Building2, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const redBlockRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Red block animation
      gsap.fromTo(
        redBlockRef.current,
        { scale: 0, rotation: 10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Form fields stagger animation
      const formElements = formRef.current?.querySelectorAll('.form-field');
      if (formElements) {
        gsap.fromTo(
          formElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-gray4 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
          {/* Image */}
          <div className="relative">
            {/* Red decorative block */}
            <div
              ref={redBlockRef}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-red/10 -z-10"
            />
            
            <div
              ref={imageRef}
              className="relative h-full min-h-[400px] lg:min-h-[600px] overflow-hidden"
            >
              <img
                src="/images/contact.jpg"
                alt="联系我们"
                className="w-full h-full object-cover"
              />
              {/* Overlay with contact info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Contact info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  联系我们
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-brand-red mt-0.5" />
                    <div>
                      <p className="text-white/90 text-sm">深圳盛世天宜品牌管理有限公司</p>
                      <p className="text-white/70 text-xs">盛世天宜AI研究院</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-red mt-0.5" />
                    <p className="text-white/90 text-sm">
                      深圳市南山区西丽街道深港花卉中心别墅区N03
                      <br />
                      <span className="text-white/60">（大湾区核心创意枢纽）</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className="relative bg-white p-8 lg:p-12 lg:-ml-12 z-10"
          >
            <div className="form-field mb-8">
              <span className="inline-block text-brand-red text-sm font-medium tracking-wider uppercase mb-2">
                开始合作
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-brand-black">
                准备好构建您的
                <br />
                <span className="text-brand-red">AI品牌护城河</span>了吗？
              </h2>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up">
                <CheckCircle className="w-16 h-16 text-brand-red mb-4" />
                <h3 className="text-xl font-semibold text-brand-black mb-2">
                  消息已发送
                </h3>
                <p className="text-brand-gray1 text-center">
                  感谢您的咨询，我们会尽快与您联系！
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="form-field relative">
                    <label
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'name' || formData.name
                          ? '-top-5 text-xs text-brand-red'
                          : 'top-3 text-sm text-brand-gray2'
                      }`}
                    >
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pt-3 pb-2 border-b-2 border-brand-gray3 focus:border-brand-red outline-none transition-colors duration-300 bg-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field relative">
                    <label
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'email' || formData.email
                          ? '-top-5 text-xs text-brand-red'
                          : 'top-3 text-sm text-brand-gray2'
                      }`}
                    >
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pt-3 pb-2 border-b-2 border-brand-gray3 focus:border-brand-red outline-none transition-colors duration-300 bg-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-field relative">
                    <label
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'phone' || formData.phone
                          ? '-top-5 text-xs text-brand-red'
                          : 'top-3 text-sm text-brand-gray2'
                      }`}
                    >
                      电话
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pt-3 pb-2 border-b-2 border-brand-gray3 focus:border-brand-red outline-none transition-colors duration-300 bg-transparent"
                    />
                  </div>

                  {/* Company */}
                  <div className="form-field relative">
                    <label
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'company' || formData.company
                          ? '-top-5 text-xs text-brand-red'
                          : 'top-3 text-sm text-brand-gray2'
                      }`}
                    >
                      公司
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pt-3 pb-2 border-b-2 border-brand-gray3 focus:border-brand-red outline-none transition-colors duration-300 bg-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-field relative">
                  <label
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === 'message' || formData.message
                        ? '-top-5 text-xs text-brand-red'
                        : 'top-3 text-sm text-brand-gray2'
                    }`}
                  >
                    需求描述
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full pt-3 pb-2 border-b-2 border-brand-gray3 focus:border-brand-red outline-none transition-colors duration-300 bg-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-field pt-4">
                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red text-white px-10 py-4 font-medium overflow-hidden transition-all duration-300 hover:shadow-btn-hover hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">发送消息</span>
                    <Send className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-black transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
