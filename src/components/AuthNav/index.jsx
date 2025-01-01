import SearchIcon from "../../Icons/SearchIcon";

export default function AuthNav(){
    return(
        <div className="flex justify-evenly items-center bg-bg-primary p-4">
            <a href="/" className="w-[150px]">
                <img className="w-[100%]" src="/Logo.png" />
            </a>
            <div className="md:w-[40%] flex justify-between bg-white items-center rounded-full py-2 px-4">
                <SearchIcon />
                <input placeholder="Search for properties" className="w-full outline-0 mx-2 border-0" />
                <div className="bg-text-green px-4 py-[2px] rounded-full text-white shadow-[2px_2px_4px_0_#0D4D3533]">
                    Search
                </div>
            </div>
            <div>
                <img src="/default-profile.png" />
            </div>
        </div>
    )
}