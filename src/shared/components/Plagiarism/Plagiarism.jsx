import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";
import { useNavigate } from 'react-router-dom';

export default function Plagiarism() {
    const navigate = useNavigate();
    return (
        <>
            {/*Plagiarism Policy:*/}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                        Plagiarism Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                        IJCVMP upholds the highest standards of academic integrity and strictly prohibits plagiarism in any form. All submitted manuscripts undergo thorough plagiarism screening using advanced detection tools to ensure originality. Authors must properly cite all referenced works and avoid unethical practices such as self-plagiarism, duplicate submissions, or data fabrication. Any manuscript found to contain plagiarized content will be immediately rejected, and severe cases may result in a ban on future submissions.
                    </p>
                </div>
            </div>

            {/*Definition and Scope and Types of Plagiarism*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Definition and Scope</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Data Misuse{" "}
                                    </span>
                                    -  Reusing previously published data, figures, or results without proper citation or acknowledgment.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Failure to Cite{" "}
                                    </span>
                                    – Omitting references to relevant previous works that have contributed to the research.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Duplicate Publication{" "}
                                    </span>
                                    – Submitting the same research content to multiple journals or republishing previously published work without disclosure.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Substantial Reproduction{" "}
                                    </span>
                                    –  Using significant portions of another author’s work without obtaining necessary permissions.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Unauthorized Use {" "}
                                    </span>
                                    –  Copying text, ideas, or research findings from another source without proper citation or acknowledgment.
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Types of Plagiarism</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Direct Plagiarism{" "}
                                    </span>
                                    – Copying another author’s work word-for-word without citation or quotation marks, presenting it as original content.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Self-Plagiarism{" "}
                                    </span>
                                    – Republishing one’s own previously published work, data, or findings without proper citation or disclosure.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Mosaic Plagiarism {" "}
                                    </span>
                                    –  Paraphrasing or altering sections of another’s work while keeping the original structure and meaning without proper attribution.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Accidental Plagiarism {" "}
                                    </span>
                                    –   Failing to properly cite sources due to negligence or lack of awareness, leading to unintentional duplication.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Source-Based Plagiarism {" "}
                                    </span>
                                    –  Citing incorrect or fabricated sources or misrepresenting referenced materials in the manuscript.
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
                            <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Definition and Scope</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                Review and Investigation{" "}
                                </span>
                                – If plagiarism is detected, the editorial team conducts a thorough investigation, including reviewing sources, comparing text similarity, and consulting independent reviewers if necessary. Authors may be asked to provide clarifications or corrections.
                            </p>
                        </div>
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                Author Responsibility{" "}
                                </span>
                                – Authors are expected to ensure the originality of their work before submission. Proper citation of all sources, including self-citations, is mandatory. Any failure to comply with ethical publishing standards may lead to disciplinary actions.
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-3">
                    <button onClick={() =>navigate('/authorguidelinespage')} className='bg-[#493D9E] text-white rounded-lg p-2 cursor-pointer'>Review Guidelines</button>
                </div>
                    </div>
                </div>
            </div>


        </>
    )
}
