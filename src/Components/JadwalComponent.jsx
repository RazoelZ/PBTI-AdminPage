import PropTypes from "prop-types";
import { logocalender, logomap } from "../utils/ImageHelper";
/**
 * JadwalComponent renders a schedule item with its status, title, time, and location.
 * 
 * @component
 * @param {Object} props - Props passed to the component
 * @param {number} props.status - The status of the event (1 for available, otherwise closed)
 * @param {string} props.judul - The title of the event
 * @param {string} props.waktu - The time of the event
 * @param {string} props.lokasi - The location of the event
 * @returns {JSX.Element} The rendered schedule component
 */
const JadwalComponent = ({ status, judul, waktu, lokasi }) => {
    return (
        <div className="">
            {/* Section title */}
            <div className="border-y-2 border-opacity-10 border-black p-3 text-lg font-bold">
                Hari ini
            </div>
            <div className="bg-white p-3 mt-5">
                {/* Event status */}
                {status === 1 ? (
                    <span className="bg-[#D1FAE5] text-[#10B981] px-3 py-1 rounded-xl text-xs">Masih Tersedia</span>
                ) : (
                    <span className="bg-[#FEE2E2] text-[#EF4444] px-3 py-1 rounded-xl text-xs">Sudah Ditutup</span>
                )}
                {/* Event details */}
                <div className="flex flex-col space-y-4">
                    <h3 className="font-bold text-xl mt-2">{judul}</h3>
                    <p>
                        <img src={logocalender} alt="logo calendar" className="w-4 inline-block mr-2" />
                        {waktu}
                    </p>
                    <p>
                        <img src={logomap} alt="logo map" className="w-4 inline-block mr-2" />
                        {lokasi}
                    </p>
                    {/* Registration button */}
                    <button className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none border border-black">
                        Daftar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JadwalComponent;

JadwalComponent.propTypes = {
    status: PropTypes.number,
    judul: PropTypes.string,
    waktu: PropTypes.string,
    lokasi: PropTypes.string,
};
