import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import { useTranslation } from "react-i18next";
import "../../styles/style.css";
import "../../styles/Tuyển dụng/careers.css";

const { Title, Paragraph, Text } = Typography;

interface Job {
  id: string;
  title: string;
  address: string;
  deadline: string;
  salary: string;
  number: string | number;
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => setJobs(data))
      .catch((err) => console.error("Lỗi tải danh sách công việc:", err));
  }, []);

  if (!jobs.length) return <div>{i18n.t("loading") as string}</div>;

  return (
    <div className="container">
      <Title level={2} className="job-heading">
        {i18n.t("recruitment") as string}
      </Title>

      {jobs.map((job) => (
        <Card
          key={job.id}
          className="job-card"
          style={{ marginBottom: 24 }}
          bodyStyle={{ padding: 0 }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24} lg={6}>
              <a
                href={`/tuyen-dung/${job.id}`}
                style={{ textDecoration: "none" }}
              >
                <Text strong className="job-title">
                  {job.title}
                </Text>
              </a>
            </Col>

            <Col xs={24} md={12} lg={10}>
              <Paragraph style={{ marginBottom: 8 }}>
                <Text strong>{i18n.t("location") as string}: </Text>{" "}
                {job.address}
              </Paragraph>
              <Paragraph>
                <Text strong>{i18n.t("deadline") as string}: </Text>{" "}
                {job.deadline}
              </Paragraph>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <Paragraph style={{ marginBottom: 8 }}>
                <Text strong>{i18n.t("salary") as string}: </Text> {job.salary}
              </Paragraph>
              <Paragraph>
                <Text strong>{i18n.t("number") as string}: </Text> {job.number}
              </Paragraph>
            </Col>

            <Col xs={24} md={24} lg={2} className="job-button-col">
              <a href={`/tuyen-dung/${job.id}`}>
                <Button type="primary" className="apply-button" block>
                  {i18n.t("apply") as string}
                </Button>
              </a>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default JobList;
