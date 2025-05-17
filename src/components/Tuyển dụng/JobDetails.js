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
    <section class="career_detail_content">
      <div className="jobs-img">
        <img
          className="jobs-img"
          src={jobs.img}
          alt="jobs-img"
          loading="lazy"
        />
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <h4 className="description-title">{i18n.t("jd")}</h4>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: jobs.description }}
          />
          <hr></hr>
          <div class="career_line"></div>
          <h4 className="description-title">{i18n.t("requirements")}</h4>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: jobs.requirements }}
          />
          <hr></hr>
          <div class="career_line"></div>
          <h4 className="description-title">{i18n.t("benefits")}</h4>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: jobs.benefits }}
          />
          <hr></hr>
          <div class="career_line"></div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 ">
          <div class="jobs-note">
            <p className="jobs-note-title">{i18n.t("experience")}</p>
            <p className="jobs-note-content">{jobs.exp}</p>
            <p className="jobs-note-title">{i18n.t("number")}</p>
            <p className="jobs-note-content">{jobs.number}</p>
            <p className="jobs-note-title">{i18n.t("deadline")}</p>
            <p className="jobs-note-content">{jobs.deadline}</p>
            <p className="jobs-note-title">{i18n.t("location")}</p>
            <p className="jobs-note-content">{jobs.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
