import {
    berandalogo,
    eventlogo,
    messageicon,
    notificationicon,
    ujianlogo,
    userlogo,
} from "../utils/ImageHelper.jsx";
import PropTypes from "prop-types";


import { NavLink } from "react-router-dom";



const SideBar = ({ show, toggleSideBar }) => {
    return (
        <>
            {/* Overlay */}
            {show && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={toggleSideBar}
                ></div>
            )}

            <div className={`${show ? "flex" : "hidden"} fixed z-20 flex-col justify-between bg-white border-r-2 border-[#D8DADD] h-full right-0 w-4/5 sm:left-0 sm:w-3/5 sm:h-auto sm:relative md:w-1/4`}>
                <div className="p-5">
                    <div className="w-full p-2 flex items-center justify-between space-x-2 mb-4 md:hidden">
                        <div className="flex items-center">
                            <img src="https://via.placeholder.com/150" alt="Profile" className="w-[20%] h-[20%] md:w-[25%] md:h-[25%] rounded-full" />
                            <h2 className="font-bold ml-3 text-xs">
                                Agus Harimutri
                            </h2>
                        </div>
                        <div className="flex">
                            <img src={messageicon} className="w-7 ml-5" />
                            <img src={notificationicon} className="w-7 ml-5" />
                        </div>
                    </div>
                    <ul>
                        <NavLink to={"/dashboard"}>
                            <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                <img src={berandalogo} alt="Logo" className="w-5 mr-5" />
                                Beranda
                            </li>
                            <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                <img src={userlogo} alt="Logo" className="w-5 mr-5" />
                                Beranda
                            </li>
                        </NavLink>
                        <ul className="ml-5 pl-7 border-l-2 border-[#D8DADD]">
                            <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                Pelatih
                            </li>
                            <li className="flex items-center mt-2 text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                Atlit
                            </li>
                        </ul>
                        <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                            <img src={eventlogo} alt="Logo" className="w-5 mr-5" />
                            Event
                        </li>
                        <ul className="ml-5 pl-7 border-l-2 border-[#D8DADD]">
                            <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                Buat Event
                            </li>
                            <li className="flex items-center mt-2 text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                Daftar Event
                            </li>
                        </ul>
                        <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                            <img src={ujianlogo} alt="Logo" className="w-5 mr-5" />
                            Beranda
                        </li>
                        <ul className="ml-5 pl-7 border-l-2 border-[#D8DADD]">
                            <li className="flex items-center text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                Daftar & Pelaporan Ujian
                            </li>
                            <NavLink to={"/ajukanUKT"}>
                                <li className="flex items-center mt-2 text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                    Ajukan Ujian
                                </li>
                            </NavLink>
                            <li className="flex items-center mt-2 text-[#677788] hover:bg-[#F5F5F5] p-2 cursor-pointer">
                                Buat Laporan Ujian
                            </li>
                        </ul>
                    </ul>
                </div>
                {/* <button
                    className="w-full p-5 border-t-2 border-[#D8DADD] text-[#677788] hover:bg-[#d6d5d5] cursor-pointer"
                    onClick={toggleSideBar}
                >
                    &lt; Minimalkan menu
                </button> */}
            </div >
        </>
    );
};

export default SideBar;


SideBar.propTypes = {
    show: PropTypes.bool,
    toggleSideBar: PropTypes.func,
};
