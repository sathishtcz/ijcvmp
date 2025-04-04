import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Copyrights() {
    return (
        <>
            {/*Copyright */}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-extrabold text-xl">
                        Copyright Declaration:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                        Authors submitting their manuscripts to the International Journal of Computer Vision and Multimedia Processing agree to grant the journal a non-exclusive publishing license while retaining full copyright ownership of their work. Upon acceptance, the published articles will be made available under the journal’s terms of access and distribution. Authors must ensure that their submissions are original, do not infringe upon any existing copyrights, and have not been published or submitted elsewhere. Proper permissions must be obtained for any copyrighted material included in the manuscript, such as images, tables, or extended excerpts from other works. The journal reserves the right to edit, format, and reproduce the article in various formats while giving due credit to the authors. Any disputes regarding copyright infringement will be handled in accordance with international copyright laws and ethical publishing practices.
                    </p>
                </div>
            </div>

            {/*Publication Rights*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Publication Rights</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>The International Journal of Computer Vision and Multimedia Processing upholds ethical and legal standards in scholarly publishing. Authors retain full copyright ownership of their work while granting IJCVMP a non-exclusive right to publish, distribute, and archive their research. The journal reserves the right to edit and format submissions for clarity and consistency while ensuring that the content remains true to the authors' original findings.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Author Ownership and Licensing{" "}
                        </span>
                        – Authors retain full copyright ownership of their submitted work while granting IJCVMP a non-exclusive right to publish, distribute, and archive their content in both digital and print formats.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Right to Edit and Format {" "}
                        </span>
                        – The journal holds the right to make necessary editorial, formatting, and structural modifications to ensure the article meets academic and publishing standards while maintaining the integrity of the original work.
                    </p>

                </div>
            </div>

            {/*Content Warranty*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Content Warranty</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>Authors submitting to IJCVMP must ensure that their work is original, free from plagiarism, and not under review or previously published elsewhere. All data, methodologies, and findings should be accurate and verifiable, upholding the highest standards of academic integrity. If third-party content, such as figures, tables, or extended excerpts, is included, authors must obtain proper permissions from copyright holders before submission.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Originality and Authenticity{" "}
                        </span>
                        – Authors must ensure that all submitted manuscripts are entirely original, have not been plagiarized, and do not contain falsified or manipulated data. Proper citations must be provided for all referenced works.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Accuracy and Data Integrity{" "}
                        </span>
                        – Authors must verify that all research findings, methodologies, and conclusions presented in their manuscript are accurate and based on sound scientific principles, preventing misinformation and misleading claims.
                    </p>

                </div>
            </div>

            {/*Legal Compliance*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Legal Compliance</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>IJCVMP requires authors to adhere to all applicable copyright and intellectual property laws. Submissions must not infringe on existing trademarks, patents, or proprietary rights. Authors must disclose any potential conflicts of interest that could influence the research findings. Ethical considerations, including proper acknowledgment of funding sources and adherence to research guidelines, must be strictly followed.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Ethical Publishing Practices{" "}
                        </span>
                        – Submissions must adhere to the ethical guidelines outlined by IJCVMP, including proper citation of sources, avoidance of fabricated data, and transparency in research methodologies.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Liability and Legal Accountability{" "}
                        </span>
                        – The journal assumes no legal responsibility for claims arising from the published content; authors are fully responsible for ensuring their work complies with legal and ethical publishing standards.
                    </p>

                </div>
            </div>

            <hr className="mt-6 mb-6" />

            {/*Copyright Declaration and  Author Agreement*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold text-xl'>Copyright Declaration</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    I/We __________, the author(s) of the research paper/article entitled __________, authorize you to publish the above-mentioned paper/article in International Journal of Computer Vision and Multimedia Processing. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.
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
                                <p className='text-[#493D9E] poppins-bold text-xl'>Author Agreement</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    This agreement defines the terms and conditions for publication, safeguarding both the author's rights and the interests of the International Journal of Computer Vision and Multimedia Processing. The author(s) retain full copyright ownership while granting the journal the necessary rights to publish, distribute, and archive the work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
