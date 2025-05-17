import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Giới thiệu";
import News from "./pages/Tin tức";
import Sever from "./pages/Sản phẩm máy chủ";
import ProductDetail from "./pages/Chi tiết sản phẩm";
import NewsDetail from "./pages/Chi tiết tin tức";
import Careers from "./pages/Tuyển dụng";
import JobDetails from "./pages/Chi tiết tuyển dụng";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/may-chu" element={<Sever />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/tin-tuc/:id" element={<NewsDetail />} />
        <Route path="/tuyen-dung" element={<Careers />} />
        <Route path="/tuyen-dung/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
