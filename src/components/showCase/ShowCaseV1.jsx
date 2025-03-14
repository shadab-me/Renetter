import React from "react";
import SingleShowV1Data from "../../jsonData/SingleShowV1Data.json";
import SingleServiceV4 from "./SingleShowCaseV1";
import ShowCaseProgress from "./ShowCaseProgress";
import ShowCaseData from "../../jsonData/ShowCaseData.json";

const ShowCaseV1 = () => {
  return (
    <>
      <div className="service-range-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <h4 className="sub-title">Our Services</h4>
              <h2 className="title mb-30">
                Comprehensive <br /> AI-Powered Solutions
              </h2>
              <p>
                At Renetter, we integrate cutting-edge AI technology into
                everything we do, creating digital solutions that are smarter,
                faster, and more intuitive. Our comprehensive suite of services
                is designed to transform your digital presence.
              </p>
              <ul className="list-double mt-40">
                {SingleShowV1Data.map((service) => (
                  <SingleServiceV4 service={service} key={service.id} />
                ))}
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-1">
              <div className="seo-progress text-center">
                <div className="circle-progress">
                  {ShowCaseData.map((progress) => (
                    <ShowCaseProgress progress={progress} key={progress.id} />
                  ))}
                </div>
                <div className="seo-progess-items">
                  <div className="process-item">
                    <h5>AI Performance</h5>
                    <p>Benchmark Comparisons</p>
                  </div>
                  <div className="process-item">
                    <h5>Innovation Edge</h5>
                    <p>Above Industry Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCaseV1;
