import "../../styles/style.css";
import "../../styles/Liên hệ/Contact.css";
import { useTranslation } from "react-i18next";
import { Form, Input, Button, Row, Col } from "antd";

const Contact: React.FC = () => {
  const { i18n } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="contact-container">
      <div className="container">
        <h2 className="lien-he">{i18n.t("contact")}:</h2>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={10} xl={8}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={i18n.t("name")}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: i18n.t("enter-your-name") as string,
                      },
                    ]}
                  >
                    <Input placeholder={i18n.t("enter-your-name") as string} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label={i18n.t("phone")}
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: i18n.t("enter-your-phone") as string,
                      },
                    ]}
                  >
                    <Input placeholder={i18n.t("enter-your-phone") as string} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: i18n.t("enter-your-email") as string,
                  },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input placeholder={i18n.t("enter-your-email") as string} />
              </Form.Item>
              <Form.Item
                label={i18n.t("message")}
                name="message"
                rules={[
                  {
                    required: true,
                    message: i18n.t("enter-your-message") as string,
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder={i18n.t("enter-your-message") as string}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    textTransform: "uppercase",
                    backgroundColor: "rgb(171, 45, 46)",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    padding: "6px 32px",
                  }}
                >
                  {i18n.t("send")}
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
