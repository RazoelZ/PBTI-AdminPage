import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";
import { logocompass } from "../../utils/ImageHelper";
import LocationDojang from "../../@fake-db/LocationDojang";
import { useState } from "react";

/**
 * LocationModal component for selecting a location.
 *
 * @component
 * @param {object} props - Component props
 * @param {boolean} props.show - Controls whether the modal is visible or hidden
 * @param {function} props.onClose - Callback function to close the modal
 * @param {function} props.onSelectLocation - Callback function to pass selected location back to the parent
 * @returns {JSX.Element} The rendered LocationModal component
 */
const LocationModal = ({ show, onClose, onSelectLocation }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);

    // Render nothing if show prop is false
    if (!show) {
        return null;
    }

    // Filter locations based on search query
    const filteredLocations = LocationDojang.filter((location) =>
        location.lokasi_dojang.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Determine the number of locations to show initially
    const locationsToShow = showAll ? filteredLocations : filteredLocations.slice(0, 3);

    const handleLocationSelect = (selectedLocation) => {
        onSelectLocation(selectedLocation);
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:justify-center">
                <div className="bg-white rounded-t-lg p-6 w-full sm:max-w-lg sm:rounded-lg sm:mx-auto relative bottom-0 sm:bottom-auto">
                    <div className="flex justify-between items-start">
                        <h2 className="font-bold mb-4">Pilih Lokasi</h2>
                        <button className="text-2xl text-gray-700 hover:text-gray-900" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <form>
                        <div className="relative mb-4">
                            <label htmlFor="lokasi" className="block mb-2">
                                Cari Lokasi
                            </label>
                            <input
                                type="text"
                                name="lokasi"
                                className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Cari Lokasi..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <CiSearch className="absolute right-3 top-11 w-7 h-7 text-gray-400" />
                        </div>
                        <div
                            className="flex items-center space-x-2 mt-4 border-2 border-gray-200 p-2 rounded-md cursor-pointer"
                            onClick={onClose}
                        >
                            <img src={logocompass} alt="compass" className="w-4 h-4" />
                            <p className="font-semibold">Gunakan Lokasi saat ini</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold mb-2">Saran Lokasi</p>
                            {locationsToShow.length > 0 ? (
                                locationsToShow.map((location) => (
                                    <div
                                        key={location.id}
                                        className="mb-2 py-2 border-b-2 border-gray-200 cursor-pointer"
                                        onClick={() => handleLocationSelect(location.lokasi_dojang)}
                                    >
                                        <p>{location.lokasi_dojang}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">Tidak ada lokasi ditemukan.</p>
                            )}
                            {filteredLocations.length > 3 && !showAll && (
                                <button
                                    className="text-blue-500 underline mt-2"
                                    onClick={() => setShowAll(true)}
                                >
                                    Show More
                                </button>
                            )}
                            {showAll && (
                                <button
                                    className="text-blue-500 underline mt-2"
                                    onClick={() => setShowAll(false)}
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                        <button
                            className="w-full bg-black text-white py-3 rounded-md mt-4"
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();
                            }}
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

LocationModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSelectLocation: PropTypes.func.isRequired,
};

export default LocationModal;
