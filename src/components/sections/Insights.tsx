import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function InsightsSection() {
  return (
    <section id="insights" className="bg-white py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            title="From the KAI technology desk"
            description="Practical notes on software, AI, cloud and the work of building reliable technology."
            action={
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-kai-blue"
              >
                View all insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 60}>
              <ArticleCard article={article} index={index} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
