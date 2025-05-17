import "../../styles/style.css";
import "../../styles/Giới thiệu/section3.css";
import { useTranslation } from "react-i18next";

export default function Section3() {
  const { i18n } = useTranslation();
  return (
    <section className="container">
      <h2 class="title main-color-red">DỰ ÁN TIÊU BIỂU</h2>
      <div className="">
        <div class="main-color-red fw-bold py-3">
          Lĩnh vực công nghệ thông tin
        </div>
        <div class=" py-3">
          - Cung cấp trang bị truyền dẫn quang và đồng bộ cho Bộ Tư lệnh thông
          tin liên lạc, Bộ Quốc phòng;
          <br />
          - Cung cấp, lắp đặt thiết bị truyền dẫn cho 08 Công an các tỉnh thành
          phía Nam ;
          <br />
          - Cung cấp thiết bị mạng lõi cho 03 trung tâm vùng mạng máy tính diện
          rộng ngành Công an phục vụ.
          <br />
        </div>
        <div class="main-color-red fw-bold py-3">
          Lĩnh vực kiểm soát an ninh
        </div>
        <div class=" py-3">
          Thi công lắp đặt hệ thống KSAN tại 28 cơ sở giam giữ trong CAND;
          <br />
          - Cung cấp, lắp đặt thiết bị hệ thống camera cho 04 phân trại của Cục
          C10, Bộ Công an;
          <br />
          - Cung cấp hệ thống hội nghị truyền hình trực tuyến đến Công an cấp
          huyện và nâng cấp trang thiệt bị tại TTTTCH Công an tỉnh Thanh Hóa;
          <br />
          - Cung cấp, lắp đặt thiết bị cho dự án Hiện đại hóa hệ thống camera
          giám sát an ninh trật tự - giao thông trên địa bàn tỉnh của Công an
          tỉnh Quảng Nam;
          <br />
          - Nâng cấp, mở rộng hệ thống kiểm soát an ninh cho các Trại tạm giam
          và một số nhà tạm giữ trọng điểm Công an tỉnh Nghệ An;
          <br />
          - Cung cấp lắp đặt hệ thống camera kiểm soát an ninh cho Công an tỉnh
          Bắc Giang;
          <br />
          - Thi công và cung cấp lắp đặt hệ thống thiết bị camera giám sát an
          ninh và hệ thống chống sét cho nhà tạm giữ Công an Thủ Dầu Một, Công
          an tỉnh Bình Dương.
          <br />
        </div>
      </div>
    </section>
  );
}
