import React, { createContext, useState } from "react";
import "./App.css";
import Child from "./childComponent";

export const MyContext = createContext();

function App() {
  const [blackCount, setCount] = useState(0);

	return (
		<div className="parent-container">
			<h2> Counter: {blackCount} </h2>
			<div className="parent">
        <MyContext.Provider value={{blackCount, setCount}}>
          <Child ></Child>
          <Child ></Child>
          <Child ></Child>
          <Child></Child>
        </MyContext.Provider>
			</div>
		</div>
	);
}


export default App;
