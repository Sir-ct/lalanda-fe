import AuthNav from "../../components/AuthNav";
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar";
import PropertyCard from "../../components/PropertyCard";
import SliderArrowContainer from "../../components/SliderArrowContainer";
import LeftIcon from "../../Icons/LeftIcon";
import RightIcon from "../../Icons/RightIcon"

export default function ListPage(){
    return(
        <div>
            <div className="font-['Josefin_Sans']">
                <div className="hidden md:block">
                    <AuthNav />
                </div>
                <div className="md:hidden">
                    <NavBar />
                </div>
                <div className="featured-listing-bg">
                    <div className="relative">
                        <SliderArrowContainer className={'absolute left-10 top-[40%]'}>
                            <LeftIcon />
                        </SliderArrowContainer>
                        <SliderArrowContainer className={'absolute right-10 top-[40%]'}>
                            <RightIcon />
                        </SliderArrowContainer>
                        <div className="md:w-[80%] m-auto py-8 px-8 flex items-center justify-between gap-4">
                            <div className="w-[60%] md:w-[42%]">
                                <h2 className="text-[30px] md:text-[60px] text-white font-[400]">Featured</h2>
                                <p className="text-[15px] md:text-[32px] font-400 text-white">5 bedroom duplex with 4 bath, 2 Garage and 2 pools</p>
                            </div>
                            <div className="relative hidden md:block">
                                <SliderArrowContainer className={'absolute top-[50%] md:left-[-15px]'}>
                                    <LeftIcon />
                                </SliderArrowContainer>
                                <SliderArrowContainer className={'absolute top-[50%] right-[-15px]'}>
                                    <RightIcon />
                                </SliderArrowContainer>
                                <div className="border-[15px] rounded-lg border-white">
                                    <img src="/featured-placeholder.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[80%] m-auto">
                        <div className="flex justify-between items-end md:items-center py-10">
                            <h2 className="text-[15px] md:text-[32px] font-[400]">LATEST PROPERTIES</h2>
                            <div className="text-[7px] md:text-[15px] font-[400] py-2 px-2 md:px-8 rounded-full shadow-[2px_4px_5px_0px_#000000]">
                                <select>
                                    <option>APARTMENT</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 py-4">
                            <PropertyCard />
                            <PropertyCard />
                            <PropertyCard />
                            <PropertyCard />
                        </div>
                    </div>
                </div>
                <Footer showTopCurve={false} />
            </div>
        </div>
    )
}