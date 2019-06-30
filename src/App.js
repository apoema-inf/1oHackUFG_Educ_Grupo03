import React from "react";

import Welcome from "./pages/Register";
import Start from "./pages/Start";
import Todo from "./pages/Todo";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Todo />
      {/* {<Start />} */}
    </div>
  );
}

export default App;
