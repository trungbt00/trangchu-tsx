import React, { useEffect, useState } from "react";
import "../../styles/style.css";
import "../../styles/Tuyển dụng/careers.css";
import { useTranslation } from "react-i18next";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  if (!jobs) return <div>{i18n.t("loading")}</div>;

  return (
    <div className="container">
      <h2 className="job-heading">{i18n.t("recruitment")}</h2>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-12">
              <a
                href={`/tuyen-dung/${job.id}`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <div className="job-title">{job.title}</div>{" "}
              </a>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-12">
              <p style={{ color: "#484e56" }}>
                <strong>{i18n.t("location")}:</strong> {job.address}
              </p>
              <p style={{ color: "#484e56" }}>
                <strong>{i18n.t("deadline")}: </strong> {job.deadline}
              </p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12">
              <p style={{ color: "#484e56" }}>
                <strong>{i18n.t("salary")}:</strong> {job.salary}
              </p>
              <p style={{ color: "#484e56" }}>
                <strong>{i18n.t("number")}: </strong> {job.number}
              </p>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12 job-button-col">
              <a href={`/tuyen-dung/${job.id}`} className="apply-button">
                {i18n.t("apply")}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
