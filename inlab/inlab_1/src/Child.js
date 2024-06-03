import React, { useContext } from "react";
import { AppContext } from "./App";

const Child = () => {
  const user = useContext(AppContext);
  return (
    <div>
      <h3>1.{user.name}</h3>
      <h3>2.{user.job}</h3>
    </div>
  );
};

export default Child;
