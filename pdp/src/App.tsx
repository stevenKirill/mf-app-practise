import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./utils/ErrorBoundary";
import "./index.scss";
import "remixicon/fonts/remixicon.css";

const App = () => (
  <ErrorBoundary>
    <Layout />
  </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
