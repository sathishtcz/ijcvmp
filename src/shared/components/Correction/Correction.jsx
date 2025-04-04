import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Correction() {
    return (
        <>
            {/*  Journal Correction Policy:*/}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                    Journal Correction Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                    The International Journal of Computer Vision and Multimedia Processing is committed to maintaining the accuracy and integrity of published research. If errors are identified, the journal allows for corrections to ensure clarity and transparency. Minor corrections, such as typographical errors, will be updated without affecting the original content, while major corrections involving factual inaccuracies or data inconsistencies will be addressed through an official correction notice.   
                    </p>
                </div>
            </div>

            {/*Types of Corrections and Retraction and Ethical Considerations*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Types of Corrections</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Minor Corrections {" "}
                                    </span>
                                    -  Includes typographical errors, formatting issues, or minor inconsistencies that do not affect the research findings or conclusions. These are updated in the online version without an official notice.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Major Corrections{" "}
                                    </span>
                                    – Involves significant errors in data, analysis, or interpretations that may impact the validity of the research. These require a formal correction notice to inform readers of the changes.
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Retraction and Ethical Considerations</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Retraction Policy{" "}
                                    </span>
                                    – If a published article is found to have major ethical violations, fabricated data, or significant errors affecting its integrity, the journal may issue a retraction in compliance with COPE guidelines.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Author and Reader Involvement{" "}
                                    </span>
                                    –  Authors, reviewers, or readers can report errors, and the editorial team will assess the issue to determine the appropriate corrective action while maintaining transparency and academic integrity.

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
                            <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Correction Process and Implementation</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                Identification of Errors{" "}
                                </span>
                                –  Errors in published articles can range from minor typographical mistakes to significant issues affecting data accuracy, methodology, or authorship. These errors can be identified by authors, reviewers, readers, or the editorial team. Once an issue is detected, the concerned party must submit a formal request to the editorial board, clearly outlining the nature, extent, and potential impact of the error on the research findings. A systematic verification process is initiated to determine the necessity and type of correction required.
                            </p>
                        </div>
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                Editorial Review{" "}
                                </span>
                                –   Upon receiving a correction request, the editorial team conducts a thorough assessment to determine whether the error affects the credibility, reliability, or interpretation of the research. If the mistake is minor and does not alter the main conclusions of the study, it may be corrected with a simple erratum or corrigendum. However, if the error impacts the validity of the results, methodology, or ethical considerations, a more detailed review is conducted, possibly involving the original peer reviewers or additional experts. In cases of significant ethical concerns, such as data fabrication or plagiarism, further investigation may be required before a final decision is made.
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-3">
                    <button className='bg-[#493D9E] text-white rounded-lg p-2 cursor-pointer'>Submit Paper</button>
                </div>
                    </div>
                </div>
            </div>


        </>
    )
}
