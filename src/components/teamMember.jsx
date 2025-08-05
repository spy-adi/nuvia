import React, { useState } from "react";

export const TeamMember = ({ d, limit = 100 }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const isLong = d.description.length > limit;
  const displayText =
    expanded || !isLong ? d.description : d.description.slice(0, limit) + "...";

  return (
    <div className="col-md-4 col-sm-6 team">
      <div className="thumbnail">
        <img src={d.img} alt="..." className="team-img" />
        <div className="caption">
          <h4>{d.name}</h4>
          <p>{d.job}</p>
          <p style={{ fontStyle: "italic" }}>{displayText}</p>
          {isLong && (
            <button
              onClick={toggleExpanded}
              style={{
                border: "none",
                background: "none",
                color: "blue",
                padding: 0,
                cursor: "pointer",
              }}
            >
              {expanded ? "Less" : "More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
