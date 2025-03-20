import React from "react";
import SingleTeamV2 from "./SingleTeamV2";
import TeamV2Data from "../../jsonData/TeamV2Data.json";
import { motion } from "framer-motion";

const TeamV2 = ({ bgColor }) => {
  return (
    <>
      <div
        className={`${
          bgColor ? bgColor : ""
        } team-style-two-area default-padding-top pb-70 pb-xs-0`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-12">
              <div className="site-heading">
                <h5 className="sub-title">Team members</h5>
                <h2 className="title">
                  Our professional <br /> expert team members
                </h2>
              </div>
            </div>
            {TeamV2Data.slice(0, 5).map((team) => (
              <motion.div
                className="col-xl-3 col-lg-4 col-md-6 mb-50"
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: parseFloat(team.animationDelay) / 1000,
                }}
              >
                <SingleTeamV2 team={team} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamV2;
