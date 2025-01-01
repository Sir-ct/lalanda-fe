import AddressIcon from "../../Icons/AddressIcon";
import BedIcon from "../../Icons/BedIcon";
import CompassIcon from "../../Icons/CompassIcon"

export default function PropertyCard({className}){
    return(
        <div className={`p-4 bg-[#0FFCB833] rounded-lg ${className}`}>
            <img className="w-[100%] rounded-t-lg" src="/propcard-placeholder.jpeg" />
            <h3 className="text-[20px] font-[400] my-2">3 bedroom 1 storey duplex</h3>
            <div className="flex items-center gap-2">
                <AddressIcon />
                <p className="text-[10px] font-[300]">
                    No. 20 Omodili-awka, Nsukka Enug
                </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-between my-4">
                <Features>
                    <BedIcon />
                    3 Bedroom
                </Features>
                <Features>
                    <BedIcon />
                    2 toilets
                </Features>
                <Features>
                    <CompassIcon />
                    1,250 sqf
                </Features>
            </div>
            <div className="flex justify-end">
                <div className="bg-text-green text-white py-2 px-4 rounded-full shadow-[2px_2px_4px_0_#0D4D3533]">
                    View
                </div>
            </div>
        </div>
    )
}

function Features({children}){
    return(
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg text-[10px] font-[300] font-['Jost']">
            {children}
        </div>
    )
}