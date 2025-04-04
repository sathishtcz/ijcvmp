import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Articleprocessing() {
    return (
        <>
            {/*Article Processing:*/}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-extrabold text-xl">
                    Article Processing:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                    The International Journal of Computer Vision and Multimedia Processing is wholeheartedly dedicated to delivering an exceptionally thorough, highly efficient, and meticulously structured article processing experience, ensuring that your pioneering submissions—spanning the vast and dynamic fields of computer vision, multimedia technologies, image analysis, and beyond—are subjected to a rigorous peer-review process, expertly refined through comprehensive editorial oversight, and swiftly published to uphold the highest academic and professional standards, thereby maximizing their visibility and impact among a diverse, global audience of researchers and industry practitioners.
                    </p>
                </div>
            </div>

            {/*Submission Guidelines*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Submission Guidelines</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>The International Journal of Computer Vision and Multimedia Processing offers a clear and structured submission process designed to assist authors in presenting their innovative research in computer vision and multimedia processing, ensuring that every manuscript meets our high standards and reaches the global academic community effectively.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Manuscript Formatting {" "}
                        </span>
                        –  Authors must ensure their paper strictly adheres to the journal’s detailed formatting standards, which include specific requirements for font size, line spacing, margin settings, and citation style, all of which are comprehensively outlined in our author guidelines available on the website.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        File Requirements {" "}
                        </span>
                        –   Submissions should be provided in an editable format such as Microsoft Word  accompanied by high-resolution figures, tables, and  supplementary materials.
                    </p>

                </div>
            </div>

            {/*Peer Review Process*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Peer Review Process</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>At the International Journal of Computer Vision and Multimedia Processing, our peer review process is meticulously crafted to uphold the highest standards of academic excellence, ensuring that every published article contributes meaningfully to the advancement of knowledge in computer vision and multimedia technologies.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Feedback Timeline {" "}
                        </span>
                        –   Authors can expect to receive comprehensive reviewer comments along with an editorial decision within a streamlined 6-8 week period, balancing efficiency with the depth required for a meticulous and fair assessment of their submitted research.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Revision Opportunity{" "}
                        </span>
                        – Authors are given ample opportunity to revise and enhance their manuscripts based on detailed reviewer feedback, ensuring that the final version meets the journal’s rigorous standards for clarity, accuracy, and significant contribution to the field.
                    </p>

                </div>
            </div>

            {/*Publication Steps*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Publication Steps</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>The International Journal of Computer Vision and Multimedia Processing is committed to a seamless and efficient publication process, transforming accepted manuscripts into polished, widely accessible articles that resonate with researchers, practitioners, and scholars across the globe in the domains of computer vision and multimedia.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Copyediting{" "}
                        </span>
                        – Once accepted, every manuscript undergoes a professional copyediting process where our skilled editors refine the text for grammar, style, coherence, and consistency, ensuring that the final article is polished and accessible to an international readership.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                        Proofreading Stage{" "}
                        </span>
                        – Authors are provided with proofs of their article to carefully review and approve, allowing them to verify the accuracy of content, figures, and references, and to make any final adjustments before the paper is officially published in the journal.
                    </p>

                </div>
            </div>

            <hr className="mt-6 mb-6" />

            {/*Publication Process and  Author Benefits*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold text-xl'>Publication Process</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                The publication process at IJCVMP is designed to ensure high-quality, rigorous, and timely dissemination of research. Submitted manuscripts undergo an initial screening for adherence to formatting and ethical standards, followed by a comprehensive double-blind peer review. Based on the reviewers' feedback, authors may be required to make revisions to improve clarity, and impact.
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
                                <p className='text-[#493D9E] poppins-bold text-xl'>Author Benefits</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Authors publishing with IJCVMP gain significant academic and professional advantages. Their work is indexed in reputed databases, increasing visibility and citations. The journal ensures a swift review and publication process, allowing timely dissemination of research.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
