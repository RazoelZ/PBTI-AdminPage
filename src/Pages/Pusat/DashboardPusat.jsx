import { useState } from "react";
import { JadwalComponent, NavbarComponent, SideBar } from "../../Components";
import { checkup, uktgeup } from "../../utils/ImageHelper";
import { useNavigate } from "react-router-dom";
import PengajuanUKTGeupData from "../../@fake-db/PengajuanUKTGeupData";
/**
 * DashboardPusat Component
 * This component renders the admin dashboard page, which includes various sections
 * such as account info, upcoming schedules, statistics, athlete membership list,
 * exam list, events, and exam-related information.
 */
const DashboardPusat = () => {
    const [isOpen, setIsOpen] = useState(true);

    /**
     * Toggles the sidebar open/close state.
     */
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    // Hook to navigate programmatically
    const navigateTo = useNavigate();

    const gotoLaporanUKT = () => {
        navigateTo("/laporanUKTGeup");
    }

    // sum belom disetujui ukt geup
    const sumBelumDisetujui = PengajuanUKTGeupData.filter((item) => item.status === 1).length;

    return (
        <>
            {/* Navbar Component */}
            <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Pusat"} navigate={"/dashboardpusat"} />
            <div className="flex w-full">
                {/* Sidebar Component */}
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full h-screen bg-[#F5F5F5] p-5 flex flex-col md:flex-row md:space-x-5">
                    {/* Right Column: Main Content */}
                    <div className="w-full md:w-3/4">
                        {/* Ex  am Information Section */}
                        <div>
                            <h1 className="font-semibold text-2xl mb-5">
                                Perihal Ujian
                            </h1>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <div className="flex flex-col space-y-2 p-4 bg-white">
                                    <div className="flex justify-between items-center">
                                        <img src={uktgeup} alt="Event" className="w-12" />
                                        <div>
                                            <span className="text-xs bg-[#FFF5D1] text-[#7C6104] border-2 border-[#DED09E] rounded-md p-1 font-bold md:p-3">
                                                Perlu Persetujuan: {sumBelumDisetujui}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-grow items-center">
                                        <h1 className="text-xl font-bold">
                                            Ujian Kenaikan Tingkat (UKT) Geup
                                        </h1>
                                    </div>
                                    <p className="text-[#B2B9C3] text-xs md:text-base">
                                        UKT ini untuk Geup 10 hingga 1 yang dapat Anda ajukan dan laksanakan di Dojang Anda.
                                    </p>
                                    <div className="font-semibold mt-20 md:mt-0">
                                        <button
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                        >
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 p-4 bg-white">
                                    <div className="flex justify-between items-center">
                                        <img src={checkup} alt="Event" className="w-12" />
                                        <div>
                                            <span className="text-xs bg-[#FFF5D1] text-[#7C6104] border-2 border-[#DED09E] rounded-md p-1 font-bold md:p-3">
                                                Perlu Persetujuan: {sumBelumDisetujui}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-grow items-center">
                                        <h1 className="text-xl font-bold">
                                            Laporan Pelaksanaan UKT
                                        </h1>
                                    </div>
                                    <p className="text-[#B2B9C3] text-xs md:text-base">
                                        Setelah Dojang Anda melaksanankan UKT, lakukan laporan untuk mendapatkan sertifikat kenaikan tingkat.
                                    </p>
                                    <div className="font-semibold mt-20 md:mt-0">
                                        <button
                                            onClick={gotoLaporanUKT}
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                        >
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Upcoming Schedules Section for Mobile */}
                        <div className="md:hidden">
                            <h1 className="font-semibold text-2xl mb-5 mt-10">
                                Jadwal yang akan datang
                            </h1>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <JadwalComponent status={1} judul={"Pertemuan Asosiasi Nasional"} waktu={"Senin, 20 September 2021"} lokasi={"Dojang Bagus Sacti Club, Jakarta"} />
                                <JadwalComponent status={2} judul={"Ujian Kenaikan Tingkat (UKT) Geup"} waktu={"Senin, 20 September 2021"} lokasi={"Dojang Bagus Sacti Club, Jakarta"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPusat;
