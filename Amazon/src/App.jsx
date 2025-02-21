import React from "react";
import AmazonHeader from "./AmazonHeader";
import AmazonNav from "./AmazonNav";
import AmazonCategoryNav from "./AmazonCategoryNav";
import Body from "./Body";
import InfoSection from "./InfoSection";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <AmazonHeader></AmazonHeader>
      <AmazonNav></AmazonNav>
      <AmazonCategoryNav />
      <Body></Body>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </>
  );
};

export default App;
