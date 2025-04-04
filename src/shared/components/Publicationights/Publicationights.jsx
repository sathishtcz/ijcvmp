import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Publicationights() {
    return (
        <>
            {/*  Publicationights*/}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                        Publication Rights Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                        The International Journal of Computer Vision and Multimedia Processing upholds a clear and transparent Publication Rights Policy to ensure the protection of authors' intellectual property while granting the journal the necessary rights for dissemination. This policy defines the ownership, licensing, and distribution rights of all published articles, maintaining a balance between author rights and journal responsibilities.
                    </p>
                </div>
            </div>

            {/*Publication Rights and Author Responsibilities and Usage Rights and Distribution Policies*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Publication Rights and Author Responsibilities</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Ownership of Work{" "}
                                    </span>
                                    -   Authors retain full copyright ownership of their submitted research while granting IJCVMP the necessary rights to publish, distribute, and archive their work in digital and print formats.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        License for Publication{" "}
                                    </span>
                                    – Authors provide IJCVMP with a non-exclusive license to disseminate their research while maintaining their rights to share, republish, and use their work for academic or professional purposes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Usage Rights and Distribution Policies</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Access and Availability{" "}
                                    </span>
                                    – Published articles are made available either under an open-access or subscription-based model, depending on the journal's policy.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Third-Party Usage{" "}
                                    </span>
                                    – Any reproduction, redistribution, or adaptation of published work by third parties must be done with proper authorization from both the author and IJCVMP.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white mt-5">
                <div className="">

                    <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                        <div className=" flex items-center justify-center">
                            <img src={Vision} className="w-[45px] h-[45px]" />
                            <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Copyright Protection and Ethical Compliance</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                    Intellectual Property Safeguards{" "}
                                </span>
                                – IJCVMP ensures that all published content is protected under copyright laws to prevent unauthorized reproduction, distribution, or modification. The journal actively monitors and enforces its rights to maintain the originality and integrity of published research. Authors must be aware that any unauthorized usage of their work, whether by individuals or organizations, may lead to legal action. IJCVMP reserves the right to take necessary measures to protect intellectual property, ensuring that all contributions remain exclusive to the journal unless otherwise permitted under license agreements.
                            </p>
                        </div>
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                    Ethical Publishing Standards{" "}
                                </span>
                                –   Authors must adhere to ethical guidelines by ensuring their work is original and properly cited. Plagiarism, self-plagiarism, or any form of copyright infringement is strictly prohibited, and violations may result in retraction, public notification, or legal consequences. IJCVMP promotes ethical publishing practices by implementing strict plagiarism checks and ensuring that submitted manuscripts undergo rigorous screening. Authors should be transparent about any prior publications or overlapping submissions, as failure to disclose such details can lead to disqualification.
                            </p>
                        </div>
                        {/* <div className="flex justify-center items-center mt-3">
                            <button className='bg-[#493D9E] text-white rounded-lg p-2 cursor-pointer'>Submit Paper</button>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}
