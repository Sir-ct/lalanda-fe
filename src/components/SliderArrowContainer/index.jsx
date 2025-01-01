export default function SliderArrowContainer({children, className}){
    return(
        <div className={`w-[35px] h-[35px] flex items-center justify-center rounded-full bg-text-green ${className} `}>
            {children}
        </div>
    )
}