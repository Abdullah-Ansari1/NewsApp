import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState([]);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState([]);

  const capitalizeFirstLetter = (str) => {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News `;
    updateNews();
    chill();
    // eslint-disable-next-line
  }, []);

  const chill = async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setSearch(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  }


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setState(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  //Search the News By their Title
  const searchHandler = (e) => {
    if (e.target.value === "") {
      setArticles(state);
      return;
    }
    const filterData = search.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setArticles(filterData);
  };
  return (
    <>
      <div>
        <div className="container my-5">
          <h1 className="text-center">{props.heading}</h1>
          <div className="text-center my-5">{loading && <Spinner />}</div>
          {/* //Search Bar */}
          <div className="container my-2" style={{justifyItem:"center"}}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => searchHandler(e)}
                  style={{maxWidth:"300px"}}
                />
          </div>

          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 44) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 58)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newUrl={element.url}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                      author={element.author}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "us",
  category: "entertainment",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
