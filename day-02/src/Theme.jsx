import React from "react";
import { useState } from "react";

const Theme = () => {
  const [change, setChange] = useState(false);
  return (
    <div className={change? "dark":"light"} >
    
      <button onClick={()=>{setChange(!change)}}>toggle</button>
    </div>
  );
};

export default Theme;
