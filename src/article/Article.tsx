import { useEffect, useState } from "react";
import './article.css'

function Article() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?per_page=5")
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="article">
      <h1 className="tech">Articles tech</h1>

      {articles.map(article => (
        <div key={article.id}>
          <h3 className="post">{article.title}</h3>
          <p><img src={article.social_image} alt={article.title} /></p>
          <p className="lire"><a href={article.url} target="_blank">Lire</a></p>
        </div>
      ))}
    </div>
  );
}

export default Article;