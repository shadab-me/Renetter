import React from "react";
import AchievementV1Data from "../../jsonData/AchievementV1Data.json";
import SingleAchievementV1 from "./SingleAchievement";

const WhyChooseUsV1 = ({ chooseClass }) => {
  return (
    <>
      <div
        className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5">
              <div
                className="achivement-counter"
                style={{ backgroundImage: "url(img/shape/banner-4.png)" }}
              >
                <div className="shape-animated-left-bottom">
                  <img src="img/shape/11.png" alt="shape" />
                </div>
                <ul>
                  {AchievementV1Data.map((achievement) => (
                    <SingleAchievementV1
                      achievement={achievement}
                      key={achievement.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
              <div className="choose-us-card">
                <h4 className="sub-title">Our Approach</h4>
                <h2 className="title">
                  Why Clients Choose <br /> Our Development Services
                </h2>
                <p>
                  We combine technical expertise with a deep understanding of
                  business needs to deliver robust, scalable, and maintainable
                  software solutions. Our development approach focuses on
                  quality, collaboration, and long-term value.
                </p>
                <ul className="list-check">
                  <li>Agile Development Methodology</li>
                  <li>Test-Driven Development Practices</li>
                  <li>Clean, Maintainable Code Architecture</li>
                  <li>Continuous Integration & Deployment</li>
                  <li>Regular Communication & Transparency</li>
                  <li>Long-term Support & Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV1;
