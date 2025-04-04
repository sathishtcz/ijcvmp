import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Malpractice() {
    return (
        <>
            {/* Malpractice Policy:*/}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                     Malpractice Policy:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                    Authors must ensure that their research is original, properly cited, and free from any deceptive practices. Any form of data manipulation, misrepresentation of findings, or duplicate submissions is strictly prohibited. The editorial team rigorously evaluates all submissions for potential malpractice, utilizing plagiarism detection software and expert reviews to verify authenticity.    
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Author's Responsibilities</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Originality and Authenticity{" "}
                                    </span>
                                    - Authors must ensure that their submitted manuscripts are entirely original and free from any form of fabrication, falsification, or plagiarism. Any borrowed ideas, data, or text must be properly cited to acknowledge the original sources.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Responsibility for Corrections{" "}
                                    </span>
                                    – If significant errors or inaccuracies are discovered in a published work, authors must promptly notify the journal and cooperate in issuing necessary corrections or retractions to maintain academic integrity.
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Editor's Responsibilities</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Fair and Unbiased Evaluation{" "}
                                    </span>
                                    – Editors must assess submitted manuscripts solely based on their academic merit, originality, and relevance to the journal’s scope, without any discrimination based on the author’s race, gender, nationality, or institutional affiliation.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                    Confidentiality and Integrity{" "}
                                    </span>
                                    – Editors must maintain the confidentiality of submitted manuscripts and must not disclose any details to unauthorized individuals. Any conflicts of interest should be declared to ensure an impartial review process.
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
                            <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Reviewer's Responsibilities</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                Objective and Constructive Evaluation{" "}
                                </span>
                                – Reviewers must provide fair, unbiased, and constructive feedback on the manuscript, focusing on its originality, methodology, clarity, and contribution to the field. Personal criticism of the author is not acceptable.
                            </p>
                        </div>
                        <div className="flex gap-1 ">
                            <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                <span className="text-[#493D9E] poppins-medium">
                                Identifying Ethical Concerns{" "}
                                </span>
                                –  Reviewers should check for ethical issues such as plagiarism, data fabrication, improper citations, and redundant publication. Any suspected misconduct should be reported to the editorial board for further investigation.
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-3">
                        <a href="https://www.ijcvmp.com/ijcvmp/index.php/ijcvmp/about/submissions" target="_blank" rel="noopener noreferrer">
                    <button className='bg-[#493D9E] text-white rounded-lg p-2 cursor-pointer'>Submit Paper</button>
                    </a>
                </div>
                    </div>
                </div>
            </div>


        </>
    )
}
