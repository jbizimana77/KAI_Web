import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
  index?: number;
};

const covers = [
  "from-[#0d3a78] to-[#10c8e8]",
  "from-[#071a3d] to-[#1677ff]",
  "from-[#0a2f5f] to-[#20b486]",
  "from-[#10213f] to-[#3aa0ff]",
];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-kai-border bg-white shadow-[0_8px_30px_rgba(7,26,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,26,61,0.08)]">
      <div className={`relative h-40 bg-gradient-to-br ${covers[index % covers.length]}`}>
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-kai-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>•</span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-kai-navy transition-colors group-hover:text-kai-blue">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-kai-muted">
          {article.description}
        </p>
        <Link
          href={article.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-kai-blue"
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
