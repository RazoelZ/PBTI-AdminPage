import { useState } from "react";
import PropTypes from "prop-types";
import { accordion } from "../utils/ImageHelper";

const Accordion = ({ title, pelatihList }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="relative flex items-center" onClick={toggleAccordion}>
                <label className="block font-semibold mb-5">{title}</label>
                {
                    isOpen ? <img src={accordion} alt="accordion" className="w-3 h-2 absolute top-4 right-4 transform rotate-180" />
                        : <img src={accordion} alt="accordion" className="w-3 h-2 absolute top-4 right-4" />
                }
            </div>
            <div className="relative flex items-center cursor-pointer" onClick={toggleAccordion}>
                {
                    isOpen ? <img src={pelatihList[0].image} alt={pelatihList[0].nama} className="w-10 h-10 rounded-full" />
                        : <div className="relative flex items-center">
                            <img src={pelatihList[0].image} alt={pelatihList[0].nama} className="w-10 h-10 rounded-full" />
                            <img src={pelatihList[1].image} alt={pelatihList[1].nama} className="w-10 h-10 rounded-full -ml-4 border border-white" />
                        </div>
                }
                <div className="ml-3">
                    <p className="font-semibold">
                        {isOpen ? pelatihList[0].nama : `${pelatihList[0].nama} dan ${pelatihList.length - 1} lainnya`}
                    </p>
                </div>
            </div>
            {isOpen && (
                <div className="mt-2 space-y-2">
                    {pelatihList.slice(1).map((pelatih) => (
                        <div key={pelatih.id} className="flex items-center">
                            <img src={pelatih.image} alt={pelatih.nama} className="w-10 h-10 rounded-full" />
                            <div className="ml-3">
                                <p className="font-semibold">{pelatih.nama}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Accordion;

Accordion.propTypes = {
    pelatihList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};
