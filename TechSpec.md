# 盛世天宜网站技术规格

## 组件清单

### shadcn/ui 组件
| 组件 | 用途 | 安装命令 |
|------|------|----------|
| Button | CTA按钮、提交按钮 | `npx shadcn add button` |
| Card | 服务卡片、案例卡片 | `npx shadcn add card` |
| Input | 表单输入框 | `npx shadcn add input` |
| Textarea | 需求描述文本域 | `npx shadcn add textarea` |
| Label | 表单标签 | `npx shadcn add label` |
| Navigation Menu | 导航栏 | `npx shadcn add navigation-menu` |
| Sheet | 移动端菜单抽屉 | `npx shadcn add sheet` |
| Separator | 分隔线 | `npx shadcn add separator` |

### 第三方组件
无需第三方shadcn组件，使用自定义实现

### 自定义组件
| 组件 | 用途 | 位置 |
|------|------|------|
| Navbar | 固定导航栏 | `app/sections/Navbar.tsx` |
| Hero | 主视觉区 | `app/sections/Hero.tsx` |
| About | 关于我们 | `app/sections/About.tsx` |
| Services | 服务展示 | `app/sections/Services.tsx` |
| Cases | 案例研究 | `app/sections/Cases.tsx` |
| Contact | 联系我们 | `app/sections/Contact.tsx` |
| Footer | 页脚 | `app/sections/Footer.tsx` |
| AnimatedText | 文字动画组件 | `app/components/AnimatedText.tsx` |
| ScrollReveal | 滚动展现组件 | `app/components/ScrollReveal.tsx` |
| GradientMesh | 渐变网格背景 | `app/components/GradientMesh.tsx` |

## 动画实现规划

| 动画 | 库 | 实现方式 | 复杂度 |
|------|-----|----------|--------|
| 导航栏滚动效果 | CSS + React State | 监听滚动位置，动态添加class | 低 |
| 导航链接悬停 | CSS | transform + underline动画 | 低 |
| 主视觉文字拆分动画 | GSAP SplitText | 字符级动画，交错进入 | 高 |
| 主视觉图片视差 | GSAP ScrollTrigger | translateY + scale随滚动变化 | 中 |
| 渐变网格背景 | CSS Animation | 使用CSS渐变+动画实现简化版 | 中 |
| 关于我们3D图片效果 | CSS | perspective + rotateX/Y悬停效果 | 中 |
| 服务卡片水平滚动 | GSAP ScrollTrigger | pin + horizontal scroll | 高 |
| 服务图标浮动 | CSS Animation | translateY正弦波动画 | 低 |
| 案例卡片3D翻转进入 | GSAP ScrollTrigger | rotateY + opacity交错 | 高 |
| 案例卡片悬停抬升 | CSS | translateZ + scale + shadow | 中 |
| 联系表单字段动画 | CSS + React State | focus状态标签浮动 | 中 |
| 页脚分隔线渐变 | CSS Animation | 渐变位置动画 | 低 |
| 滚动展现动画 | GSAP ScrollTrigger | Intersection Observer + 交错 | 中 |
| 按钮磁性效果 | CSS :hover | transform倾斜+涟漪 | 低 |

## 动画库选择

### GSAP + ScrollTrigger
- 主视觉文字动画
- 滚动触发动画
- 水平滚动固定
- 复杂时间线控制

### CSS Animations
- 简单悬停效果
- 持续环境动画
- 背景渐变动画
- 图标浮动效果

### Intersection Observer (原生)
- 滚动进入检测
- 懒加载触发
- 性能优化

## 项目文件结构

```
app/
├── sections/
│   ├── Navbar.tsx          # 导航栏
│   ├── Hero.tsx            # 主视觉区
│   ├── About.tsx           # 关于我们
│   ├── Services.tsx        # 服务展示
│   ├── Cases.tsx           # 案例研究
│   ├── Contact.tsx         # 联系我们
│   └── Footer.tsx          # 页脚
├── components/
│   ├── AnimatedText.tsx    # 文字动画组件
│   ├── ScrollReveal.tsx    # 滚动展现组件
│   ├── GradientMesh.tsx    # 渐变网格背景
│   ├── ServiceCard.tsx     # 服务卡片
│   └── CaseCard.tsx        # 案例卡片
├── hooks/
│   ├── useScrollPosition.ts # 滚动位置hook
│   └── useInView.ts         # 视口检测hook
├── lib/
│   └── utils.ts            # 工具函数
├── page.tsx                # 主页面
├── layout.tsx              # 根布局
└── globals.css             # 全局样式
components/
└── ui/                     # shadcn组件
public/
├── images/                 # 图片资源
└── fonts/                  # 字体文件
```

## 依赖安装

### 核心依赖
```bash
# 动画库
npm install gsap @gsap/react

# 图标库
npm install lucide-react

# 工具库
npm install clsx tailwind-merge
```

### shadcn组件安装
```bash
npx shadcn add button card input textarea label navigation-menu sheet separator
```

## 性能优化策略

### 动画性能
- 所有动画使用 `transform` 和 `opacity`
- 动画前添加 `will-change`，动画后移除
- 使用 `Intersection Observer` 暂停屏幕外动画
- 滚动事件节流至 16ms (60fps)
- 使用 CSS containment: `contain: layout style paint`

### 图片优化
- 使用 Next.js Image 组件
- 图片懒加载
- 响应式图片尺寸
- WebP 格式优先

### 代码分割
- 按区域懒加载
- GSAP 动态导入
- 组件级别代码分割

## 响应式断点

```css
/* 移动端 */
@media (max-width: 767px) { }

/* 平板 */
@media (min-width: 768px) and (max-width: 991px) { }

/* 桌面端 */
@media (min-width: 992px) { }
```

## 颜色变量

```css
:root {
  --primary-red: #E30614;
  --primary-black: #000000;
  --white: #FFFFFF;
  --gray-1: #666666;
  --gray-2: #999999;
  --gray-3: #F5F5F5;
  --gray-4: #FAFAFA;
}
```

## 缓动函数

```css
:root {
  --ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-expo-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## 无障碍支持

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
