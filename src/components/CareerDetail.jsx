import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../src/data/data.json";

const CareerDetail = () => {
  const { id } = useParams();
  const job = data.Careers.openings.find((job) => job.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    interest: "",
    resume: "",
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const GETFORM_URL = "https://getform.io/f/bpjzmymb";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("linkedin", formData.linkedin);
      formPayload.append("interest", formData.interest);
      formPayload.append("resume", formData.resume); // file object
      formPayload.append("motivation", formData.motivation);
      formPayload.append("jobId", job.id);
      formPayload.append("jobTitle", job.title);

      const res = await fetch(GETFORM_URL, {
        method: "POST",
        body: formPayload,
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          linkedin: "",
          interest: "",
          resume: "",
          motivation: "",
        });
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Error submitting the form.");
    } finally {
      setSubmitting(false);
    }
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
      <p style={{ fontSize: "16px", color: "#777" }}>Company: {job.company}</p>
      <p style={{ fontSize: "16px", color: "#777" }}>
        Location: {job.location}
      </p>
      <p style={{ fontSize: "16px", color: "#777" }}>
        Experience: {job.experience}
      </p>
      <p style={{ fontSize: "16px", color: "#777", marginBottom: "20px" }}>
        Salary: {job.salary}
      </p>

      {/* Job Sections */}
      {[
        ["About the Role", job.description],
        ["Key Responsibilities", job.responsibilities],
        ["Minimum Requirements", job.required],
        ["Preferred Qualifications", job.preferred],
        ["What We Offer", job.offer],
      ].map(([title, items]) => (
        <div key={title} style={sectionStyle}>
          <div style={titleStyle}>{title}</div>
          <ul style={listStyle}>
            {items.map((item, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

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
      {/* 
      <div style={sectionStyle}>
        <div style={titleStyle}>Evaluation Criteria</div>
        <ul style={listStyle}>
          {job.evaluation.map((item, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <strong>{item.criteria}</strong> ({item.weight}): {item.indicator}
            </li>
          ))}
        </ul>
      </div> */}

      <div style={sectionStyle}>
        <div style={titleStyle}>How to Apply</div>
        <p style={{ marginTop: "10px" }}>{job.howToApply}</p>
      </div>

      {/* Application Form */}
      <div style={sectionStyle}>
        <div style={titleStyle}>Or Apply via Form</div>

        {submitted ? (
          <p style={{ color: "green", marginTop: "20px" }}>
            ✅ Application submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label>Name:</label>
              <br />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>LinkedIn Profile:</label>
              <br />
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Area of Interest:</label>
              <br />
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              >
                <option value="">Select</option>
                <option value="Product">Product</option>
                <option value="Marketing">Marketing</option>
                <option value="Creative">Creative</option>
                <option value="Ops">Ops</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Upload Resume:</label>
              <br />
              <input
                type="file"
                name="resume"
                required
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    resume: e.target.files[0],
                  }))
                }
                style={{ width: "100%", padding: "8px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Why do you want to join Nuvia?</label>
              <br />
              <textarea
                name="motivation"
                rows="4"
                value={formData.motivation}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              ></textarea>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: "10px 20px",
                backgroundColor: "#222",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {submitting ? "Submitting..." : "Send Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CareerDetail;
