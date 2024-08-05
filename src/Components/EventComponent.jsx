import PropTypes from "prop-types";
import { strategi, userlogo } from "../utils/ImageHelper";
/**
 * EventComponent renders a card displaying event details for a Taekwondo event.
 * It includes an image, date, time, title, location, and participant count.
 * 
 * @component
 * @returns {JSX.Element} The rendered event component.
 */
const EventComponent = () => {
    return (
        <div className="flex flex-col space-y-2 p-4 bg-white">
            {/* Event image */}
            <div className="h-28">
                <img src={strategi} alt="Event" className="w-full h-full object-cover" />
            </div>
            {/* Event date and time */}
            <div className="flex items-center mt-2 text-xs md:space-x-4 md:text-base">
                <h1>Fri, 10 May 2024</h1>
                <span className="text-[#B2B9C3] h-2 w-2 rounded-full"></span>
                <p>09.00 WIB</p>
            </div>
            {/* Event title */}
            <h1 className="text-lg font-bold">
                Ujian Kenaikan Tingkat (UKT) Geup
            </h1>
            {/* Event location */}
            <p className="text-[#B2B9C3] text-xs md:text-base">
                Dojang Sosial Taekwondo, Jakarta Pusat, DKI Jakarta
            </p>
            {/* Event participants */}
            <div className="flex items-center space-x-2 mt-2 text-xs md:text-base">
                <img src={userlogo}
                    alt="Profile"
                    className="w-4 h-4" />
                <p className="text-[#B2B9C3]">
                    320 Atlet
                </p>
            </div>
        </div>
    );
};

export default EventComponent;

EventComponent.propTypes = {
    status: PropTypes.number,
    judul: PropTypes.string,
    waktu: PropTypes.string,
    lokasi: PropTypes.string,
};
