import { useTranslation } from "react-i18next";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import "../../styles/style.css";
import "../../styles/Liên hệ/Contact.css";

const { Title } = Typography;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="contact-container">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}>
        <Title level={2} className="lien-he">
          {t("contact")}:
        </Title>

        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
              style={{ textAlign: "left" }}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("name")}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: t("enter-your-name") as string,
                      },
                    ]}
                  >
                    <Input placeholder={t("enter-your-name") as string} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={t("phone")}
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: t("enter-your-phone") as string,
                      },
                    ]}
                  >
                    <Input placeholder={t("enter-your-phone") as string} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: t("enter-your-email") as string },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input placeholder={t("enter-your-email") as string} />
              </Form.Item>

              <Form.Item
                label={t("message")}
                name="message"
                rules={[
                  {
                    required: true,
                    message: t("enter-your-message") as string,
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder={t("enter-your-message") as string}
                />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary" className="submit-btn">
                  {t("send")}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
