import "./App.css";
import React from "react";
import Router from "./router";

import PageLayout from "./Layout/PageLayout";

function App() {
  return (
    <>
      <PageLayout>
        <Router />
      </PageLayout>
    </>
  );
}

export default App;
