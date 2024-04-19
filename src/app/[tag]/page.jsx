import { notFound } from 'next/navigation';
import projects from '@/content/projects.json';
import articles from '@/content/articles.json'
import tagData from '@/content/tags.json';
import ProjectCard from '@/components/ProjectCard';
import ArticleCard from '@/components/ArticleCard';
import TagFilter from '@/components/TagFilter';

export async function generateStaticParams() {
  return tagData.map((tag) => ({
    tag: tag.text,
  }));
}

const TagPage = ({ params }) => {
  const { tag } = params;
  const tagInfo = tagData.find((t) => t.text === tag);

  if (!tagInfo) {
    return notFound();
  }

  const filteredProjects = Object.values(projects).filter((project) =>
    project.skills.includes(tag)
  );

  const filteredArticles = Object.values(articles).filter((article) =>
    article.tags.includes(tag)
  );

  return (
    <>
      <div className="container mx-auto px-4 sm:px-0 py-20 min-h-screen font-oldStandardTT">
        <div className="flex justify-between items-center mb-4">
          <h1 className="markdown-h1">Projects Using :: {tag}</h1>
          <TagFilter initialTag={tag} />
        </div>
        <div className="grid grid-cols-2 gap-4 px-10 lg:px-24">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <hr className="my-8" />
        <h1 className="markdown-h1">Articles Using :: {tag}</h1>
        <div className="grid grid-cols-2 gap-4 px-10 lg:px-24">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TagPage;