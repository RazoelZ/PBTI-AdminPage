import { useState } from "react";
import { HeaderComponents, NavbarComponent, SideBar } from "../../Components";
import { check } from "../../utils/ImageHelper";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * LaporanSuccessPusat component for displaying a successful application submission page.
 *
 * @component
 * @returns {JSX.Element} The rendered LaporanSuccessPusat component
 */
const LaporanSuccessPusat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { state } = useLocation();
    const { cabangdojang, nomorPengajuan } = state;
    /**
     * Toggles the sidebar visibility.
     */
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const gotoDashboard = () => {
        navigate("/dashboardpusat");
    };




    return (
        <>
            <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Pusat"} navigate={"/dashboardpusat"} />
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <div className="bg-white p-5 rounded-md flex flex-col justify-center items-center">
                        <img src="https://via.placeholder.com/150" alt="Mail man Success" className="h-44 w-36" />
                        <h1 className="text-xl font-bold mb-5 text-center md:text-3xl">Anda telah menyetujui Laporan UKT dari Dojang</h1>
                        <h3 className="text-center text-sm md:text-2xl">Pengurus PBTI <strong>Pusat</strong> telah menyetujui Laporan UKT dari <strong>{cabangdojang}</strong></h3>
                        <div className="w-full bg-white p-3 text-xs border-2 border-[#F5F5F5] rounded-md mt-5 md:text-lg">
                            <HeaderComponents title="Dojang" cabangdojang="BAGUS SACTI CLUB, JAKARTA    " />
                            <h1 className="text-[#B2B9C3] mt-4">
                                Nomor Pengajuan
                            </h1>
                            <h5 className="font-semibold mt-2">
                                {nomorPengajuan}
                            </h5>
                        </div>
                        <div className="w-full bg-white p-3 text-xs border-2 border-[#F5F5F5] rounded-md mt-5 md:text-lg">
                            <HeaderComponents title="Pusat" />
                            <div className="p-3 flex justify-between items-center bg-green-200 mt-5 rounded-md">
                                <img src={check} alt="icon check" />
                                <h5 className="text-green-500 font-bold ml-2">Disetujui PBTI <span>{cabangdojang}</span></h5>
                            </div>
                        </div>
                        <div className="bg-[#F7F8FA] p-3 text-xs border-2 border-[#F5F5F5] rounded-md mt-5 w-full">
                            <h4 className="font-bold text-sm mb-5 md:text-lg md:space-y-3">Pembayaran Pengajuan UKT <span className="italic">Geup</span></h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col justify-between  ">
                                    <label className="md:text-lg">
                                        Biaya
                                        <br />
                                        <span className="text-[8px] text-[#B2B9C3] md:text-base">(Jumlah Peserta Lulus x Rp100.000)</span>
                                    </label>
                                </div>
                                <div className="flex flex-col justify-between items-end">
                                    <h5 className="text-end md:text-lg">Rp5.002.500</h5>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <label className="md:text-lg">Status Pembayaran</label>
                                </div>
                                <div className="w-1/2 flex items-center bg-green-100 p-2 rounded-md justify-center ml-auto md:w-1/4">
                                    <h5 className="text-xs font-bold text-green-500 md:text-lg">Lunas</h5>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#F7F8FA] p-3 text-xs border-2 border-[#F5F5F5] rounded-md my-5  w-full md:text-lg">
                            <h4 className="font-bold text-sm mb-5 md:text-2xl">Status Pengajuan UKT <span className="italic">Geup</span></h4>
                            <div className="grid grid-cols-10 gap-1 ">
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" checked />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Pembuatan Pengajuan Ujian</p>
                                        <p className="text-[#B2B9C3]">Sabtu, 4 Mei 2024</p>
                                    </div>
                                </div>
                                <div className="col-span-10 border-l-[3px] border-black h-6 ml-2 md:ml-3"></div>
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" checked />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Telah Ditinjau dan Disetujui oleh PBTI Pusat</p>
                                        <p className="text-[#B2B9C3]">Sabtu, 4 Mei 2024</p>
                                    </div>
                                </div>
                                <div className="col-span-10 border-l-[3px] border-black h-6 ml-2 md:ml-3"></div>
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" checked />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Pembuatan Sertifikat Disetujui</p>
                                        <p className="text-[#B2B9C3]">Informasi persetujuan akan diberikan kepada Dojang untuk segera membuka pendaftaran.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-4 rounded-md hover:bg-white hover:text-black border border-black"
                            onClick={gotoDashboard}
                        >
                            Kembali ke Beranda
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default LaporanSuccessPusat;
