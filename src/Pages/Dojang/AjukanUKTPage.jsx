import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavbarComponent, SideBar, StepIndicator, LocationModal, PelatihModal, HeaderForm } from "../../Components";
import { logo, logogopay, logoovo, logobca } from "../../utils/ImageHelper";
import { useNavigate } from "react-router-dom";

const AjukanUKTPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        namaDojang: "",
        lokasi: "",
        tanggalPelaksanaan: "",
        checkbox: false,
    });

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

    // const handleBack = () => {
    //     if (step > 1) setStep(step - 1);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.checkbox) {
            // Submit form data
            console.log(formData);
            handleNext(); // Move to the next step after successful submission
        } else {
            alert("You must agree to the statement.");
        }
    };

    const navigateTo = useNavigate();

    const successful = () => {
        navigateTo("/ajukanUKT/success");
    }

    const [showModalLocation, setShowModalLoshowModalLocation] = useState(false);
    const [showModalPelatih, setShowModalPelatih] = useState(false);

    const toggleModalLocation = () => {
        setShowModalLoshowModalLocation(!showModalLocation);
    };

    const toggleModalPelatih = () => {
        setShowModalPelatih(!showModalPelatih);
    };

    const handleLocationSelect = (selectedLocation) => {
        setFormData((prevData) => ({
            ...prevData,
            lokasi: selectedLocation,
        }));
    };

    const handlePelatihSelect = (selectedPelatih) => {
        setFormData((prevData) => ({
            ...prevData,
            namaPelatih: selectedPelatih,
        }));
    }



    return (
        <>
            <div className="hidden md:block">
                <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Dojang"} subtitle={"BAGUS SACTI CLUB, JAKARTA"} navigate={"/dashboarddojang"} />
            </div>
            <div className="flex w-full">
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] flex flex-col md:space-x-5 md:p-5">
                    <div className="md:hidden">
                        <HeaderForm title="Ajukan UKT Geup" navigate="/dashboardDojang" />
                    </div>
                    <div className="bg-white p-5 rounded-md">
                        <StepIndicator currentStep={step} />
                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <>
                                    <h1 className="text-2xl font-bold mb-5">Umum</h1>
                                    <div className="mb-4 relative">
                                        <label className="block text-sm font-medium mb-2">Nama Dojang</label>
                                        <div className="relative flex items-center">
                                            <CiSearch className="absolute right-3 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="namaDojang"
                                                value={formData.namaDojang}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Cari Dojang..."
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 relative">
                                        <label className="block text-sm font-medium mb-2">Lokasi</label>
                                        <div className="relative flex items-center">
                                            <CiSearch className="absolute right-3 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="lokasi"
                                                value={formData.lokasi}
                                                onChange={handleChange}
                                                onClick={toggleModalLocation}
                                                className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Cari Lokasi..."
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 relative">
                                        <label className="block text-sm font-medium mb-2">Tanggal Pelaksanaan</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type="date"
                                                name="tanggalPelaksanaan"
                                                value={formData.tanggalPelaksanaan}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Senin, 20 September 2021"
                                            />
                                        </div>
                                    </div>
                                    <h1 className="text-2xl font-bold mb-5">Pelatih Penguji</h1>
                                    <div className="mb-10 relative">
                                        <label className="block text-sm font-medium mb-2">Nama Pelatih</label>
                                        <div className="relative flex items-center">
                                            <CiSearch className="absolute right-3 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="namaPelatih"
                                                value={formData.namaPelatih}
                                                onChange={handleChange}
                                                onClick={toggleModalPelatih}
                                                className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Cari Nama Pelatih"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="flex items-center font-semibold text-xs md:text-base">
                                            <input
                                                type="checkbox"
                                                name="checkbox"
                                                checked={formData.checkbox}
                                                onChange={handleChange}
                                                className="mr-5 w-14 h-14 md:w-8 md:h-8 md:mr-3 accent-black"
                                            />
                                            Saya menyatakan data pengajuan Ujian Kenaikan Tingkat dibuat dengan sebenar-benarnya.
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black border border-black"
                                    >
                                        Ajukan
                                    </button>
                                </>
                            )}

                            {step === 2 && (
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="p-2 border-[0.5px] border-[#D8DADD] rounded-md flex justify-center flex-col space-y-3">
                                        <div className="py-4 bg-white flex items-center justify-between lg:text-base">
                                            <div className="flex items-center md:ml-3">
                                                <img src={logo} alt="Logo" className="w-8 cursor-pointer md:w-14" />
                                                <p className="px-2 text-lg font-bold border-r-2 border-[#D8DADD] md:px-4">
                                                    PBTI
                                                </p>
                                                <div className="ml-2 md:ml-4">
                                                    <h3 className="font-semibold text-sm md:text-base">
                                                        Dojang
                                                    </h3>
                                                    <h4 className="font-semibold text-[#B2B9C3] text-[8px] md:mt-2 md:text-base">
                                                        BAGUS SACTI CLUB, JAKARTA
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>
                                        <div className="text-xs md:text-base">
                                            <label className="text-[#B2B9C3]">
                                                Nomor Pengajuan
                                            </label>
                                            <h5 className="font-bold mt-2">
                                                UMUM/025/PBTI.025/V/2024
                                            </h5>
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>
                                        <div className="text-xs md:text-base">
                                            <label className="text-[#B2B9C3]">
                                                Tanggal Pelaksanaan
                                            </label>
                                            <h5 className="font-bold mt-2">
                                                Sabtu, 4 Mei 2024
                                            </h5>
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>
                                        <div className="text-xs md:text-base">
                                            <label className="text-[#B2B9C3]">
                                                Lokasi
                                            </label>
                                            <h5 className="font-bold mt-2">
                                                Kantor PBTI Jakarta Selatan
                                            </h5>
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>
                                        <div className="text-xs md:text-base">
                                            <label className="text-[#B2B9C3]">
                                                Pelatih
                                            </label>
                                            <h5 className="font-bold mt-2">
                                                XXXXXXXXXXXX
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="p-2 border-[0.5px] border-[#D8DADD] rounded-md flex justify-center flex-col space-y-4">
                                        <h4 className="font-semibold ">
                                            Rincian Biaya
                                        </h4>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>
                                        <div className="text-xs md:text-base grid grid-cols-[2fr,1fr] gap-x-4 items-center">
                                            <div className="text-[#B2B9C3]">
                                                <p>Biaya Pendaftaran</p>
                                                <p className="text-[8px]">(Jumlah Peserta Lulus x Rp100.000)</p>
                                            </div>
                                            <h5 className="font-bold text-right">Rp. 500.000</h5>
                                        </div>
                                        <div className="text-xs md:text-base grid grid-cols-[2fr,1fr] gap-x-4 items-center">
                                            <p className="text-[#B2B9C3]">Biaya Pembayaran</p>
                                            <h5 className="font-bold text-right">Rp. 2.500</h5>
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>
                                        <div className="text-xs md:text-base grid grid-cols-[2fr,1fr] gap-x-4 items-center">
                                            <div className="text-[#B2B9C3]">
                                                <p>Total Biaya</p>
                                            </div>
                                            <h5 className="font-bold text-right">Rp. 502.500</h5>
                                        </div>
                                    </div>
                                    <div className="p-2 border-[0.5px] border-[#D8DADD] rounded-md flex justify-center flex-col space-y-3 mb-5">
                                        <h4 className="font-semibold">
                                            Metode Pembayaran
                                        </h4>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>

                                        <div className="text-xs md:text-base grid grid-cols-[2fr,1fr,auto] gap-x-4 items-center">
                                            <div className="flex items-center space-x-2">
                                                <img src={logogopay} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                                <div>
                                                    <p className="md:text-lg">GoPay</p>
                                                    <p className="text-[8px] md:text-sm">Biaya Pembayaran <span className="font-semibold">Rp.2.500,00</span></p>
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-right">Rp. 502.500</h5>
                                            <input type="radio" name="paymentMethod" value="gopay" className="w-4 h-4" />
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>

                                        <div className="text-xs md:text-base grid grid-cols-[2fr,1fr,auto] gap-x-4 items-center">
                                            <div className="flex items-center space-x-2">
                                                <img src={logoovo} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                                <div>
                                                    <p className="md:text-lg">OVO</p>
                                                    <p className="text-[8px] md:text-sm">Biaya Pembayaran <span className="font-semibold">Rp.2.500,00</span></p>
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-right">Rp. 502.500</h5>
                                            <input type="radio" name="paymentMethod" value="ovo" className="w-4 h-4" />
                                        </div>
                                        <div className="w-full border-b-2 border-[#D8DADD]"></div>

                                        <div className="text-xs md:text-base grid grid-cols-[2fr,1fr,auto] gap-x-4 items-center">
                                            <div className="flex items-center space-x-2">
                                                <img src={logobca} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                                <div>
                                                    <p className="md:text-lg">BCA</p>
                                                    <p className="text-[8px] md:text-sm">Biaya Pembayaran <span className="font-semibold">Rp.2.500,00</span></p>
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-right">Rp. 502.500</h5>
                                            <input type="radio" name="paymentMethod" value="bca" className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <p className="text-xs md:text-base text-black border-t-2 border-[#D8DADD] pt-2">
                                        Jika Anda telah mengonfirmasi dan melakukan pembayaran maka otomatis juga mengajukan registrasi UKT Geup.
                                    </p>
                                    <button
                                        onClick={successful}
                                        type="submit"
                                        className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black border border-black"
                                    >
                                        Konfirmasi
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                <LocationModal
                    show={showModalLocation}
                    onClose={toggleModalLocation}
                    onSelectLocation={handleLocationSelect}
                />
                <PelatihModal
                    show={showModalPelatih}
                    onClose={toggleModalPelatih}
                    onSelectPelatih={handlePelatihSelect}
                />
            </div>
        </>
    );
};

export default AjukanUKTPage;
