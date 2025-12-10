import heroImg from "../images/Home-Page-Top-Section.png";
import testimonialImg from "../images/testimonial-profile-img.png";
import memory1 from "../images/memory-1.png";
import memory2 from "../images/memory-2.png";
import memory3 from "../images/memory-3.png";
import memory4 from "../images/memory-4.png";
import memory5 from "../images/memory-5.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Home() {
    return (
        <>
        <div className="font-inter text-black">
            <div
                className="text-black bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="pt-[212px] pb-[247px] font-inter text-white flex flex-col gap-[32px] items-center justify-center">
                    <div className="text-[48px] font-extrabold">Dr. Sachin Potdar</div>
                    <div>
                        <div className="text-[24px]">Mind Trainer | Life Coach | Hypnotherapy Expert | Author</div>
                        <div className="text-[24px]">"Empowering Minds, Transforming Lives"</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-center align-middle text-[14px] text-white bg-[#0057B8] rounded-md px-[18px] py-[14px] cursor-pointer font-semibold font-inter">Book Session</div>
                        <div className="text-center align-middle text-[14px] text-black bg-white rounded-md font-semibold font-inter px-[18px] py-[15px] cursor-pointer">Contact Me</div>
                    </div>
                </div>
            </div>
            <div className="px-[167px] py-[80px]">
                <div className="flex flex-col">
                    <div className="flex items-end justify-between mb-[48px]">
                        <div className="text-[48px] font-extrabold text-start ">"Healing Stories from the Hearts We've Served."</div>
                        <div className="flex gap-[16px] items-start justify-end" >
                            <div className="border-[1px] border-[#E1E4ED] rounded-lg cursor-pointer bg-[#F8FAFF] w-[40px] h-[40px] flex items-center justify-center  ">
                                <ArrowLeft size={22} color="black" />
                            </div>
                            <div className="border-[1px] border-[#E1E4ED] rounded-lg cursor-pointer bg-black w-[40px] h-[40px] flex items-center justify-center  ">
                                <ArrowRight size={22} color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[32px] p-[40px] border-[1px] border-[#F1F3F7] rounded-lg mb-[31px] ">
                        <div className="w-[300px] rounded-lg overflow-hidden">
                            <img src={testimonialImg} alt="testimonial" />
                        </div>
                        <div className="flex flex-col px-[40px] pt-[34px] bg-[#F1F3F7] rounded-lg ">
                            <div></div>
                            <div className="text-[30px] font-extrabold mt-[48px] mb-[32px] " >- Rohit Kulkarni, Software Engineer</div>
                            <div className="text-[16px] ">"Dr. Potdar helped me overcome years of performance anxiety. His mind-training sessions gave me clarity, focus, and the confidence I had lost. Today, I handle stressful situations with ease and perform better at work."</div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-fit px-[18px] py-[12.5px] border-[1px] border-[#0057B8] rounded-md text-center align-middle text-[14px] text-[#0057B8] font-semibold font-inter cursor-pointer">
                            View All
                        </div>

                    </div>

                </div>
            </div>
            <div className="pt-[80px] px-[167px] pb-[20px] ">
                <div className="flex flex-col items-center">
                    <div className="text-[36px] font-extrabold">“Memories That Tell Our Story.”</div>
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
                    <div className="flex justify-center" >
                        <div className="text-center align-middle text-[14px] text-black font-semibold border-[1px] border-[#0057B8] rounded-md px-[18px] py-[12.5px] cursor-pointer">View All</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;