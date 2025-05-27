import React from "react";
import Header from "../../components/Header";
import JobDetails from "../../components/Tuyển dụng/JobDetails";
import JobDetailsBanner from "../../components/Tuyển dụng/JobDetailsBanner";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const JobsDetail: React.FC = () => {
  return (
    <>
      <Header />
      <JobDetailsBanner />
      <JobDetails />
      <Footer />
    </>
  );
};

export default JobsDetail;
