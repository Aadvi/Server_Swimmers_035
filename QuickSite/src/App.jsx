import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/editor/:pageId" Component={Editor} />
      </Routes>
    </Router>
  );
}

export default App;
