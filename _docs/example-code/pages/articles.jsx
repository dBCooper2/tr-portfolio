import { useRouter } from 'next/router';
import { getArticlesMetadata } from './api/articles';
import { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import FilterButton from '../components/FilterButton';
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
  const router = useRouter();
  const { tag } = router.query;
  const [filteredArticles, setFilteredArticles] = useState(articles);
  

  // Filter articles based on tag parameter
  useEffect(() => {
    if (tag) {
      const filtered = articles.filter((article) => article.tags.includes(tag));
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }, [tag, articles]);

  return (
    <div>
      <div className={styles.title_container}>
          <h1>Articles</h1>
          <center>
            <FilterButton destination="articles"/>
          </center>
      </div>
      <br />
      <hr />
      <div>
        <h3>This Page and the Connected Articles are still a Work-in-Progress. Some of the Markdown might not render correctly, and images are not currently displaying. 
          This will be fixed soon and all notebooks in a fully viewable form are available by clicking the "source code" link on their cards.</h3>
      </div>
      <br />
      <hr />
      <div className={styles.container}>
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // Fetch articles metadata
  const articles = getArticlesMetadata();

  return {
    props: {
      title: "Articles",
      articles,
    },
  };
};

export default ArticlesPage;
