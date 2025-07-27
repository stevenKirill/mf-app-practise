import React from "react";
import ReactDOM from "react-dom";
import ProductLayout from "./components/ProductLayout";
import ErrorBoundary from "./utils/ErrorBoundary";
import "./index.scss";
import "remixicon/fonts/remixicon.css";

const App = () => (
  <ErrorBoundary>
    <ProductLayout />
  </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
