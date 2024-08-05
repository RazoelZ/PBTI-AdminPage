import PropTypes from "prop-types";
import { useState } from "react";
import athletes from "../../@fake-db/athletes";

const PesertaModal = ({ show, onClose, onSelectPeserta }) => {
    const [selectedPeserta, setSelectedPeserta] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);

    // Render nothing if show prop is false
    if (!show) {
        return null;
    }

    const handlePesertaToggle = (peserta) => {
        setSelectedPeserta((prevSelected) => {
            if (prevSelected.some((item) => item.id === peserta.id)) {
                // If already selected, remove it
                return prevSelected.filter((item) => item.id !== peserta.id);
            } else {
                // Otherwise, add it
                return [...prevSelected, peserta];
            }
        });
    };

    // Filter peserta based on search query
    const filteredPeserta = athletes.filter((peserta) =>
        peserta.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Determine the number of peserta to show initially
    const pesertaToShow = showAll ? filteredPeserta : filteredPeserta.slice(0, 3);

    const handleSave = () => {
        onSelectPeserta(selectedPeserta); // Pass the selected participants to the parent component
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:justify-center">
                <div className="bg-white rounded-t-lg p-5 w-full sm:w-1/2 sm:rounded-lg sm:mx-auto relative bottom-0 sm:bottom-auto">
                    <div className='flex justify-between items-start md:text-2xl'>
                        <h2 className='font-bold'>Pilih Peserta</h2>
                        <button
                            className="text-2xl text-gray-700 hover:text-gray-900"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <form action="">
                        <div className="mt-4 max-h-80 overflow-y-auto">
                            <p className="font-semibold mb-2 md:text-xl">Daftar Peserta</p>
                            {pesertaToShow.map((peserta) => (
                                <div
                                    key={peserta.id}
                                    className="flex items-center mb-2 cursor-pointer border-b border-gray-200 pb-2"
                                    onClick={() => handlePesertaToggle(peserta)}
                                >
                                    <img src={peserta.image} alt={peserta.nama} className="w-7 h-7 rounded-full md:w-10 md:h-10" />
                                    <div className="ml-3 flex-grow">
                                        <p className="text-sm md:text-lg">{peserta.nama}</p>
                                        <div className="text-gray-500 text-[11px] tracking-tighter md:text-sm">
                                            <span>{peserta.kelas}</span>
                                            <span className="ml-2 bg-gray-200 rounded-sm p-1">{peserta.id}</span>
                                        </div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={selectedPeserta.some((item) => item.id === peserta.id)}
                                        onChange={() => handlePesertaToggle(peserta)}
                                        className="ml-2"
                                    />
                                </div>
                            ))}
                            <div className="bg-slate-200 text-xs p-2 font-semibold text-slate-500">
                                Peserta di daftar ini hanya yang memiliki tingkat Geup 10 (Putih)
                            </div>
                            {filteredPeserta.length > 3 && !showAll && (
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
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

PesertaModal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    onSelectPeserta: PropTypes.func,
};

export default PesertaModal;
