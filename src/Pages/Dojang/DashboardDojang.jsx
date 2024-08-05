import { useState } from "react";
import { AthleteTable, EventComponent, JadwalComponent, NavbarComponent, SideBar, UjianAthleteTable } from "../../Components";
import { awardlogo, checkup, ujianlogo, userlogo, uktgeup, worldwide } from "../../utils/ImageHelper";
import { useNavigate } from "react-router-dom";

/**
 * DashboardDojang Component
 * This component renders the admin dashboard page, which includes various sections
 * such as account info, upcoming schedules, statistics, athlete membership list,
 * exam list, events, and exam-related information.
 */
const DashboardDojang = () => {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggles the sidebar open/close state.
     */
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    // Hook to navigate programmatically
    const navigateTo = useNavigate();

    /**
     * Handles the router.
     * Currently, it redirects the user to the Ajukan UKT Page.
     */
    const gotoAjukanUKT = () => {
        navigateTo("/ajukanUKT");
    }

    return (
        <>
            {/* Navbar Component */}
            <NavbarComponent toggleSideBar={toggleSideBar} isOpen={isOpen} title={"Dojang"} subtitle={"BAGUS SACTI CLUB, JAKARTA"} navigate={"/dashboarddojang"} />
            <div className="flex w-full">
                {/* Sidebar Component */}
                <SideBar show={isOpen} toggleSideBar={toggleSideBar} />
                <div className="w-full bg-[#F5F5F5] p-5 flex flex-col md:flex-row md:space-x-5">
                    {/* Left Column: Account Info and Upcoming Schedules */}
                    <div className="w-full md:w-1/4">
                        <h1 className="font-bold text-2xl mb-5 hidden md:block">
                            Info Akun
                        </h1>
                        <div className="p-4 bg-white">
                            <div className="w-full flex text-xs justify-between items-center space-x-2">
                                <img src="https://via.placeholder.com/150" alt="Profile" className="w-[20%] h-14 md:w-[25%] md:h-[25%]" />
                                <div className="grid gap-2 md:w-full">
                                    <h2 className="font-bold">
                                        Halo Agus
                                    </h2>
                                    <p className="text-[#8C98A4]">
                                        Kamu merupakan Admin di Dojang Bagus Sacti Club, Jakarta
                                    </p>
                                    <span className="hidden font-bold md:block">Lihat Detail &gt;</span>
                                </div>
                                <a href="#" className="text-lg md:hidden">
                                    &gt;
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="font-semibold text-2xl mb-5 mt-10">
                                Jadwal yang akan datang
                            </h1>
                            <div className="grid gap-5">
                                <JadwalComponent status={1} judul={"Pertemuan Asosiasi Nasional"} waktu={"Senin, 20 September 2021"} lokasi={"Dojang Bagus Sacti Club, Jakarta"} />
                                <JadwalComponent status={2} judul={"Ujian Kenaikan Tingkat (UKT) Geup"} waktu={"Senin, 20 September 2021"} lokasi={"Dojang Bagus Sacti Club, Jakarta"} />
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Main Content */}
                    <div className="w-full md:w-3/4">
                        {/* Statistics Section */}
                        <div>
                            <h1 className="font-semibold text-2xl mb-5 mt-10 md:mt-0">
                                Statistik
                            </h1>
                            <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-3">
                                <div className="p-4 bg-white flex md:w-1/3 md:flex-col">
                                    <div className="w-full py-3 flex text-xs justify-between items-center space-x-2 md:flex-col">
                                        <div className="flex items-center">
                                            <img src={awardlogo} alt="Profile" className="w-6 h-6 mr-5" />
                                            <p className="tracking-widest text-[#B2B9C3]">
                                                PENGKAB / KOT
                                            </p>
                                        </div>
                                        <p className="text-2xl font-semibold md:text-3xl">
                                            320
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 bg-white flex md:w-1/3 md:flex-col">
                                    <div className="w-full py-3 flex text-xs justify-between items-center space-x-2 md:flex-col">
                                        <div className="flex items-center">
                                            <img src={ujianlogo} alt="Profile" className="w-6 h-6 mr-5" />
                                            <p className="tracking-widest text-[#B2B9C3]">
                                                KLUB AKTIF
                                            </p>
                                        </div>
                                        <p className="text-2xl font-semibold md:text-3xl">
                                            320
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 bg-white flex md:w-1/3 md:flex-col">
                                    <div className="w-full py-3 flex text-xs justify-between items-center space-x-2 md:flex-col">
                                        <div className="flex items-center">
                                            <img src={userlogo} alt="Profile" className="w-6 h-6 mr-5" />
                                            <p className="tracking-widest text-[#B2B9C3]">
                                                JUMLAH ATLET
                                            </p>
                                        </div>
                                        <p className="text-2xl font-semibold md:text-3xl">
                                            320
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Athlete Membership List Section */}
                        <div>
                            <h1 className="font-semibold text-2xl mb-5 mt-10">
                                Daftar Keanggotaan Atlet
                            </h1>
                            <div className="p-4 bg-white">
                                <AthleteTable />
                            </div>
                        </div>
                        {/* Exam List Section */}
                        <div>
                            <h1 className="font-semibold text-2xl mb-5 mt-10">
                                Daftar Ujian Anggota
                            </h1>
                            <div className="p-4 bg-white">
                                <UjianAthleteTable />
                            </div>
                        </div>
                        {/* Events Section */}
                        <div>
                            <h1 className="font-semibold text-2xl mb-5 mt-10">
                                Event
                            </h1>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <EventComponent />
                                <EventComponent />
                                <EventComponent />
                                <EventComponent />
                            </div>
                        </div>
                        {/* Exam Information Section */}
                        <div>
                            <h1 className="font-semibold text-2xl mb-5 mt-10">
                                Perihal Ujian
                            </h1>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <div className="flex flex-col space-y-2 p-4 bg-white">
                                    <img src={uktgeup} alt="Event" className="w-12" />
                                    <h1 className="text-xl font-bold">
                                        Ujian Kenaikan Tingkat (UKT) Geup
                                    </h1>
                                    <p className="text-[#B2B9C3] text-xs md:text-base">
                                        UKT ini untuk Geup 10 hingga 1 yang dapat Anda ajukan dan laksanakan di Dojang Anda.
                                    </p>
                                    <div className="font-semibold mt-20 md:mt-0">
                                        <button
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                            onClick={gotoAjukanUKT}
                                        >
                                            Ajukan Ujian
                                        </button>
                                        <button
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                        >
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 p-4 bg-white">
                                    <img src={checkup} alt="Event" className="w-12" />
                                    <h1 className="text-xl font-bold">
                                        Laporan Pelaksanaan UKT
                                    </h1>
                                    <p className="text-[#B2B9C3] text-xs md:text-base">
                                        Setelah Dojang Anda melaksanankan UKT, lakukan laporan untuk mendapatkan sertifikat kenaikan tingkat.
                                    </p>
                                    <div className="font-semibold mt-20 md:mt-0">
                                        <button
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                            onClick={() => navigateTo("/ajukanLaporanDojang")}
                                        >
                                            Buat Laporan
                                        </button>
                                        <button
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                        >
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 p-4 bg-white">
                                    <img src={worldwide} alt="Event" className="w-12" />
                                    <h1 className="text-xl font-bold">
                                        Registrasi Anggota Dojang
                                    </h1>
                                    <p className="text-[#B2B9C3] text-xs md:text-base">
                                        Anda dapat mendaftarkan keanggotaan Dojang agar mendapat izin untuk mengikuti UKT.
                                    </p>
                                    <div className="font-semibold mt-20 md:mt-0">
                                        <button
                                            type="submit"
                                            className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black"
                                        >
                                            Daftarkan Anggota
                                        </button>
                                        <button
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

export default DashboardDojang;
