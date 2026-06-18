import './index.css';

export const metadata = {
  title: "盛世天宜 - GEO服务与智能体定制",
  description: "构建AI时代的品牌护城河。盛世天宜提供GEO服务、智能体开发、自动化工作流定制及品牌运营服务。",
  keywords: "GEO, 智能体, 自动化工作流, 品牌运营, AI, 数字化转型",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
