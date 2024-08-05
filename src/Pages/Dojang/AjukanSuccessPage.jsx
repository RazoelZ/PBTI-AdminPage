import { useState } from "react";
import { NavbarComponent, SideBar } from "../../Components";
import { mailman } from "../../utils/ImageHelper";
import { useNavigate } from "react-router-dom";

/**
 * AjukanSuccessPage component for displaying a successful application submission page.
 *
 * @component
 * @returns {JSX.Element} The rendered AjukanSuccessPage component
 */
const AjukanSuccessPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggles the sidebar visibility.
     */
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const gotoDashboard = () => {
        navigate("/dashboarddojang");
    };

    return (
        <>
            <div className="hidden md:block">
                <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Dojang"} subtitle={"BAGUS SACTI CLUB, JAKARTA"} navigate={"/dashboarddojang"} />
            </div>
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <div className="bg-white p-5 rounded-md flex flex-col justify-center items-center">
                        <img src={mailman} alt="Mail man Success" className="h-44 w-36" />
                        <h1 className="text-xl font-bold mb-5 text-center md:text-3xl">Pembuatan Pengajuan UKT Geup Berhasil!</h1>
                        <h3 className="text-center text-sm md:text-2xl">Anda perlu menunggu persetujuan dari kepengurusan Kabupaten atau Kota hingga Pusat. Anda dapat memantau prosesnya di halaman detail.</h3>
                        <div className="w-full bg-white p-3 text-xs border-2 border-[#F5F5F5] rounded-md mt-5 md:text-lg md:space-y-3">
                            <label className="text-[#B2B9C3]">
                                Nomor Pengajuan
                            </label>
                            <h5 className="font-bold">
                                UMUM/025/PBTI.025/V/2024
                            </h5>
                        </div>
                        <div className="bg-[#F7F8FA] p-3 text-xs border-2 border-[#F5F5F5] rounded-md mt-5 w-full">
                            <h4 className="font-bold text-sm mb-5 md:text-lg md:space-y-3">Pembayaran Pengajuan UKT <span className="italic">Geup</span></h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col justify-between ">
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
                                    <h5 className="text-[8px] font-bold text-green-500 md:text-lg">Lunas</h5>
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
                                <div className="col-span-10 border-l-[3px] border-[#B2B9C3] h-6 ml-2 md:ml-3"></div>
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Menunggu Persetujuan Pengurus Kabupaten/Kota</p>
                                        <p className="text-[#B2B9C3]">Sabtu, 4 Mei 2024</p>
                                    </div>
                                </div>
                                <div className="col-span-10 border-l-[3px] border-[#B2B9C3] h-6 ml-2 md:ml-3"></div>
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Menunggu Persetujuan Pengurus Provinsi</p>
                                        <p className="text-[#B2B9C3]">Sistem akan menginformasikan kepada PBTI Provinsi untuk meninjau dan menyetujui pengajuan.</p>
                                    </div>
                                </div>
                                <div className="col-span-10 border-l-[3px] border-[#B2B9C3] h-6 ml-2 md:ml-3"></div>
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Menunggu Persetujuan Pengurus Pusat</p>
                                    </div>
                                </div>
                                <div className="col-span-10 border-l-[3px] border-[#B2B9C3] h-6 ml-2 md:ml-3"></div>
                                <div className="col-span-1 flex items-center">
                                    <input type="checkbox" className="w-7 h-7 accent-black" />
                                </div>
                                <div className="col-span-9 ml-1 md:ml-0 text-xs md:text-base flex items-center">
                                    <div>
                                        <p className="font-semibold">Pengajuan Ujian Berhasil</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black border border-black"
                            onClick={gotoDashboard}
                        >
                            Kembali ke Beranda
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AjukanSuccessPage;
