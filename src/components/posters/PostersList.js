import React from "react";
import Poster from "./Poster";

const Posters = (props) => {

  return (
    <div className="row">
      {props.posters.map((poster) => (
        <div className="col-9 mx-auto col-sm-6 col-md-4 col-lg-3 mb-3" key={poster.id}>
          <Poster poster={poster} />
        </div>
      ))}
    </div>
  );
};

export default Posters;
