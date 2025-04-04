import React from "react";
import Upload from "/assets/Upload.png";
import About from "/assets/About.png";
import Fbutton from "/assets/Forward Button.png";
import Accuracy from "/assets/Accuracy.png";
import Vision from "/assets/Vision.png";
import { useNavigate } from 'react-router-dom';


export default function Home({ keywords, firstRow, secondRow, thirdRow }) {
    const navigate = useNavigate();
    return (
        <>
            {/* welcome section */}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                        Welcome to IJCVMP
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="poppins-medium">
                            The International Journal of Computer Vision and Multimedia
                            Processing 
                        </span>
                         {} is a leading peer-reviewed journal that focuses
                        on the latest research, innovations, and advancements in the fields
                        of computer vision, image processing, and multimedia technologies.
                        It provides a global platform for researchers, academicians, and
                        industry professionals to exchange knowledge and share novel
                        solutions addressing complex challenges in these rapidly evolving
                        domains. The journal covers a broad spectrum of topics, including
                        image and video analysis, object detection, pattern recognition,
                        deep learning applications, augmented and virtual reality,
                        human-computer interaction, multimedia retrieval, and AI-driven
                        content generation.
                    </p>
                    <div className="text-center ">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#493D9E] text-white px-4 py-2 rounded-lg cursor-pointer ">
                                <div className="flex justify-between gap-2 ">
                                    {" "}
                                    Submit Manuscript
                                    <img
                                        src={Upload}
                                        alt="Submit Icon"
                                        className="w-[26px] h-[24px]"
                                    />
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/*about ,aim and scope*/}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-500 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="lg:flex h-full">
                        <div className="bg-[#493D9E] lg:w-30 flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={About} className="w-[75px] h-[63px]" />
                            </div>
                        </div>
                        <div className="flex-1 p-6">
                            <h2 className="text-center text-[#493D9E] poppins-bold lg:text-[20px] text-[18px] mb-4">
                                About the Journal
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                <span className="text-[#493D9E] poppins-medium">
                                    The International Journal of Computer Vision and Multimedia
                                    Processing{" "}
                                </span>
                                is a prestigious, high-impact, peer-reviewed journal committed to advancing cutting-edge research in the domains of computer vision, image processing, and multimedia technologies. It serves as a dynamic platform for researchers, academicians, and industry professionals to disseminate their innovative findings, explore emerging methodologies, and showcase applications
                            </p>

                            <div className="text-center mt-2    ">
                                <button onClick={() =>navigate('/aboutus')} className="font-medium flex items-center mx-auto cursor-pointer bg-[#493D9E] text-white px-4 py-2 rounded-lg ">
                                    Read More
                                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 border border-gray-500 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="lg:flex h-full">
                        <div className="bg-[#493D9E] lg:w-30 flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Accuracy} className="w-[100px] h-[63px]" />
                            </div>
                        </div>
                        <div className="flex-1 p-6">
                            <h2 className="text-center text-[#493D9E] poppins-bold lg:text-[20px] text-[18px] mb-4">
                                Aim and Scope{" "}
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                <span className="text-[#493D9E] poppins-medium">
                                    The International Journal of Computer Vision and Multimedia
                                    Processing{" "}
                                </span>
                                aims to provide a high-quality platform for researchers,
                                academicians, and industry professionals to share innovative
                                research and advancements in the fields of computer vision,
                                image processing, video analysis, and multimedia technologies
                                and it addressing emerging challenges in intelligent vision
                                systems for real-world applications.
                            </p>

                            <div className="text-center mt-2">
                                <button onClick={() =>navigate('/aimscope')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                                    Read More
                                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*Featured Topics*/}
            <div className="bg-[#493D9E]  px-2 py-2 mt-6 poppins-bold text-white text-xl rounded-lg w-fit">Featured Topics</div>
            {/* <div className="bg-[#493D9E] p-4 mt-6 poppins-bold text-white text-xl rounded-lg w-full text-center">Featured Topics</div> */}
            <div className="flex flex-col gap-4 mt-5">
                <p className="text-[#493D9E] poppins-semibold text-[20px]">Peer Review Process</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Computer Vision and Multimedia Processing  follows a rigorous double-blind peer review process to ensure high-quality and original research. Submitted manuscripts undergo an initial screening by the editorial team to check for relevance, originality, and adherence to guidelines. Eligible papers are then assigned to at least two independent reviewers, who evaluate the manuscript based on factors like methodology, significance, clarity, and contribution to the field.</p>

            </div>
            <div className="text-center mt-1 ">
                <button onClick={() =>navigate('/peer')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                    Read More
                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                </button>
            </div>



            <div className="flex flex-col gap-4 mt-5">
                <p className="text-[#493D9E] poppins-semibold text-[20px]">Publication Ethics</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Computer Vision and Multimedia Processing upholds the highest standards of publication ethics to ensure integrity, originality, and transparency in scholarly publishing. Authors must submit original work, properly cite sources, and avoid plagiarism, fabrication, or falsification of data. Simultaneous submissions or redundant publications are strictly prohibited. All submitted manuscripts undergo a rigorous double-blind peer review to ensure unbiased evaluation.</p>

            </div>
            <div className="text-center mt-1 ">
                <button onClick={() =>navigate('/publicationethicspage')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                    Read More
                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                </button>
            </div>



            <div className="flex flex-col gap-4 mt-5">
                <p className="text-[#493D9E] poppins-semibold text-[20px]">Article Processing</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Computer Vision and Multimedia Processing follows a structured article processing workflow to ensure the timely and efficient handling of submissions. Once a manuscript is submitted, it undergoes an initial screening for compliance with formatting and ethical guidelines. Eligible manuscripts then proceed to a double-blind peer review, where independent reviewers evaluate the quality, originality, and significance of the research.</p>

            </div>
            <div className="text-center mt-1 ">
                <button onClick={() =>navigate('/articleprocessingpage')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                    Read More
                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                </button>
            </div>


            <hr className="mt-6 mb-6" />


            {/*Keywords*/}
            <div className="bg-[#DFDBF2] rounded-lg shadow-sm overflow-hidden">
                <div className="bg-[#493D9E]  text-center poppins-bold text-[20px] text-white p-2 ">Key Search Domains</div>
                {/* Title */}
                <h1 className=" text-[20px] poppins-medium text-center mt-3 mb-3">
                    The journal covers the following areas of Computer Vision and Multimedia Processing
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:justify-items-center p-4 ">
                    {/* First Column */}
                    <div>
                        {firstRow.map((keyword, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <img src={Vision} alt="icon" className="w-9 h-5 mr-2" />
                                <span className="text-gray-900  ">{keyword}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Column */}
                    <div>
                        {secondRow.map((keyword, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <img src={Vision} alt="icon" className="w-9 h-5 mr-2" />
                                <span className="text-gray-900">{keyword}</span>
                            </div>
                        ))}
                    </div>

                    {/* Third Column */}
                    <div>
                        {thirdRow.map((keyword, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <img src={Vision} alt="icon" className="w-9 h-5 mr-2" />
                                <span className="text-gray-900">{keyword}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="mt-6 mb-2" />

            {/*Last*/}

            <div className="text-center  p-4">
              <p className="text-gray-900 mb-2 px-4 lg:px-0 lg:text-center text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
              We publish original research articles, review papers, and technical notes in the field of computer vision and multimedia processing. The journal ensures a swift peer-review process, typically completing reviews within two weeks of submission. Accepted articles are published online immediately upon receiving the final version, ensuring rapid dissemination of high-quality research.
              </p>
              <div className="bg-[#493D9E] rounded-lg p-3 mx-auto max-w-[45rem] text-center">
                <p className="text-white poppins-medium  text-sm lg:text-base">
                  The last date for manuscript submission for the next issue is June 22, 2025
                </p>
              </div>
              <p className="text-gray-900 mt-2 poppins-semibold   px-4 lg:px-0">
                With Warm Regards, <br />
                Editor-in-Chief<br />
                <span className="poppins-bold text-[#493D9E]">IJCVMP</span>
              </p>
            </div>



        </>
    );
}
