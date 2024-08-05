import propTypes from "prop-types";
import { remove } from "../utils/ImageHelper";
import { useNavigate } from "react-router-dom";


const HeaderForm = ({ title, navigate }) => {

    const navigateTo = useNavigate();


    return (
        <div className="border-b-2 p-5 h-16 border-[#F5F5F5] bg-white flex items-center justify-between">
            <h2 className="font-semibold italic">{title}</h2>
            <button className="border-[#F5F5F5] border-2 p-2 rounded-md hover:bg-[#F5F5F5]"
                onClick={
                    () => {
                        navigateTo(navigate)
                    }
                }
            >
                <img src={remove} alt="" />
            </button>
        </div>
    );
}

export default HeaderForm;

HeaderForm.propTypes = {
    title: propTypes.string,
    navigate: propTypes.string
}

