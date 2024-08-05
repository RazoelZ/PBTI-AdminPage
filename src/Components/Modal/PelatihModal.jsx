import PropTypes from "prop-types";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import pelatihDojang from "../../@fake-db/PelatihDojang";

const PelatihModal = ({ show, onClose, onSelectPelatih }) => {
    const [selectedPelatih, setSelectedPelatih] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);

    // Render nothing if show prop is false
    if (!show) {
        return null;
    }

    const handlePelatihToggle = (pelatih) => {
        setSelectedPelatih((prevSelected) => {
            if (prevSelected.includes(pelatih.nama)) {
                // If already selected, remove it
                return prevSelected.filter((name) => name !== pelatih.nama);
            } else {
                // Otherwise, add it
                return [...prevSelected, pelatih.nama];
            }
        });
    };

    // Filter pelatih based on search query
    const filteredPelatih = pelatihDojang.filter((pelatih) =>
        pelatih.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Determine the number of pelatih to show initially
    const pelatihToShow = showAll ? filteredPelatih : filteredPelatih.slice(0, 3);

    const handleSave = () => {
        onSelectPelatih(selectedPelatih);
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:justify-center">
                <div className="bg-white rounded-t-lg p-6 w-full sm:max-w-lg sm:rounded-lg sm:mx-auto relative bottom-0 sm:bottom-auto">
                    <div className='flex justify-between items-start'>
                        <h2 className='font-bold mb-4'>Pilih Pelatih</h2>
                        <button
                            className="text-2xl text-gray-700 hover:text-gray-900"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <form action="">
                        <div className="relative mb-4">
                            <label htmlFor="pelatih" className="block mb-2">Cari Pelatih</label>
                            <input
                                type="text"
                                name="pelatih"
                                className="w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Cari Pelatih..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <CiSearch className="absolute right-3 top-11 w-7 h-7 text-gray-400" />
                        </div>
                        <div className="mt-4">
                            <p className='font-semibold mb-2'>Saran Pelatih</p>
                            {pelatihToShow.map((pelatih) => (
                                <div
                                    key={pelatih.id}
                                    className="flex items-center mb-2 cursor-pointer"
                                    onClick={() => handlePelatihToggle(pelatih)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedPelatih.includes(pelatih.nama)}
                                        onChange={() => handlePelatihToggle(pelatih)}
                                        className="mr-2"
                                    />
                                    <img src={pelatih.image} alt={pelatih.nama} className="w-10 h-10 rounded-full" />
                                    <div className="ml-3">
                                        <p className="font-semibold">{pelatih.nama}</p>
                                    </div>
                                </div>
                            ))}
                            {filteredPelatih.length > 3 && !showAll && (
                                <button
                                    type="button"
                                    className="text-blue-500 underline mt-2"
                                    onClick={() => setShowAll(true)}
                                >
                                    Show More
                                </button>
                            )}
                            {showAll && (
                                <button
                                    type="button"
                                    className="text-blue-500 underline mt-2"
                                    onClick={() => setShowAll(false)}
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                        <button
                            type="button"
                            className="bg-black text-white w-full py-3 rounded-md mt-4"
                            onClick={handleSave}
                        >
                            Simpan Pelatih
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

PelatihModal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    onSelectPelatih: PropTypes.func,
};

export default PelatihModal;
