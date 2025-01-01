export default function SignupCard({className, role, onCardClick}){
    return(
        <>
            <div onClick={()=>{onCardClick(role)}} className={`md:w-[25%] rounded-3xl m-4 p-12 bg-bg-primary flex flex-col items-center ${className}`}>
                <img className="w-[80%]" src="/team-placeholder.png" />
                <p className="text-[24px] text-[#FFF] m-4">{role}</p>
            </div>
        </>
    )
}