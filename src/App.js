import React, { useEffect } from "react";
import ConnectPage from "./Cmp/ConnectPage";
import BlobPage from "./Cmp/BlobPage";
import CompanyPage from "./Cmp/CompanyPage";
import Story from "./Cmp/StoryPage";
import NewsPage from "./Cmp/NewsPage";
import axios from "axios";

const App = () => {
  return (
    <>
      <Story />
      <CompanyPage />
      <NewsPage />
      <BlobPage />
      <ConnectPage />
    </>
  );
};

export default App;
