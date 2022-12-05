import React from "react";

import { Outlet } from "react-router-dom";
import data from "../Asset/data.json";

const Data = () => {
  return (
    <div>
      <Outlet context={data} />
    </div>
  );
};

export default Data;
