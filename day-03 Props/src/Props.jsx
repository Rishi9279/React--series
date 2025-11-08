import React from "react";

const Props = ({ card1 }) => {
  return (
    <div className="card">
      <img src={card1.img} alt="" style={{
         width: "150px",
          height: "150px",
           objectFit: "cover",
            borderRadius: "50%",
         }} />
      <h2>{card1.name}</h2>
      <h2>{card1.age}</h2>
    </div>
  );
};

export default Props;
