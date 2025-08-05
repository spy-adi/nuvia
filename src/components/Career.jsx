import React from "react";
import data from "../../src/data/data.json";
import { useHistory } from "react-router-dom";

const Careers = () => {
  const history = useHistory();
  const careerData = data?.Careers;

  const containerStyle = {
    padding: "100px 20px",
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#f7fff8",
    minHeight: "100vh",
    background: "url(../img/career.png)",
    backgroundColor: "#e5e5e5",
    backgroundSize: "cover",
    height: "100%",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#004d40",
  };

  const descriptionStyle = {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
  };

  const chipContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  };

  const chipStyle = {
    padding: "14px 22px",
    backgroundColor: "#c8e6c9",
    borderRadius: "24px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    color: "#1b5e20",
    border: "1px solid #81c784",
    transition: "background-color 0.3s ease",
  };

  const handleJobClick = (job) => {
    const jobId = job.id;
    history.push(`/career/${jobId}`);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{careerData?.welcomeMessage}</h1>
      <p style={descriptionStyle}>{careerData?.description}</p>

      <div style={chipContainer}>
        {careerData?.openings?.map((job) => (
          <div
            key={job.id}
            style={chipStyle}
            onClick={() => handleJobClick(job)}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#a5d6a7")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#c8e6c9")
            }
          >
            {job.title} – {job.location}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
