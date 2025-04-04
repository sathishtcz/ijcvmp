import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Peerreview() {
    return (
        <>
            {/*Peer Review Process: */}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-extrabold text-xl">
                    Peer Review Process:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                    The International Journal of Computer Vision and Multimedia Processing follows a rigorous and transparent peer review process to ensure the publication of high-quality research. All submitted manuscripts undergo an initial editorial assessment to check for relevance, originality, and adherence to submission guidelines. Following this, the paper is subjected to a double-blind peer review, where expert reviewers evaluate the manuscript based on its technical quality, novelty, clarity, and contribution to the field. Reviewers provide constructive feedback, and authors may be required to revise and improve their work based on these suggestions.
                    </p>
                </div>
            </div>

            {/*Initial Manuscript Evaluation*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Initial Manuscript Evaluation</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>All submitted manuscripts undergo a preliminary assessment by the editorial team to ensure they align with the journal’s scope, originality, and formatting guidelines. Papers that do not meet the basic criteria may be rejected or sent back for modifications before proceeding to the next stage.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Manuscript Assessment and Compliance{" "}
                        </span>
                        – Submitted manuscripts are initially reviewed to ensure they align with the International Journal of Computer Vision and Multimedia Processing guidelines. Authors retain full copyright ownership of their work while granting the journal a non-exclusive right to publish, distribute, and archive the content in both digital and print formats.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Editorial Review and Formatting {" "}
                        </span>
                        –  International Journal of Computer Vision and Multimedia Processing reserves the right to make necessary editorial, formatting, and structural modifications to ensure that submitted manuscripts meet academic and publishing standards.
                    </p>

                </div>
            </div>

            {/*Double-Blind Peer Review*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Double-Blind Peer Review</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>Selected manuscripts are reviewed by independent experts in the field through a double-blind peer review process. Reviewers assess the paper’s technical accuracy, research significance, clarity, and contribution to the domain of computer vision and multimedia processing. Constructive feedback is provided to enhance the quality of the submission.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Fair and Unbiased Evaluation{" "}
                        </span>
                        – All submitted manuscripts undergo a rigorous double-blind peer review process to ensure a fair and unbiased assessment. Reviewers and authors remain anonymous to maintain objectivity, and evaluations are based solely on the manuscript’s quality, originality, and contribution to the field.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Thorough Evaluation and Research Integrity {" "}
                        </span>
                        –  All submitted manuscripts undergo a meticulous double-blind peer review process to ensure the accuracy, validity, and reliability of the research. Reviewers assess the methodology, data integrity, and conclusions to uphold high scientific standards and prevent the dissemination of misleading or erroneous information.
                    </p>

                </div>
            </div>

            {/*Editorial Decision and Publication*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Editorial Decision and Publication</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>Based on the reviewers’ recommendations, the editorial board makes the final decision regarding acceptance, revision, or rejection. Authors are required to address the reviewers’ comments and resubmit their revised manuscript for further evaluation. Once approved, the article undergoes final formatting and is published online, ensuring wide accessibility to researchers and professionals.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Adherence to Ethical Standards{" "}
                        </span>
                        – All submitted manuscripts must comply with the ethical publishing guidelines set by International Journal of Computer Vision and Multimedia Processing. This includes maintaining transparency in research methodologies, ensuring data authenticity.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Author Responsibility and Legal Compliance{" "}
                        </span>
                        – International Journal of Computer Vision and Multimedia Processing (IJCVMP) holds authors fully accountable for the content of their published work.
                    </p>

                </div>
            </div>

            <hr className="mt-6 mb-6" />

            {/*Requirements and  Benefits*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold text-xl'>Requirements</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                The International Journal of Computer Vision and Multimedia Processing requires all submitted manuscripts to be original, well-structured, and free from plagiarism. Authors must adhere to ethical research practices, ensuring transparency in methodology, proper citation of sources, and accurate presentation of data.
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
                                <p className='text-[#493D9E] poppins-bold text-xl'>Benefits</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                The peer review process ensures that published research meets high academic and ethical standards. Authors receive constructive feedback from experts, improving the clarity, credibility, and quality of their work. A successful peer review enhances the research’s academic recognition, increasing its visibility and citation potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
