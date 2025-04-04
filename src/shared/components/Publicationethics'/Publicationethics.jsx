import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Publicationethics() {
    return (
        <>
            {/*Publication Ethics:*/}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                    Publication Ethics:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                    The International Journal of Computer Vision and Multimedia Processing is committed to maintaining the highest ethical standards in publishing. All submitted manuscripts must adhere to principles of integrity, transparency, and academic honesty. Authors are required to ensure the originality of their work, provide accurate data, and properly cite sources to avoid plagiarism. Fabrication, falsification, or unethical research practices are strictly prohibited. The journal follows a rigorous peer review process to uphold research quality and fairness. Editors and reviewers must evaluate submissions based on merit, without bias or conflict of interest.
                    </p>
                </div>
            </div>

            {/*Integrity and Originality in Research*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Initial Manuscript Evaluation</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>Authors must ensure that all submitted manuscripts are original, free from plagiarism, and adhere to ethical research practices. Proper citations and references should be provided for all borrowed content, and any potential conflicts of interest must be disclosed.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Ethical Research Conduct{" "}
                        </span>
                        – Research must adhere to ethical guidelines, including obtaining necessary approvals for studies involving human or animal subjects and ensuring participant confidentiality.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Transparency in Methods{" "}
                        </span>
                        –  Authors must clearly describe their research methodology to allow reproducibility and verification by other researchers in the field.
                    </p>

                </div>
            </div>

            {/*Fair and Transparent Peer Review*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Double-Blind Peer Review</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>The journal follows a rigorous peer review process to maintain the quality and credibility of published research. Editors and reviewers must evaluate submissions objectively, without bias or personal interest. Confidentiality must be upheld, and any ethical concerns or misconduct should be reported promptly.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Unbiased Evaluation{" "}
                        </span>
                        –  All submissions undergo a rigorous peer review process, ensuring that research is assessed purely on its academic merit, free from personal, institutional, or regional biases.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Conflict of Interest Disclosure{" "}
                        </span>
                        –   Reviewers must disclose any conflicts of interest that could influence their judgment and must recuse themselves from evaluating submissions where impartiality cannot be guaranteed.
                    </p>

                </div>
            </div>

            {/*Accountability and Ethical Compliance*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Editorial Decision and Publication</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>All stakeholders, including authors, reviewers, and editors, are responsible for maintaining ethical publishing standards. Research misconduct, duplicate submissions, or unethical experimentation will result in corrective measures, including retraction or rejection of the manuscript. The journal upholds strict ethical policies to ensure academic integrity and credibility in scientific publishing.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Author Responsibility{" "}
                        </span>
                        – Authors are accountable for the integrity and accuracy of their research, ensuring that their work follows ethical research practices and does not include fabricated, falsified, or plagiarized content.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Retraction and Correction Policy{" "}
                        </span>
                        –  If ethical violations or significant errors are discovered post-publication, the journal reserves the right to issue retractions, corrections, or clarifications to maintain the credibility of published research.
                    </p>

                </div>
            </div>


            <hr className="mt-6 mb-6" />

            {/*Honest Reporting and  Confidentiality*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Honest Reporting</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Authors must present their research findings truthfully, without fabrication, falsification, or selective reporting. Data should be accurately represented, and any limitations or uncertainties must be disclosed to maintain transparency and trust in scholarly publishing.
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Confidentiality</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Editors and reviewers must keep all submitted manuscripts confidential and not use the information for personal or competitive advantage. The peer review process should remain unbiased and ensure that decisions are based solely on academic merit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
