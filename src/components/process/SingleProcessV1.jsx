import React from "react";

const SingleProcessV1 = ({ process }) => {
  const { icon, number, title, description } = process;

  return (
    <>
      <div className="item">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="point">
          <span>{number}</span>
        </div>
        <h4>{title}</h4>
        {description && <p className="mt-3">{description}</p>}
      </div>
    </>
  );
};

export default SingleProcessV1;
