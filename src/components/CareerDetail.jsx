import React from "react";
import { useParams } from "react-router-dom";
import data from "../../src/data/data.json";

const CareerDetail = () => {
  const { id } = useParams();
  const job = data.Careers.openings.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2 style={{ color: "#555" }}>Job not found</h2>
      </div>
    );
  }

  const sectionStyle = { marginTop: "30px" };
  const listStyle = { paddingLeft: "20px", marginTop: "10px" };
  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h2
        style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}
      >
        {job.title}
      </h2>
      <p style={{ fontSize: "16px", color: "#777", marginBottom: "10px" }}>
        Company: {job.company}
      </p>
      <p style={{ fontSize: "16px", color: "#777", marginBottom: "10px" }}>
        Location: {job.location}
      </p>
      <p style={{ fontSize: "16px", color: "#777", marginBottom: "10px" }}>
        Experience: {job.experience}
      </p>
      <p style={{ fontSize: "16px", color: "#777", marginBottom: "20px" }}>
        Salary: {job.salary}
      </p>

      <div style={sectionStyle}>
        <div style={titleStyle}>About the Role</div>
        {job.description.map((desc, i) => (
          <p key={i} style={{ marginBottom: "10px" }}>
            {desc}
          </p>
        ))}
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>Key Responsibilities</div>
        <ul style={listStyle}>
          {job.responsibilities.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>Minimum Requirements</div>
        <ul style={listStyle}>
          {job.required.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>Preferred Qualifications</div>
        <ul style={listStyle}>
          {job.preferred.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>What We Offer</div>
        <ul style={listStyle}>
          {job.offer.map((item, i) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>Competencies We Value</div>
        <ul style={listStyle}>
          {job.competencies.map((item, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <strong>{item.name}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>Evaluation Criteria</div>
        <ul style={listStyle}>
          {job.evaluation.map((item, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <strong>{item.criteria}</strong> ({item.weight}): {item.indicator}
            </li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <div style={titleStyle}>How to Apply</div>
        <p style={{ marginTop: "10px" }}>{job.howToApply}</p>
      </div>
    </div>
  );
};

export default CareerDetail;
