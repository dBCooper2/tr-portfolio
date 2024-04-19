import { fetchMarkdownContent } from '@/utils/markdown';
import MarkdownContent from '@/components/MarkdownContent';
import articles from '@/content/articles.json';
import Foot from '@/app/foot';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const content = await fetchMarkdownContent(`src/_articles/${slug}.md`);

  return (
    <div className="container mx-auto">
      <div className="p-10 lg:p-24">
        <MarkdownContent content={content} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}