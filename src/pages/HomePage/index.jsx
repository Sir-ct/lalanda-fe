import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TeamComponent from "../../components/TeamComponent";

export default function HomePage(){
    return (
        <>
            <div className="font-['Josefin_Sans']">
                <div className="bg-bg-primary p-2 bgone">
                    <NavBar />
                    <div>
                        <div className="w-[70%] md:w-[40%] m-[20px] md:m-[100px]">
                            <h1 className="text-[25px] md:text-[75px] mb-6 leading-[1] text-[#FFF]">Real estate <span className="text-text-secondary">Agent</span> near You</h1>
                            <p className="font-300 text-[10px] md:text-[20px] text-[#FFF]">Lorerm impusm deiem anime latiture assistant filler in the cage of the family assistance Lorerm impusm deiem anime latiture assistant </p>
                            <div className="flex gap-2">
                                <div className="bg-[#FFF] text-[10px] md:text-[15px] font-[400] py-2 px-4 rounded-lg mt-2 mb-2">Duplex</div>
                                <div className="bg-[#FFF] text-[10px] md:text-[15px] font-[400] py-2 px-4 rounded-lg mt-2 mb-2">Three Bedroom Flat</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="bg-[#FFF] text-[10px] md:text-[15px] font-[400] p-2 px-4 rounded-lg mt-2 mb-2">100k-500k</div>
                                <div className="bg-[#FFF] text-[10px] md:text-[15px] font-[400] p-2 px-4 rounded-lg mt-2 mb-2">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgtwo">
                    <div className="m-10">

                        <div className="flex justify-center">
                            <img src="/mainline.png" />
                        </div>

                        <h2 className="text-center text-[18px] md:text-[40px] mt-6 mb-6">Find Properties that fit your <span className="text-text-green">Specifics</span></h2>

                        <div className="md:flex pt-4 pb-[50px] md:pb-[100px] items-center justify-between">
                            <div className="md:w-[40%]">
                                <h3 className="text-[15px] md:text-[40px] leading-[1.2] mt-4 mb-4 font-[400]">Based on <span className="text-text-green">Location</span> of your choice</h3>
                                <p className="text-center md:text-left text-[12px] md:text-[15px] leading-[1.2] font-[300] my-4">
                                    Get  Accommodation, Apartments, Flats and properties in ur desired city. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <div className="hidden md:flex gap-2 mt-2 mb-4">
                                    <div className="bg-text-green text-[#FFF] w-20 h-8 flex items-center justify-center rounded-lg"> Enugu </div>
                                    <div className="bg-text-green text-[#FFF] w-20 h-8 flex items-center justify-center rounded-lg"> Abuja </div>
                                    <div className="bg-text-green text-[#FFF] w-20 h-8 flex items-center justify-center rounded-lg"> Lagos </div>
                                </div>
                            </div>
                            <img src="/mainsecimg1.png" />
                        </div>

                        <div className="flex flex-col-reverse md:flex-row pt-4 pb-[50px] md:pb-[100px] items-center justify-between">
                            <img src="/mainsecimg2.png" />
                            <div className="md:w-[40%]">
                                <h3 className="text-[15px] md:text-[40px] leading-[1.2] mt-4 mb-4 font-[400]">Get properties within your <span className="text-text-green">Budget</span></h3>
                                <p className="text-center md:text-left text-[12px] md:text-[15px] leading-[1.2] font-[300] my-4">
                                    Get  Accommodation, Apartments, Flats and properties in ur desired city. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </div>

                        <div className="md:flex pt-4 pb-[50px] md:pb-[100px] items-center justify-between">
                            <div className="md:w-[40%]">
                                <h3 className="text-center md:text-left text-[12px] md:text-[40px] leading-[1.2] mt-4 mb-4 font-[400]">Access to <span className="text-text-green">Hotels and Guest Houses</span> for a getaway</h3>
                                <p className="text-center md:text-left text-[12px] md:text-[15px] leading-[1.2] font-[300] my-4">
                                    Get  Accommodation, Apartments, Flats and properties in ur desired city. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                            <img src="/mainsecimg2.png" />
                        </div>
                    </div>
                </div>
                <div id="about" className="bg-bg-primary bgthree">
                    <div className="m-10 pt-[200px] pb-[200px]">
                        <div className="flex justify-evenly items-center">
                            <div className="hidden md:block">
                                <img src="/logo-big.png" />
                            </div>
                            
                            <div className="md:w-[40%]">
                                <h3 className="text-center md:text-left text-[25px] md:text-[48px] text-text-green font-[400]">About</h3>
                                <p className="text-center md:text-left text-[13px] md:text-[20px] font-[400] text-text-green mt-2 mb-4">
                                    LALANDA is a real estate company that deals with all things buildings. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <p className="text-center md:text-left text-[13px] md:text-[20px] font-[400] text-text-green mt-4 mb-2">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="team" className="bgfour">
                    <div className="pt-4">
                        <h2 className="text-[48px] font-[400] text-text-green text-center mt-4 mb-4">Our Team</h2>
                        <p className="text-[20px] font-[400] text-center mb-4">Meet our team of experts in every field of real estate with experience to deliver good services to you.</p>
                        <div className="md:flex justify-evenly pb-12 mt-4 mb-4">
                            <TeamComponent />
                            <TeamComponent />
                            <TeamComponent />
                        </div>
                    </div>
                </div>
                <div id="blog" className="">
                    <div className="md:px-[100px] md:py-[100px]">
                        <div className="flex items-center bg-bg-primary p-4 md:p-8 w-[80%] justify-self-center rounded-3xl bgfive">
                            <img className="w-[20%] md:w-auto" src="/blog-section-img.png" />
                            <div>
                                <h3 className="text-[20px] md:text-[48px] text-text-green font-[400]">Blog</h3>
                                <p className="text-[10px] md:text-[25px] text-[#FFF] font-[400]">Check our blog for updates and reviews by satisfied
                                customers</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}