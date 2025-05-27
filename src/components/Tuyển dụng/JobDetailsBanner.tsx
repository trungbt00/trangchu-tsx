import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography } from "antd";
import "../../styles/style.css";
import "../../styles/Tuyển dụng/careers.css";

const { Title, Paragraph, Text } = Typography;

interface Job {
  id: string;
  title: string;
  address: string;
  salary: string;
  deadline: string;
  number: string | number;
}

const JobsDetailBanner: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => {
        const found = data.find((p) => p.id === id);
        setJob(found || null);
      })
      .catch((err) => console.error("Lỗi tải chi tiết công việc:", err));
  }, [id]);

  if (!job) return <div>{i18n.t("loading")}</div>;

  return (
    <section className="background-container">
      <div className="jobs-container">
        <Title level={2} className="job-title-banner">
          {job.title}
        </Title>

        <Row gutter={[16, 8]} style={{ textAlign: "left" }}>
          <Col xs={24} md={12}>
            <Paragraph className="job-detail" style={{ color: "#ffffff" }}>
              <Text strong style={{ color: "#ffffff" }}>
                {i18n.t("location")}:
              </Text>{" "}
              {job.address}
            </Paragraph>
            <Paragraph className="job-detail" style={{ color: "#ffffff" }}>
              <Text strong style={{ color: "#ffffff" }}>
                {i18n.t("salary")}:
              </Text>{" "}
              {job.salary}
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Paragraph className="job-detail" style={{ color: "#ffffff" }}>
              <Text strong style={{ color: "#ffffff" }}>
                {i18n.t("deadline")}:
              </Text>{" "}
              {job.deadline}
            </Paragraph>
            <Paragraph className="job-detail" style={{ color: "#ffffff" }}>
              <Text strong style={{ color: "#ffffff" }}>
                {i18n.t("number")}:
              </Text>{" "}
              {job.number}
            </Paragraph>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default JobsDetailBanner;
