import { useLocation, useNavigate } from "react-router-dom";
import { HeaderComponents, HeaderForm, NavbarComponent, SideBar, StepIndicator, Accordion } from "../../Components";
import { useState } from "react";
import { orang, orang1 } from "../../utils/ImageHelper";

const DetailPengajuanUktKabupaten = () => {
    const { state } = useLocation();
    const { cabangdojang, nomorPengajuan, lokasiUjian, tanggalPelaksanaan } = state;

    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate('/ajukanUKT/successKabupaten', {
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

    const pelatihdata = [
        {
            id: '1',
            nama: 'John Doe',
            //generate random image from web
            image: orang
        },
        {
            id: '2',
            nama: 'Marry Jane',
            image: orang1
        }
    ]

    return (
        <>
            <div className="hidden md:block">
                <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} navigate={"/dashboardkabupaten"} title={"Kabupaten/Kota"} subtitle={"Jakarta Selatan"} />
            </div>
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <HeaderForm title="Detail Pengajuan UKT Geup" navigate="/dashboardKabupaten" />
                    <div className="bg-white p-5 rounded-md">
                        <StepIndicator currentStep={step} />
                        {step === 1 && (
                            <>
                                <div className="flex flex-col space-y-2 border-2 border-slate-400 rounded-md p-4">
                                    <HeaderComponents title="Dojang" cabangdojang={cabangdojang} />
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Nomor Pengajuan</label>
                                        <p className="relative flex items-center">
                                            {nomorPengajuan}
                                        </p>
                                    </div>
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Lokasi Ujian</label>
                                        <p className="relative flex items-center">
                                            {lokasiUjian}
                                        </p>
                                    </div>
                                    <div className="mb-4 py-4 relative border-b-2 border-slate-100">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Tanggal Pelaksanaan</label>
                                        <p className="relative flex items-center">
                                            {tanggalPelaksanaan}
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <Accordion pelatihList={pelatihdata} title={"Pelatih Penguji"} />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-5 border-2 border-slate-400 rounded-md p-4 mt-5">
                                    <HeaderComponents title="Kabupaten / Kota" cabangdojang={cabangdojang} />
                                    <label className="block text-sm font-medium text-slate-400">Status Pengajuan UKT Geup</label>
                                    <div className="grid grid-cols-10 gap-1">
                                        <div className="col-span-1 flex items-center">
                                            <input type="checkbox" className="w-7 h-7 accent-black" checked />
                                        </div>
                                        <div className="col-span-9 ml-4 md:ml-0 text-xs md:text-base flex items-center pl-4">
                                            <div>
                                                <p className="font-bold">Pembuatan Pengajuan Ujian</p>
                                                <p className="text-[#B2B9C3]">{tanggalPelaksanaan}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-10 border-l-[3px] border-black h-8 ml-2 md:ml-3">

                                        </div>
                                        <div className="col-span-1 flex items-center">
                                            <input type="checkbox" className="w-7 h-7 accent-black" disabled />
                                        </div>
                                        <div className="col-span-9 ml-4 md:ml-0 text-xs md:text-base flex items-center pl-4">
                                            <div>
                                                <p className="font-bold">Menunggu Persetujuan Pengurus Kabupaten/Kota</p>
                                                <p className="text-[#B2B9C3]">Membutuhkan persetujuan Anda</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full text-red-600 py-2 mt-4 rounded-md bg-white  border border-[#DFE0E2] hover:bg-red-600 hover:text-white"
                                >
                                    Ajukan Perbaikan
                                </button>
                                <div className="flex flex-col border-2 border-slate-400 rounded-md p-4 mt-10">
                                    <label className="flex items-center font-semibold text-xs md:text-base accent-black">
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            className="mr-5 w-14 h-14 md:w-8 md:h-8 md:mr-3"
                                        />
                                        Kami dari Pengurus Kabupaten/Kota menyatakan data pengajuan Ujian Kenaikan Tingkat telah ditinjau dan disetujui.
                                    </label>
                                    <button
                                        type="submit"
                                        onClick={handleDetailClick}
                                        className="w-full bg-black text-white py-2 mt-4 rounded-md hover:bg-white hover:text-black border border-black"
                                    >
                                        Setujui
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

export default DetailPengajuanUktKabupaten;
