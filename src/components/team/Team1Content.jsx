import React from "react";
import TeamV2Data from "../../jsonData/TeamV2Data.json";
import { motion } from "framer-motion";
import SingleTeamV2 from "./SingleTeamV2";

const Team1Content = () => {
  return (
    <>
      <div className="team-style-two-area default-padding-top pb-70 pb-xs-0">
        <div className="container">
          <div className="row align-center">
            {TeamV2Data.map((team) => (
              <motion.div
                className="col-lg-4 col-md-6 mb-50"
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

export default Team1Content;
