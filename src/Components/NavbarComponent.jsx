import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { messageicon, notificationicon, xlogo, logo } from "../utils/ImageHelper";

/**
 * NavbarComponent renders a navigation bar with a logo, navigation links, and user icons.
 * It also includes a toggle for a sidebar on mobile view.
 * 
 * @component
 * @param {Object} props - Props passed to the component
 * @param {function} props.toggleSideBar - Function to toggle the sidebar
 * @param {boolean} props.isOpen - State to determine if the sidebar is open
 * @returns {JSX.Element} The rendered navbar component
 */
const NavbarComponent = ({ title, subtitle, navigate, toggleSideBar, isOpen }) => {
    return (
        <nav className="sticky top-0 z-30 h-[12vh] bg-white flex items-center justify-between px-4 py-2 shadow-md lg:text-base">
            {/* Logo and navigation links */}
            <div className="flex items-center py-2 md:ml-3">
                <NavLink to={navigate}>
                    <img src={logo} alt="Logo" className="w-8 cursor-pointer md:w-14" />
                </NavLink>
                <p className="px-2 py-3 text-lg font-bold border-r-2 border-[#D8DADD] md:px-4">PBTI</p>
                <div className="ml-2 md:ml-4">
                    <h3 className="font-semibold text-sm  md:text-xl">{title}</h3>
                    <h4 className="font-semibold text-[#B2B9C3] text-[8px] md:text-base">{subtitle}</h4>
                </div>
            </div>
            {/* Toggle button for sidebar on mobile view */}
            {isOpen ? (
                <a className="font-bold text-2xl cursor-pointer md:hidden" onClick={toggleSideBar}>
                    <img src={xlogo} alt="Close" className="w-7 h-7" />
                </a>
            ) : (
                <a className="font-bold text-2xl cursor-pointer md:hidden" onClick={toggleSideBar}>
                    <strong>☰</strong>
                </a>
            )}

            {/* User icons for messages, notifications, and profile picture */}
            <div className="p-2 hidden md:items-center md:justify-end md:flex">
                <div className="flex items-center space-x-5">
                    <img src={messageicon} alt="Messages" className="w-6" />
                    <img src={notificationicon} alt="Notifications" className="w-6" />
                    <NavLink to="/">
                        <img src="https://via.placeholder.com/150" alt="Profile" className="w-10 h-10 rounded-full" />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;

NavbarComponent.propTypes = {
    toggleSideBar: PropTypes.func,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    navigate: PropTypes.string,
};
