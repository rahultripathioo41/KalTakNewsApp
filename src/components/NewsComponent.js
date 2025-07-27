import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

function NewsComponent({ category }) {
  let [loading, setLoading] = useState(false);
  let [articles, setArticles] = useState([]);
  let [page, setPage] = useState(1);
  let [totalResults, setTotalResults] = useState(0);

  async function getData() {
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${category}&pageSize=8&page=1&apiKey=e541c24045a841a5bda6965efd869a23`;
    let response = await fetch(url);
    let data = await response.json();
    if (Array.isArray(data.articles)) {
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setPage(1);
    } else {
      setArticles([]);
    }
    setLoading(false);
  }

  async function nextpage() {
    let nextPage = page + 1;
    let url = `https://newsapi.org/v2/everything?q=${category}&pageSize=8&page=${nextPage}&apiKey=e541c24045a841a5bda6965efd869a23`;
    let response = await fetch(url);
    let data = await response.json();
    if (Array.isArray(data.articles)) {
      setArticles((prev) => [...prev, ...data.articles]);
      setPage(nextPage);
    }
  }

  useEffect(() => {
    getData();
  }, [category]);

  if (loading && page === 1) {
    return <span className="loader"></span>;
  }

  if (articles.length === 0) {
    return <div>NEWS API limit reached or no articles found</div>;
  }

  return (
    <div>
      <div style={{textAlign:"center"}}><h2>TOP {category} HEADLINES</h2></div>
      <InfiniteScroll
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
        dataLength={articles.length}
        next={nextpage}
        hasMore={articles.length < totalResults}
        loader={
          <div
            style={{ width: "100%", textAlign: "center", padding: "20px 0" }}
          >
            <span className="loader"></span>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {articles.map((news) => (
          <NewsItem
            key={news.url}
            title={news.title}
            imageUrl={news.urlToImage}
            desc={news.description}
            url={news.url}
            author={news.author || "Unknown"}
            source={news.source.name}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default NewsComponent;
