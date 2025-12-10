import { useState } from "react";
import heroImg from "../images/Home-Page-Top-Section.png";
import memory1 from "../images/memory-1.png";
import memory2 from "../images/memory-2.png";
import memory3 from "../images/memory-3.png";
import memory4 from "../images/memory-4.png";
import memory5 from "../images/memory-5.png";

function Gallery() {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const filters = ['All', 'Workshops', 'Events', 'Training Program'];

    return (
        <>
        <div className="text-black font-inter">
            <div
                className="text-black bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="pt-[212px] pb-[247px] font-inter text-white flex flex-col gap-[56px] items-center justify-center">
                    <div className="text-[48px] font-extrabold">"Memories That Tell Our Story."</div>
                    <div className="flex gap-4">
                        <div className="text-center align-middle text-[14px] text-white bg-[#0057B8] rounded-md px-[18px] py-[14px] cursor-pointer font-semibold font-inter">Book Session</div>
                        <div className="text-center align-middle text-[14px] text-black bg-white rounded-md font-semibold font-inter px-[18px] py-[15px] cursor-pointer">Contact Me</div>
                    </div>
                </div>
            </div>
            <div className="mt-[17px]" >
                <div className="flex gap-[16px] font-semibold items-center justify-center">
                    {filters.map((filter) => (
                        <div className={`px-[10px] py-[12px] rounded-md cursor-pointer ${selectedFilter == filter ? 'text-white bg-[#0057B8]' : 'border-[1px] border-[#5DC9FF]'} `} key={filter} onClick={() => setSelectedFilter(filter)} >{filter}</div>
                    ))}
                </div>
            </div>
            <div className="pt-[80px] px-[167px] pb-[20px] ">
                <div className="flex flex-col items-center">
                    {/* <div className="text-[36px] font-extrabold">“Memories That Tell Our Story.”</div> */}
                    <div className="flex gap-[22px] h-[730px] mt-[72px] mb-[20px] ">
                        <div className="flex flex-col gap-[22px] ">
                            <div className="w-full h-[50%] rounded-lg overflow-hidden">
                                <img src={memory1} alt="" />
                            </div>
                            <div className="w-full h-[50%] rounded-lg overflow-hidden">
                                <img src={memory5} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] ">
                            <div className="w-full h-[65%] rounded-lg overflow-hidden">
                                <img src={memory3} alt="" />
                            </div>
                            <div className="w-full h-[35%] rounded-lg overflow-hidden">
                                <img src={memory2} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] ">
                            <div className="w-full h-[35%] rounded-lg overflow-hidden">
                                <img src={memory4} alt="" />
                            </div>
                            <div className="w-full h-[65%] rounded-lg overflow-hidden">
                                <img src={memory5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[22px] h-[730px] mb-[20px] ">
                        <div className="flex flex-col gap-[22px] ">
                            <div className="w-full h-[50%] rounded-lg overflow-hidden">
                                <img src={memory1} alt="" />
                            </div>
                            <div className="w-full h-[50%] rounded-lg overflow-hidden">
                                <img src={memory5} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] ">
                            <div className="w-full h-[65%] rounded-lg overflow-hidden">
                                <img src={memory3} alt="" />
                            </div>
                            <div className="w-full h-[35%] rounded-lg overflow-hidden">
                                <img src={memory2} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[22px] ">
                            <div className="w-full h-[35%] rounded-lg overflow-hidden">
                                <img src={memory4} alt="" />
                            </div>
                            <div className="w-full h-[65%] rounded-lg overflow-hidden">
                                <img src={memory5} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center" >
                        <div className="text-center align-middle text-[14px] text-black font-semibold border-[1px] border-[#0057B8] rounded-md px-[18px] py-[12.5px] cursor-pointer">View All</div>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Gallery;