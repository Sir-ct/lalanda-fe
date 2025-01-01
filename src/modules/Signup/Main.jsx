import EyeIcon from "../../Icons/EyeIcon";
import LockIcon from "../../Icons/LockIcon";
import MailIcon from "../../Icons/MailIcon";
import LocationIcon from "../../Icons/LocationIcon"
import { useNavigate } from "react-router";

export default function Main({role}){
    const navigate = useNavigate()

    function signUp(e){
        e.preventDefault()
        navigate("/listings")
    }
    
    return(
        <div className="bg-bg-primary p-[20px] md:py-[100px] md:h-[100vh]">
            <div className="md:flex justify-evenly items-center">
                <img className="hidden md:block" src="/logo-big.png" />
                <img className="md:hidden mx-auto my-8" src="/Logo.png" />
                <div className="md:w-[30%]">
                    <h3 className="text-[20px] md:text-[36px] text-center font-[400] md:font-[700] text-text-green">User Sign up</h3>
                    <form onSubmit={signUp}>
                        <InputField>
                            <MailIcon />
                            <input type="email" placeholder="Email Address" className="outline-0 border-0" />
                        </InputField>
                        <InputField>
                            <LockIcon />
                            <input type="password" placeholder="Password" className="outline-0 border-0" />
                            <div className="relative left-[40%]">
                                <EyeIcon />
                            </div>
                        </InputField>
                        <InputField>
                            <LocationIcon />
                            <input type="text" placeholder="State" className="outline-0 border-0" />
                        </InputField>
                        <InputField>
                            <LocationIcon />
                            <input type="text" placeholder="City" className="outline-0 border-0" />
                        </InputField>

                        <div className="flex items-center justify-center gap-4">
                            <input type="checkbox" />
                            <p className="text-[13px] font-[700] text-[#FFF]">I have read and agreed to the terms and conditions</p>
                        </div>

                        <div className="flex justify-center">
                            <button className="w-[200px] text-[20px] font-[700] text-[#FFF] py-2 px-12 my-4 bg-gradient-to-r from-[#0FFCB8] to-[#03C78C] rounded-full">
                                Sign Up
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

function InputField({children}){
    return(
        <div className="flex my-8 gap-2 items-center bg-[#FFF] p-2 px-4 rounded-full">
            {children}
        </div>
    )
}