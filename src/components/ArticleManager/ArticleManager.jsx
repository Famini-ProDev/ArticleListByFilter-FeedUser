import React from "react";
import { Spin } from "antd";
import FilterPanel from "./components/FilterPanel";
import ArticleList from "./components/ArticleList";
import PersonalizedNewsFeed from "../PersonalizedNewsFeed/components/PersonalizedNewsFeed";
import { useArticleList } from "../../hooks/useArticleList";

const ArticleManager = () => {
  const {
    loading,
    filteredArticles,
    filters,
    setShowModal,
    showModal,
    saveNewsFeedForm,
    serachByFilters,
  } = useArticleList();

  const handleFilterChange = (filterData) => {
    serachByFilters(filterData);
  };

  return (
    <div className="articleManager w-2/3 mx-auto">
      <PersonalizedNewsFeed
        setShowModal={setShowModal}
        showModal={showModal}
        saveNewsFeedForm={saveNewsFeedForm}
      />
      <h1 className="text-center my-7">{"News Aggregator"}</h1>
      <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
      {loading ? (
        <Spin />
      ) : (
        <>
          <ArticleList articles={filteredArticles} />
        </>
      )}
    </div>
  );
};

export default ArticleManager;
