import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, DashboardDojang, AjukanUKTPage, AjukanSuccessPage, DashboardKabupaten, DetailUkt, DetailPengajuanUktKabupaten, AjukanSuccessKabupatenPage, DashboardPusat, DetailLaporanUKTPusat, LaporanSuccessPusat, AjukanLaporanDojang, SuccessLaporanDojang } from "./Pages";
import DetailLaporanPusat from "./Pages/Pusat/DetailLaporanPusat";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Pusat */}
          <Route path="/dashboardpusat" element={<DashboardPusat />} />
          <Route path="/laporanUKTGeup" element={<DetailLaporanPusat />} />
          <Route path="/laporanUKTGeup/detail-laporan" element={<DetailLaporanUKTPusat />} />
          <Route path="/laporanUKTGeup/success" element={<LaporanSuccessPusat />} />
          {/* Dojang */}
          <Route path="/dashboardDojang" element={<DashboardDojang />} />
          <Route path="/ajukanUKT" element={<AjukanUKTPage />} />
          <Route path="/ajukanUKT/success" element={<AjukanSuccessPage />} />
          <Route path="/ajukanLaporanDojang" element={<AjukanLaporanDojang />} />
          <Route path="/ajukanLaporanDojang/success" element={<SuccessLaporanDojang />} />
          {/* Kabupaten */}
          <Route path="/dashboardKabupaten" element={<DashboardKabupaten />} />
          <Route path="/detailUkt" element={<DetailUkt />} />
          <Route path="/detail-pengajuan" element={<DetailPengajuanUktKabupaten />} />
          <Route path="/ajukanUKT/successKabupaten" element={<AjukanSuccessKabupatenPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
