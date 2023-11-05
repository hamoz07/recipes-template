import React from "react";
import Headline from "./headline";
import VisitBtn from "./VisitBtn";
import { useRef } from "react";

const Subscribe = () => {
  const subref = useRef();

  return (
    <div className="moresection subscribe">
      <div className="container">
        <Headline
          headline={`Hurry up! Subscribe our newsletter and get 25% Off`}
          desc="Limited time offer for this month. No credit card required."
          pitem={true}
        />
        <div className="form">
          <div className="col-md-8">
            <input type="email" ref={subref} placeholder="Enter Email here" />
          </div>
          <button
            onClick={() => (subref.current.value = "")}
            className="visit-link"
          >
            {"Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
