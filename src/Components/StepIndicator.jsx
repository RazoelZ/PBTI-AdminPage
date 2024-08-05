import PropTypes from "prop-types";

/**
 * StepIndicator component to show the progress of a multi-step form.
 * 
 * @component
 * @param {Object} props - Props passed to the component
 * @param {number} props.currentStep - The current step of the form
 * @returns {JSX.Element} The rendered step indicator component
 */
const StepIndicator = ({ currentStep }) => {
    return (
        <div className="flex justify-between items-center mb-5">
            {/* Step 1 Indicator */}
            <div className="relative">
                <div className="relative flex items-center space-x-2">
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 2 ? "bg-[#F7F8FA] text-[#B2B9C3]" : "text-black"} mx-1`}
                    >
                        1
                    </div>
                    {currentStep === 1 ? (
                        <span className={`text-sm ${currentStep === 1 ? "text-black" : "text-gray-500"}`}>
                            Detail
                        </span>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            {/* Divider Line */}
            <div className="h-0.5 w-1/2 bg-gray-300 md:w-full md:mx-5"></div>

            {/* Step 2 Indicator */}
            <div className="relative">
                <div className="relative flex items-center space-x-2">
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === 2 ? "bg-[#F7F8FA] text-black" : "text-[#B2B9C3]"} mx-1`}
                    >
                        2
                    </div>
                    {currentStep === 1 ? (
                        <></>
                    ) : (
                        <span className={`text-sm ${currentStep === 2 ? "text-black" : "text-gray-500"}`}>
                            Pembayaran
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

StepIndicator.propTypes = {
    /**
     * The current step of the form
     */
    currentStep: PropTypes.number.isRequired
};

export default StepIndicator;
