import logo from "../assets/images/logo/logo.png";
import taekwondo from "../assets/images/taekwondo2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * LoginPage component renders the login page of the Taekwondo Admin Application.
 * It includes a navigation bar with a logo and the organization's name, and a login form.
 * 
 * @component
 */
const LoginPage = () => {

    // Hook to navigate programmatically
    const navigateTo = useNavigate();

    // State to manage form values
    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    });

    /**
     * Handles the login process.
     * Currently, it redirects the user to the dashboard.
     */
    const login = (e) => {
        e.preventDefault();
        console.log("Login button clicked!");
        console.log("Form values:", formValues);

        // Check if the username is "orang" or "kabupaten"
        if (formValues.username === "dojang") {
            navigateTo("/dashboardDojang");
        } else if (formValues.username === "kabupaten") {
            navigateTo("/dashboardkabupaten");
        } else if (formValues.username === "pusat") {
            navigateTo("/dashboardpusat");
        } else {
            alert("Username atau password salah!");
        }
    };

    // Event handlers
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    // JSX
    return (
        <>
            {/* Navigation bar with logo and organization name */}
            <nav className="relative top-0 z-30 h-[12vh] flex items-center justify-between px-4 py-2 shadow-md lg:text-base">
                <div className="flex items-center py-2 md:ml-3">
                    <img src={logo} alt="Logo" className="w-14 cursor-pointer" />
                    <p className="px-4 py-3 text-lg font-bold border-r-2 border-[#D8DADD]">
                        PBTI
                    </p>
                    <p className="ml-4 font-semibold">
                        Pengurus Besar Taekwondo Indonesia
                    </p>
                </div>
            </nav>

            {/* Main content area */}
            <div className="flex flex-col items-center justify-center w-full h-[85vh] px-5">
                <div className="w-full md:w-1/2">
                    {/* Login form */}
                    <form className="grid grid-cols-1 gap-5 bg-white rounded-lg md:shadow-lg md:p-5" onSubmit={login}>
                        <div>
                            {/* Image */}
                            <div className="w-full h-24 mb-5 md:h-28 lg:h-44">
                                <img src={taekwondo} alt="Taekwondo Image" className="w-full h-full m-auto rounded-lg object-cover" />
                            </div>

                            {/* Email input */}
                            <label htmlFor="username" className="text-sm font-semibold">
                                Email Anda
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-3 py-2 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formValues.username}
                                onChange={handleInputChange}
                            />

                            <div className="mt-4"></div>

                            {/* Password input */}
                            <label htmlFor="password" className="text-sm font-semibold">
                                Kata Sandi
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-2 py-2 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formValues.password}
                                onChange={handleInputChange}
                            />

                            {/* Remember me checkbox and forgot password link */}
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember" className="ml-2">
                                        Ingat Saya
                                    </label>
                                </div>
                                <a href="#" className="font-semibold hover:underline">
                                    Lupa Password?
                                </a>
                            </div>
                        </div>

                        {/* Login and create new account buttons */}
                        <div className="font-semibold mt-20 md:mt-0">
                            <button
                                type="submit"
                                className="w-full py-3 mt-5 bg-[#DFE0E2] hover:bg-black hover:text-white rounded-md focus:outline-none"
                            >
                                Masuk
                            </button>
                            <button
                                type="button"
                                className="w-full py-3 mt-2 hover:bg-black hover:text-white rounded-md focus:outline-none"
                            >
                                Buat Akun Baru
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
