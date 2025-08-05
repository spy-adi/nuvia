import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {/* <img src="img/about.jpg" className="img-responsive" alt="" />{" "} */}
            {/* About US */}
            {/* <h2>About Us</h2>
              <p>{props.data ? props.data.us : "loading..."}</p>
               */}
            {/* About VAEV */}
            <h2>About NUVIA</h2>
            <p>{props.data ? props.data.vaev : "loading..."}</p>
            {/* Why did we build this */}
            <h3>Why did we build this?</h3>
            <p>{props.data ? props.data.whyBuild : "loading..."}</p>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text p-3">
              {/* Who is this for */}
              <h3>Who is this for?</h3>
              <div className="list-style">
                <div className="">
                  <ul>
                    {props.data
                      ? props.data.forWhom.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>

              {/* why choose us */}
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="">
                  <ul>
                    {props.data
                      ? props.data.why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>

              {/* What can you do on US D2C Starter Pack?  */}
              <h3>What can you do on US D2C Starter Pack? </h3>
              <div className="list-style">
                <div className="">
                  <ul>
                    {props.data
                      ? props.data.whatCanBeDone.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
