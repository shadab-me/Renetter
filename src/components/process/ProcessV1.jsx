import React from "react";
import ProcessV1Data from "../../jsonData/ProcessV1Data.json";
import SingleProcessV1 from "./SingleProcessV1";

const ProcessV1 = ({ processClass }) => {
  return (
    <>
      <div
        className={`process-style-one-area text-center default-padding-bottom ${processClass}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Our Development Process</h5>
                <h2 className="title">
                  Structured Approach <br /> To Software Development
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {ProcessV1Data.map((process) => (
              <div
                className="col-xl-3 col-lg-6 process-style-one"
                key={process.id}
              >
                <SingleProcessV1 process={process} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessV1;
