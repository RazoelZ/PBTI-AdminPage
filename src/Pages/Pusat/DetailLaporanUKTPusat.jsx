import { useLocation, useNavigate } from "react-router-dom";
import { Accordion, HeaderComponents, NavbarComponent, SideBar, StepIndicator } from "../../Components";
import { useState } from "react";

const DetailLaporanUKTPusat = () => {
    const { state } = useLocation();
    const { cabangdojang, nomorPengajuan, lokasiUjian, tanggalPelaksanaan } = state;

    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('/laporanUKTGeup/success', {
            state: { cabangdojang, nomorPengajuan, lokasiUjian, tanggalPelaksanaan }
        });
    };
    const [isOpen, setIsOpen] = useState(false);
    const [step] = useState(1);

    const toggleSideBar = () => setIsOpen(!isOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
    };

    const pelatihList = [
        {
            id: 1,
            nama: "Alexander Era",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            nama: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            nama: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
    ];


    return (
        <>
            <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Pusat"} navigate={"/dashboardpusat"} />
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <div className="bg-white p-5 rounded-md">
                        <StepIndicator currentStep={step} />

                        {step === 1 && (
                            <>
                                <div className="flex flex-col space-y-2 border-2 border-slate-400 rounded-md p-4">
                                    <HeaderComponents title="Dojang" cabangdojang={cabangdojang} />
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400">Nomor Pengajuan</label>
                                        <p className="relative flex items-center font-semibold">
                                            {nomorPengajuan}
                                        </p>
                                    </div>
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400">Lokasi Ujian</label>
                                        <p className="relative flex items-center font-semibold">
                                            {lokasiUjian}
                                        </p>
                                    </div>
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400">Jumlah Peserta Terdaftar</label>
                                        <p className="relative flex items-center font-semibold">
                                            50 Orang
                                        </p>
                                    </div>
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400">Jumlah Peserta Lulus</label>
                                        <p className="relative flex items-center font-semibold">
                                            50 Orang
                                        </p>
                                    </div>

                                </div>
                                <div className="flex flex-col space-y-4 border-2 border-slate-400 rounded-md p-4 mt-5">
                                    <div className="">
                                        <Accordion title="Geup 10 ke Geup 9" pelatihList={pelatihList} />
                                    </div>
                                    <div className="border-t-2 border-slate-200">
                                        <Accordion title="Geup 9 ke Geup 8" pelatihList={pelatihList} />
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="w-full text-red-600 py-2 mt-4 rounded-md bg-white  border border-[#DFE0E2] hover:bg-red-600 hover:text-white"
                                    >
                                        Ajukan Perbaikan
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="w-full text-red-600 py-2 mt-4 rounded-md bg-white  border border-[#DFE0E2] hover:bg-red-600 hover:text-white"
                                    >
                                        Batalkan
                                    </button>
                                </div>
                                <div className="flex flex-col p-4 mt-10">
                                    <label className="flex items-center font-semibold text-xs md:text-base">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="mr-5 w-14 h-14 md:w-8 md:h-8 md:mr-3"
                                        />
                                        Kami dari Pengurus Pusat menyatakan data pengajuan Ujian Kenaikan Tingkat telah ditinjau dan disetujui.
                                    </label>
                                    <button
                                        type="submit"
                                        onClick={handleDetailClick}
                                        className="w-full bg-[#DFE0E2] text-[#A0A5AB]  py-2 mt-4 rounded-md hover:bg-black hover:text-white"
                                    >
                                        Proses Sertifikat
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailLaporanUKTPusat;
