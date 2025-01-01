import SignupCard from "../../components/SignupCard";

export default function Base({setRole}){
    return(
        <div className="bg-bg-primary py-[100px]">
            <div className="flex justify-center items-center">
                <img src="/logo-big.png" />
            </div>
            <div className="text-center text-[#FFF] text-[32px] py-4">
                Sign up as
            </div>
            <div className="md:flex justify-evenly">
                <SignupCard
                    onCardClick={setRole}
                    role="Agent"
                    className="cursor-pointer shadow-[10px_10px_20px_0_#0FFCB880] hover:shadow-[0_35px_60px_-15px_rgba(0,255,0,0.3)]" 
                />
                <SignupCard
                    onCardClick={setRole}
                    role="Buyer" 
                    className="cursor-pointer shadow-[10px_10px_20px_0_#0FFCB880] hover:shadow-[0_35px_60px_-15px_rgba(0,255,0,0.3)]" 
                />
            </div>
        </div>
    )
}