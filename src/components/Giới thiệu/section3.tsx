import { Typography, Divider, Space } from "antd";
import "../../styles/style.css";
import "../../styles/Giới thiệu/section3.css";
// import { useTranslation } from "react-i18next";

const { Title, Text, Paragraph } = Typography;

const Section3: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <section className="container" style={{ textAlign: "left" }}>
      <Title level={2} className="main-color-red-title-1">
        DỰ ÁN TIÊU BIỂU
      </Title>

      <Title level={3} className="main-color-red-title-2">
        Lĩnh vực công nghệ thông tin
      </Title>
      <Space direction="vertical" size={1} style={{ width: "100%" }}>
        <Paragraph className="tight-paragraph">
          - Cung cấp trang bị truyền dẫn quang và đồng bộ cho Bộ Tư lệnh thông
          tin liên lạc, Bộ Quốc phòng;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Cung cấp, lắp đặt thiết bị truyền dẫn cho 08 Công an các tỉnh thành
          phía Nam;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Cung cấp thiết bị mạng lõi cho 03 trung tâm vùng mạng máy tính diện
          rộng ngành Công an phục vụ.
        </Paragraph>
      </Space>

      <Title level={3} className="main-color-red-title-2">
        Lĩnh vực kiểm soát an ninh
      </Title>
      <Space direction="vertical" size={1} style={{ width: "100%" }}>
        <Paragraph className="tight-paragraph">
          - Thi công lắp đặt hệ thống KSAN tại 28 cơ sở giam giữ trong CAND;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Cung cấp, lắp đặt thiết bị hệ thống camera cho 04 phân trại của Cục
          C10, Bộ Công an;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Cung cấp hệ thống hội nghị truyền hình trực tuyến đến Công an cấp
          huyện và nâng cấp trang thiết bị tại TTTTCH Công an tỉnh Thanh Hóa;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Cung cấp, lắp đặt thiết bị cho dự án Hiện đại hóa hệ thống camera
          giám sát an ninh trật tự - giao thông tại Công an tỉnh Quảng Nam;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Nâng cấp, mở rộng hệ thống kiểm soát an ninh cho các Trại tạm giam
          và nhà tạm giữ trọng điểm Công an tỉnh Nghệ An;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Cung cấp, lắp đặt hệ thống camera kiểm soát an ninh cho Công an tỉnh
          Bắc Giang;
        </Paragraph>
        <Paragraph className="tight-paragraph">
          - Thi công và lắp đặt hệ thống camera giám sát an ninh và hệ thống
          chống sét cho nhà tạm giữ Công an Thủ Dầu Một, Bình Dương.
        </Paragraph>
      </Space>
    </section>
  );
};

export default Section3;
