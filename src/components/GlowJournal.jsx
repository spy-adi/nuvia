import React, { useState, useEffect } from "react";
import data from "../../src/data/data.json";

const GlowJournal = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const glowData = data.glowJournal;

  const chipStyle = {
    padding: "10px 15px",
    backgroundColor: "#b7eacb",
    borderRadius: "20px",
    margin: "5px",
    cursor: "pointer",
    display: "inline-block",
  };

  const selectedStyle = {
    padding: "20px",
    backgroundColor: "#f9fff9",
    border: "1px solid #ddd",
    marginTop: "20px",
    borderRadius: "8px",
  };

  const tagStyle = {
    display: "inline-block",
    backgroundColor: "#e2ffe8",
    color: "#2a623d",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    marginRight: "8px",
    marginTop: "5px",
  };

  return (
    <div
      style={{
        padding: "100px",
        fontFamily: "Arial, sans-serif",
        background: "url(../img/glowJournal.png)",
        backgroundColor: "#e5e5e5",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <h1 style={{ fontSize: "32px" }}>{glowData.intro.title}</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
        {glowData.intro.subtitle}
      </p>
      <p style={{ marginBottom: "30px", lineHeight: "1.6" }}>
        {glowData.intro.description}
      </p>

      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Explore Blogs</h2>
      <div>
        {glowData.articles.map((article, index) => (
          <div
            key={index}
            style={chipStyle}
            onClick={() => setSelectedArticle(article)}
          >
            {article.emoji} {article.title}
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div style={selectedStyle}>
          <h2>
            {selectedArticle.emoji} {selectedArticle.title}
          </h2>
          <p style={{ fontStyle: "italic", color: "gray" }}>
            🕒 Read Time: {selectedArticle.readTime}
          </p>
          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            {selectedArticle.content}
          </p>
          <div style={{ marginTop: "10px" }}>
            {selectedArticle.tags.map((tag, idx) => (
              <span key={idx} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
          borderTop: "1px solid #ddd",
          paddingTop: "30px",
          width: "33%",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>
          📬 Want glow in your inbox?
        </h2>
        <p style={{ marginBottom: "10px" }}>
          <b>
            {" "}
            Subscribe to the Glow Journal and get exclusive blog drops, new
            product launches, and skincare tips straight to your inbox — no
            spam, just skin wisdom.
          </b>
        </p>
        <input
          type="email"
          placeholder="📧 Enter your email"
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#64bc89",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default GlowJournal;
