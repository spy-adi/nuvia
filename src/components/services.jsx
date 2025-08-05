import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <h3>Nature-powered skincare made for real results</h3>
          <p>
            Discover our six signature collections — each crafted with clean
            ingredients, purposeful actives, and a glow-first mindset.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>
                      <b>{d.heading}</b>
                    </p>
                    <p>{d.details}</p>
                    <p style={{ fontStyle: "italic" }}>{d.comment}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
