import React from 'react'
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function Authorguideline() {
    return (
        <>
            {/*Authorguideline */}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-extrabold text-xl">
                        Author Guidelines:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                    The International Journal of Computer Vision and Multimedia Processing welcomes high-quality original research articles, review papers, and technical notes that contribute to advancements in computer vision, image processing, and multimedia technologies. Authors are required to follow the submission guidelines to ensure a smooth review and publication process.To maintain the highest academic and ethical standards, authors are required to carefully adhere to the journal’s submission guidelines, ensuring clarity, originality, and compliance with publishing standards, thus facilitating a rigorous yet smooth review and publication process.
                    </p>
                </div>
            </div>

            {/*Research Article*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Research Article</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>A research article submitted to the International Journal of Computer Vision and Multimedia Processing should present original, high-quality, and innovative research findings in the fields of computer vision, multimedia processing, artificial intelligence, and related disciplines. The manuscript must contribute to advancing knowledge, solving real-world challenges, or introducing novel methodologies. Authors should provide a well-structured document with a comprehensive review of existing literature, a clear research problem, robust methodology, experimental results, and a well-founded discussion.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Encourage Original Contributions{" "}
                        </span>
                        – The journal welcomes high-quality, innovative, and original research contributions in the fields of computer vision, multimedia processing, artificial intelligence, and related domains. Research articles should present new methodologies, frameworks, algorithms, or experimental studies that significantly advance the state of knowledge.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Ensure Wide Accessibility{" "}
                        </span>
                        – All accepted research articles are published online and indexed in leading databases to ensure global reach and recognition. The journal provides an open-access platform for scholars, researchers, and professionals to access and cite published work easily. This wide accessibility fosters knowledge dissemination and academic collaboration, allowing researchers worldwide to benefit from and build upon published findings.
                    </p>

                </div>
            </div>

            {/*Research Article*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Technical Article</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>A Technical Article in the International Journal of Computer Vision and Multimedia Processing focuses on in-depth technical insights, advancements, and practical implementations in the fields of computer vision, multimedia processing, artificial intelligence, and related areas. These articles present innovative methodologies, system architectures, engineering solutions, and emerging technologies that address real-world challenges.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Promote In-Depth Technical Insights{" "}
                        </span>
                        – The journal welcomes technical articles that provide detailed insights into emerging trends, cutting-edge technologies, and advancements in computer vision, multimedia processing, artificial intelligence, and related domains. Articles should focus on innovative methodologies, system architectures, algorithms, and engineering solutions that contribute to the field’s growth and development.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Maintain Ethical and Professional Standards{" "}
                        </span>
                        – Authors are required to uphold high ethical standards by ensuring originality, properly citing sources, and avoiding plagiarism. Any use of third-party data, software, or experimental frameworks must be appropriately credited.
                    </p>

                </div>
            </div>

            <hr className="mt-6 mb-6" />

            {/*Manuscript Formatting and  Submission Process*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold text-xl'>Manuscript Formatting</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    Authors must follow the journal's formatting guidelines to ensure consistency, clarity, and professional presentation of their research. Proper formatting enhances readability and improves the chances of acceptance.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    Figures, tables, and equations should be appropriately numbered and referenced within the text to support the findings and enhance clarity. High-resolution images and properly formatted tables are recommended.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    Authors should use clear, concise, and technically accurate language to improve comprehension. Complex concepts should be well-explained, and excessive jargon should be avoided.
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
                                <p className='text-[#493D9E] poppins-bold text-xl'>Submission Process</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    Any conflicts of interest, funding sources, or affiliations that could influence the research findings should be clearly disclosed within the manuscript. Transparency in funding and research ethics is essential.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    Authors must properly cite all sources, data, and previously published works to acknowledge contributions and maintain ethical publishing standards. Failing to do so may result in rejection or retraction of the article.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                    Once submitted, the manuscript will undergo a rigorous peer-review process, where experts in the field evaluate the quality, originality, and significance of the research.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
