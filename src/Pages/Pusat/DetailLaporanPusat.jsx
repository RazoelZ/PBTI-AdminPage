import { useState } from "react";
import { NavbarComponent, SideBar, UKTCardPusat } from "../../Components";
import PengajuanUKTGeupData from "../../@fake-db/PengajuanUKTGeupData";

const DetailLaporanPusat = () => {
    const [isOpen, setIsOpen] = useState(true);

    const databelumdisetujui = PengajuanUKTGeupData.filter((item) => item.status === 1);
    const datasudahdisetujui = PengajuanUKTGeupData.filter((item) => item.status === 2);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };


    const [activeTab, setActiveTab] = useState("perluPersetujuan");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Pusat"} navigate={"/dashboardpusat"} />
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <div className="bg-white p-5 rounded-md">

                        {/* Tabs */}
                        <div className="flex space-x-4 border-b w-full">
                            <button
                                className={`py-2 px-4 w-full ${activeTab === "perluPersetujuan" ? "border-b-2 border-black font-semibold" : ""}`}
                                onClick={() => handleTabChange("perluPersetujuan")}
                            >
                                Laporan perlu Persetujuan
                            </button>
                            <button
                                className={`py-2 px-4 w-full ${activeTab === "sudahDisetujui" ? "border-b-2 border-black font-semibold" : ""}`}
                                onClick={() => handleTabChange("sudahDisetujui")}
                            >
                                Laporan Sudah Disetujui
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-4">
                            {activeTab === "perluPersetujuan" && (
                                <>
                                    {databelumdisetujui.map(item => (
                                        <UKTCardPusat
                                            key={item.id}
                                            cabangdojang={item.cabangdojang}
                                            nomorPengajuan={item.nomorPengajuan}
                                            lokasiUjian={item.lokasiUjian}
                                            tanggalPelaksanaan={item.tanggalPelaksanaan}
                                        />
                                    ))}
                                </>
                            )}
                            {activeTab === "sudahDisetujui" && (
                                <>
                                    {datasudahdisetujui.map(item => (
                                        <UKTCardPusat
                                            key={item.id}
                                            cabangdojang={item.cabangdojang}
                                            nomorPengajuan={item.nomorPengajuan}
                                            lokasiUjian={item.lokasiUjian}
                                            tanggalPelaksanaan={item.tanggalPelaksanaan}
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailLaporanPusat;
