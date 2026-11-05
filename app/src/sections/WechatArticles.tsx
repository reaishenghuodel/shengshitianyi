import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, MessageCircle, Calendar } from 'lucide-react';
import { wechatArticles as articles } from '../data/wechatArticles';

// 公众号文章卡片：点击展开全文，底部带跳转公众号按钮
function ArticleCard({ article }: { article: { id: string; title: string; summary: string; date: string; cover?: string; content: string; wechatUrl?: string; tags?: string[] } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-white border border-gray-100 transition-all duration-300 hover:border-brand-red/20 hover:shadow-lg">
      <div className="p-6 lg:p-8 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-medium">
            <MessageCircle className="w-3 h-3" />
            公众号精选
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
          {article.tags && article.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs">{tag}</span>
          ))}
        </div>

        <h3 className="text-lg lg:text-xl font-semibold text-brand-black mb-2 group-hover:text-brand-red transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.summary}</p>

        <div className="mt-4 flex items-center text-brand-red text-sm font-medium">
          {expanded ? (
            <>收起 <ChevronUp className="w-4 h-4 ml-1" /></>
          ) : (
            <>阅读全文 <ChevronDown className="w-4 h-4 ml-1" /></>
          )}
        </div>
      </div>

      {expanded && (
        <div className="px-6 lg:px-8 pb-8">
          {article.cover && (
            <img
              src={article.cover}
              alt={article.title}
              className="w-full max-h-96 object-cover mb-6"
              loading="lazy"
            />
          )}
          <div
            className="prose prose-slate max-w-none text-gray-700 leading-relaxed
              [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-black [&_h2]:mt-8 [&_h2]:mb-4
              [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-brand-black [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:mb-4 [&_p]:leading-7
              [&_blockquote]:border-l-4 [&_blockquote]:border-brand-red [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-4 [&_blockquote]:bg-gray-50 [&_blockquote]:text-gray-600
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
              [&_li]:mb-2
              [&_strong]:text-brand-black
              [&_img]:w-full [&_img]:my-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* 跳转公众号 */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            {article.wechatUrl ? (
              <a
                href={article.wechatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-medium hover:bg-red-700 transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                阅读公众号原文
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-500 text-sm">
                <MessageCircle className="w-4 h-4" />
                本文首发于微信公众号【盛世天宜AI研究院】，搜索关注阅读更多内容
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function WechatArticles() {
  return (
    <section id="wechat-articles" className="py-20 lg:py-28 bg-brand-gray4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-brand-red text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            深度文章
          </div>
          <h2 className="section-title mb-6">公众号精选</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            来自「盛世天宜AI研究院」公众号的深度原创文章，聚焦 GEO、AI 搜索与品牌数字资产
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {articles.length === 0 ? (
            <div className="text-center text-gray-400 py-12">文章同步中，敬请期待</div>
          ) : (
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
