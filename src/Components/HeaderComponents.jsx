import { logo } from '../utils/ImageHelper';
import PropTypes from 'prop-types';

const HeaderComponents = ({ title, cabangdojang }) => {
    return (
        <div className=" bg-white flex items-center justify-between py-2 border-b-2 border-slate-100 lg:text-base">
            {/* Logo and navigation links */}
            <div className="flex items-center py-2 md:ml-3">
                <img src={logo} alt="Logo" className="w-8 cursor-pointer md:w-14" />
                <p className="px-2 py-3 text-lg font-bold border-r-2 border-[#D8DADD] md:px-4">PBTI</p>
                <div className="ml-2 md:ml-4">
                    <h3 className="font-semibold text-sm mb-2 md:text-lg">{title}</h3>
                    <h4 className="font-semibold text-[#B2B9C3] text-[8px] md:mt-2 md:text-base">{cabangdojang}</h4>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponents;

HeaderComponents.propTypes = {
    title: PropTypes.string.isRequired,
    cabangdojang: PropTypes.string.isRequired
};