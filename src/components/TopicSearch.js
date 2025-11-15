import React, { useState } from "react";
import "../styles/TopicSearch.css";

const TopicSearch = () => {
  const topics = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "Organic Chemistry", category: "Chemistry" },
    { id: 3, name: "Calculus", category: "Mathematics" },
    { id: 4, name: "Genetics", category: "Biology" },
    { id: 5, name: "Data Structures", category: "Computer Science" },
  ];

  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="topic-search-container">
      <h1 className="page-title">Topic Search</h1>

      <label htmlFor="search" className="search-label">
        Search topics
      </label>

      <input
        id="search"
        type="search"
        placeholder="Search topics..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search topics"
      />

      <div className="topics-grid">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} className="topic-card fade-in">
              <h3>{topic.name}</h3>
              <span className="category-tag">{topic.category}</span>
            </div>
          ))
        ) : (
          <p className="no-results" aria-live="polite">
            No topics found
          </p>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;
