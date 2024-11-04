// app/blog/[slug]/page.tsx
import { fetchMarkdownContent } from '@/utils/markdown';
import MarkdownContent from '@/components/MarkdownContent';
import articles from '@/content/articles.json';
import Link from 'next/link';
import Foot from '@/app/foot';
import BlogSidebar from '@/components/BlogSidebar';

function BlogHeader() {
  return (
    <header className="border-b border-cLineBreak py-4 mb-6">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="markdown-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="markdown-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="markdown-link">
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const content = await fetchMarkdownContent(`src/_articles/${slug}.md`);
  const article = articles.find((a) => a.slug === slug);

  return (
    <div className="min-h-screen font-['Old_Standard_TT']">
      <BlogHeader />
      <div className="container mx-auto px-2">
        <div className="flex">
          <BlogSidebar articles={articles} />
          <main className="flex-1 px-4">
            <article>
              {article && (
                <header className="mb-8">
                  <time className="markdown-paragraph">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </header>
              )}
              <div className="markdown-paragraph">
                <MarkdownContent content={content} />
              </div>
            </article>
          </main>
        </div>
      </div>
      <Foot />
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