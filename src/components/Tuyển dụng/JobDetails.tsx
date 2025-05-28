import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography, Image, Divider, Card } from "antd";
import "../../styles/style.css";
import "../../styles/Tuyển dụng/careers.css";

const { Title, Paragraph } = Typography;

interface Job {
  id: string;
  img: string;
  description: string;
  requirements: string;
  benefits: string;
  exp: string;
  number: string | number;
  deadline: string;
  address: string;
}

const JobsDetail: React.FC = () => {
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

  if (!job) return <div>{i18n.t("loading") as string}</div>;

  return (
    <section className="career_detail_content">
      <Image
        src={job.img}
        alt="jobs-img"
        width="100%"
        style={{ marginBottom: 40 }}
        preview={false}
      />

      <Row gutter={[32, 32]}>
        <Col xs={24} md={16}>
          <Title level={4} className="description-title">
            {i18n.t("jd") as string}
          </Title>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <Divider />

          <Title level={4} className="description-title">
            {i18n.t("requirements") as string}
          </Title>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: job.requirements }}
          />
          <Divider />

          <Title level={4} className="description-title">
            {i18n.t("benefits") as string}
          </Title>
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: job.benefits }}
          />
          <Divider />
        </Col>

        <Col xs={24} md={8}>
          <Card
            bordered
            style={{ backgroundColor: "#f7fdff", borderColor: "#7bdbf8" }}
          >
            <Paragraph className="jobs-note-title">
              {i18n.t("experience") as string}
            </Paragraph>
            <Paragraph className="jobs-note-content">{job.exp}</Paragraph>

            <Paragraph className="jobs-note-title">
              {i18n.t("number") as string}
            </Paragraph>
            <Paragraph className="jobs-note-content">{job.number}</Paragraph>

            <Paragraph className="jobs-note-title">
              {i18n.t("deadline") as string}
            </Paragraph>
            <Paragraph className="jobs-note-content">{job.deadline}</Paragraph>

            <Paragraph className="jobs-note-title">
              {i18n.t("location") as string}
            </Paragraph>
            <Paragraph className="jobs-note-content">{job.address}</Paragraph>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default JobsDetail;
