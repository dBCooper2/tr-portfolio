import React from 'react';
import articles from '@/content/articles.json';
import ArticleCard from '@/components/ArticleCard';
import Foot from '../foot';

interface Article {
  title: string;
  description: string;
  tags: string[];
  // Add any other properties your article data has
}

// add sidebar to each article that has a dropdown menu by date of each article
// 

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0 py-20 min-h-screen font-oldStandardTT">
      <h1 className='markdown-h1'>Blog</h1>
      {articles.map((article: Article, index: number) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default BlogPage;