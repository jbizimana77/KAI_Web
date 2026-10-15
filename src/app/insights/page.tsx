import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and notes from the KAI technology desk on software, AI, cloud and IT.",
};

export default function InsightsPage() {
  return (
    <PageShell
      eyebrow="Insights"
      title="From the KAI technology desk"
      description="Practical writing on building reliable technology and applying AI, cloud and software thoughtfully."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
