import React, { createContext } from "react";
import Child from "./Child";

export const AppContext = createContext();

const App = () => {
  const user = {
    name: "김채원",
    job: "가수",
  };
  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <Child />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
