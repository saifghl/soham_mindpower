import { ArrowLeft, ArrowRight } from "lucide-react";
import testimonialImg from "../images/testimonial-profile-img.png";

function TestimonialSection() {

    return (
        <>
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
        </>
    )
}

export default TestimonialSection;