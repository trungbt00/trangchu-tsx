import { React } from "react";
import "../../styles/style.css";
import "../../styles/Tuyển dụng/careers.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NewsDetail() {
  const { id } = useParams();
  const [jobs, setJobs] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setJobs(found);
      });
  }, [id]);

  if (!jobs) return <div>{i18n.t("loading")}</div>;

  return (
    <section className="background-container">
      <div className="jobs-container">
        <h2 className="job-title">{jobs.title}</h2>
        <div className="row">
          <div class="col-lg-5 col-md-5 col-sm-5">
            <p className="job-detail">
              {i18n.t("location")}: {jobs.address}
            </p>
            <p className="job-detail">
              {i18n.t("salary")}: {jobs.salary}
            </p>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7">
            <p className="job-detail">
              {i18n.t("deadline")}: {jobs.deadline}
            </p>
            <p className="job-detail">
              {i18n.t("number")}: {jobs.number}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
