import { TeamMember } from "./teamMember";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            At Nuvia, our passion for skin wellness runs deep and it starts with
            the people behind the brand. Each member of our team brings a unique
            glow, blending science, creativity, and care to craft skincare that
            truly works.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <TeamMember key={`${d.name}-${i}`} d={d} />
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
