import { useState } from "react";
import { NavbarComponent, SideBar, HeaderForm, PesertaModal, Accordion } from "../../Components";
import { logocalender } from "../../utils/ImageHelper";
import { useNavigate } from "react-router-dom";

const AjukanLaporanDojang = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        namaDojang: "",
        lokasi: "",
        tanggalPelaksanaan: "",
        checkbox: false,
    });

    // State to store selected peserta
    const [pesertaInput, setPesertaInput] = useState([]);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleNext = () => {
        if (step < 2) setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.checkbox) {
            // Submit form data
            console.log(formData);
            console.log('Selected Peserta:', pesertaInput);
            handleNext(); // Move to the next step after successful submission
        } else {
            alert("You must agree to the statement.");
        }
    };

    const navigateTo = useNavigate();

    const [showModalPeserta, setShowModalPeserta] = useState(false);

    const toggleModalPeserta = () => {
        setShowModalPeserta(!showModalPeserta);
    };

    // Define the function to handle peserta input from the modal
    const handlePesertaInput = (inputData) => {
        setPesertaInput(inputData);
        console.log('Peserta Input:', inputData);
    };

    return (
        <>
            <div className="hidden md:block">
                <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Dojang"} subtitle={"BAGUS SACTI CLUB, JAKARTA"} navigate={"/dashboarddojang"} />
            </div>
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <div className="md:hidden">
                        <HeaderForm title="Ajukan Laporan UKT" navigate="/dashboardDojang" />
                    </div>
                    <div className="bg-white p-5 rounded-md">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-2xl font-bold mb-5">Umum</h1>
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Nama Dojang</label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        name="namaDojang"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled
                                        defaultValue="DOJANG SANGGAR TARI"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Nomor Pengajuan</label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        name="nomorPengajuan"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled
                                        defaultValue="UMU/025/PBTI.025/V/2024"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Jumlah Peserta Terdaftar</label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        name="jumlahPesertaTerdaftar"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled
                                        defaultValue="50"
                                    />
                                    <span className="absolute right-3 text-gray-500">orang</span>
                                </div>
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Jumlah Peserta Lulus</label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        name="jumlahPesertaLulus"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled
                                        defaultValue="50"
                                    />
                                    <span className="absolute right-3 text-gray-500">orang</span>
                                </div>
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Tanggal Pelaksanaan</label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        name="tanggalPelaksanaan"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled
                                        defaultValue="Senin, 25 Mei 2024"
                                    />
                                    <img src={logocalender} alt="calender" className="absolute right-3 h-6 w-6" />
                                </div>
                            </div>
                            <div className="my-5 grid grid-cols-1 gap-5">
                                {
                                    pesertaInput.length > 0 ?
                                        (
                                            <>
                                                <Accordion title="Geup 10 ke Geup 9" pelatihList={pesertaInput} />

                                                <button type="button" className="w-full text-black py-2 rounded-sm hover:border-2 hover:border-slate-200">
                                                    Edit Peserta
                                                </button>
                                            </>
                                        ) :
                                        <>
                                            <button
                                                type="button"
                                                className="w-full text-black py-2 rounded-sm hover:border-2 hover:border-slate-200"
                                                onClick={toggleModalPeserta}
                                            >
                                                Tambah Peserta
                                            </button>
                                            <button type="button" className="w-full text-black py-2 rounded-sm hover:border-2 hover:border-slate-200">
                                                Unggah CSV/Excel
                                            </button>
                                            <button type="button" className="w-full text-black py-2 rounded-sm hover:border-2 hover:border-slate-200">
                                                Tambah Geup
                                            </button>
                                        </>
                                }
                            </div>
                            <div className="mb-4">
                                <label className="flex items-center font-semibold text-xs md:text-base">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        checked={formData.checkbox}
                                        onChange={handleChange}
                                        className="mr-5 w-14 h-14 md:w-8 md:h-8 md:mr-3"
                                    />
                                    Saya menyatakan data pengajuan Ujian Kenaikan Tingkat dibuat dengan sebenar-benarnya.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black border border-black"
                                onClick={() => navigateTo("/ajukanLaporanDojang/success")}
                            >
                                Ajukan
                            </button>
                        </form>
                    </div>
                </div>
                <PesertaModal
                    show={showModalPeserta}
                    onClose={toggleModalPeserta}
                    onSelectPeserta={handlePesertaInput} // Pass the function here
                />
            </div>
        </>
    );
};

export default AjukanLaporanDojang;
