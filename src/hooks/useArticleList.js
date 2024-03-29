import { useState } from "react";
import axios from "axios";

export const useArticleList = () => {
  const NEWS_API_ENDPOINT = "https://newsapi.org/v2/everything";
  const GUARDIAN_API_ENDPOINT = "https://content.guardianapis.com/sections";
  const NEWYTIMES_API_ENDPOINT =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  const [filters, setFilters] = useState({
    keyword: "",
    date: "",
    categories: [],
    sources: [],
    feedSources: [], // For personalized news feed
    feedCategories: [], // For personalized news feed
    feedAuthors: [], // For personalized news feed
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [articles, setArticles] = useState([]);

  const serachByFilters = (data) => {
    getArticlesBySource(data.sources);
  };
  const getArticleListByFeed = async () => {
    setShowModal(false);
    const newsFeedData = JSON.parse(localStorage.getItem("newsfeedform"));
    getArticlesBySource(newsFeedData.sources);
  };
  const getArticlesBySource = (source) => {
    switch (source) {
      case 1:
        newsApi();
        break;
      case 2:
        guardianApi();
        break;
      case 3:
        nytimesApi();
        break;
      default:
    }
  };
  const saveNewsFeedForm = (form) => {
    localStorage.setItem("newsfeedform", JSON.stringify(form));
    setFilters((prev) => ({
      ...prev,
      categories: form.categories,
      sources: form.sources,
      feedSources: form.sources,
      feedCategories: form.categories,
      feedAuthors: form.authors,
    }));
    setShowModal(false);
    getArticleListByFeed();
  };

  const newsApi = async () => {
    setLoading(true);
    const newsApiResponse = await axios.get(NEWS_API_ENDPOINT, {
      params: {
        apiKey: "ea51829de82f4c349f3eaed9bb0c7be2",
        q: filters.keyword,
        category: filters.categories.join(","),
        source: filters.sources,
        author: filters.feedAuthors.join(","),
        publishedAt: filters.date,
      },
    });
    setArticles(...newsApiResponse.data.articles);
    setLoading(false);
  };

  const guardianApi = async () => {
    setLoading(true);

    const guardianApiResponse = await axios.get(GUARDIAN_API_ENDPOINT, {
      params: {
        api_key: "50767434-83fa-4978-93d2-84c887163fe8",
        q: filters.keyword,
        section: filters.categories.join(","),
        "show-fields": "headline,trailText,thumbnail",
        source: filters.sources,
        author: filters.feedAuthors.join(","),
        date: filters.date,
      },
    });
    setArticles(...guardianApiResponse.data.response.results);
    setLoading(false);
  };

  const nytimesApi = async () => {
    setLoading(true);
    const nytimesApiResponse = await axios.get(NEWYTIMES_API_ENDPOINT, {
      params: {
        apiKey: "50767434-83fa-4978-93d2-84c887163fe8",
        q: filters.keyword,
        category: filters.categories.join(","),
        source: filters.sources,
        author: filters.feedAuthors.join(","),
        date: filters.date,
      },
    });
    setArticles(...nytimesApiResponse.data.articles);
    setLoading(false);
  };

  return {
    loading,
    articles,
    setFilters,
    filters,
    saveNewsFeedForm,
    showModal,
    setShowModal,
    serachByFilters,
  };
};
