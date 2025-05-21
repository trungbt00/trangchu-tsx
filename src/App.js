import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Giới thiệu";
import InternalNews from "./pages/Tin tức/Tin tức nội bộ";
import TechNews from "./pages/Tin tức/Tin tức công nghệ";
import Sever from "./pages/Sản phẩm/Sản phẩm máy chủ";
import ProductDetail from "./pages/Sản phẩm/Chi tiết sản phẩm";
import InternalNewsDetail from "./pages/Tin tức/Chi tiết tin tức nội bộ";
import TechNewsDetail from "./pages/Tin tức/Chi tiết tin tức công nghệ";
import Careers from "./pages/Tuyển dụng/Tuyển dụng";
import JobDetails from "./pages/Tuyển dụng/Chi tiết tuyển dụng";
import Contact from "./pages/Liên hệ";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/may-chu" element={<Sever />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
        <Route path="/tin-tuc/noi-bo" element={<InternalNews />} />
        <Route path="/tin-tuc/cong-nghe" element={<TechNews />} />
        <Route path="/tin-tuc/noi-bo/:id" element={<InternalNewsDetail />} />
        <Route path="/tin-tuc/cong-nghe/:id" element={<TechNewsDetail />} />
        <Route path="/tuyen-dung" element={<Careers />} />
        <Route path="/tuyen-dung/:id" element={<JobDetails />} />
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
