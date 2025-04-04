import React from 'react'
import Upload from "/assets/Upload.png";
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";
import Ai from "/assets/Ai.png";
import Computer from "/assets/computer.png";
import Fbutton from "/assets/Forward Button.png";
import { useNavigate } from 'react-router-dom';



export default function About() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                        About us:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="poppins-medium">
                            The International Journal of Computer Vision and Multimedia
                            Processing 
                        </span>
                        { } is a peer-reviewed, open-access journal dedicated to advancing research in computer vision, image processing, video analysis, and multimedia applications. IJCVMP provides a platform for researchers, academicians, and industry professionals to share innovative solutions, theoretical advancements, and real-world applications in the rapidly evolving fields of artificial intelligence, deep learning, and multimedia technologies. The journal covers a wide range of topics, including object recognition, image segmentation, 3D vision, motion tracking, augmented reality, virtual reality, and secure multimedia authentication. By fostering collaboration and knowledge exchange, IJCVMP aims to bridge the gap between academia and industry while addressing current challenges and emerging trends in computer vision and multimedia processing.
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



            {/*scope and mission*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Scope</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Image and Video Processing{" "}
                                    </span>
                                    - Covers techniques for image enhancement, segmentation, feature extraction, video compression, and real-time object tracking to improve visual data analysis and interpretation.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Deep Learning in Vision{" "}
                                    </span>
                                    – Explores neural networks, generative models, transformer architectures, and self-supervised learning for tasks such as image recognition, anomaly detection, and facial recognition.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Multimedia Processing and Retrieval{" "}
                                    </span>
                                    – Examines content-based image and video retrieval, audio-visual emotion recognition, multimodal data fusion, and interactive multimedia systems for intelligent content management.
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Mission</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Promote Innovative Research{" "}
                                    </span>
                                    – Encourage cutting-edge research in computer vision and multimedia processing by publishing high-quality, peer-reviewed articles that contribute to technological advancements.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Encourage Interdisciplinary Studies{" "}
                                    </span>
                                    – Support research that integrates artificial intelligence, machine learning, deep learning, and multimedia applications to advance the field of intelligent vision systems.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                    <span className="text-[#493D9E] poppins-medium">
                                        Foster Global Knowledge Sharing{" "}
                                    </span>
                                    – Serve as a platform for international collaboration, allowing experts from diverse backgrounds to exchange insights and address challenges in computer vision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Publication ethics and article procesing*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-500 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="lg:flex h-full">
                        <div className="bg-[#493D9E] lg:w-30 flex items-center justify-center p-1">
                            <div className=" flex items-center justify-center">
                                <img src={Ai} className="w-[101px] h-[100px]" />
                            </div>
                        </div>
                        <div className="flex-1 p-6">
                            <h2 className="text-center text-[#493D9E] poppins-bold lg:text-[20px] text-[18px] mb-4">
                                Publication Ethics
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                <span className="text-[#493D9E] poppins-medium">
                                    The International Journal of Computer Vision and Multimedia
                                    Processing {" "}
                                </span>
                                is committed to maintaining the highest ethical standards in scholarly publishing. We adhere to principles of integrity, transparency, and fairness in all aspects of the publication process. Authors must ensure that their submissions are original, properly cited, and free from plagiarism or data manipulation.
                            </p>

                            <div className="text-center mt-2    ">
                                <button onClick={() =>navigate('/publicationethicspage')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                                    Read More
                                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 border border-gray-500 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="lg:flex h-full">
                        <div className="bg-[#493D9E] lg:w-30 flex items-center justify-center p-1">
                            <div className=" flex items-center justify-center">
                                <img src={Computer} className="w-[77px] h-[77px]" />
                            </div>
                        </div>
                        <div className="flex-1 p-6">
                            <h2 className="text-center text-[#493D9E] poppins-bold lg:text-[20px] text-[18px] mb-4">
                                Article Processing{" "}
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                <span className="text-[#493D9E] poppins-medium">
                                    The International Journal of Computer Vision and Multimedia
                                    Processing {" "}
                                </span>
                                follows a structured and efficient article processing workflow to ensure the timely publication of high-quality research. Submitted manuscripts undergo an initial screening for plagiarism, formatting, and relevance to the journal's scope. IJCVMP is committed to a transparent, and efficient publication process.
                            </p>

                            <div className="text-center mt-2">
                                <button onClick={() =>navigate('/articleprocessingpage')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                                    Read More
                                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/*Featured Topics*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 poppins-bold text-white text-xl rounded-lg w-fit">Featured Topics</div>
            {/* <div className="bg-[#493D9E] p-4 mt-6 poppins-bold text-white text-xl rounded-lg w-full text-center">Featured Topics</div> */}
            <div className="flex flex-col gap-4 mt-5">
                <p className="text-[#493D9E] poppins-semibold text-[20px]">Abstract and Indexing</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Computer Vision and Multimedia Processing is dedicated to ensuring the broad visibility and accessibility of published research through comprehensive abstracting and indexing services. The journal strives to be indexed in leading academic databases, digital libraries, and citation repositories to enhance the discoverability and impact of its articles. By being included in major indexing platforms, IJCVMP ensures that researchers, academicians, and industry professionals can easily access.</p>

            </div>
            <div className="text-center mt-1 ">
                <button onClick={() =>navigate('/abstractindexing')} className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer">
                    Read More
                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                </button>
            </div>



            <div className="flex flex-col gap-4 mt-5">
                <p className="text-[#493D9E] poppins-semibold text-[20px]">Peer Review Process</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">The International Journal of Computer Vision and Multimedia Processing follows a rigorous double-blind peer review process to ensure the quality, originality, and integrity of published research. Upon submission, manuscripts undergo an initial screening for plagiarism, formatting, and alignment with the journal’s scope. Suitable manuscripts are then assigned to expert reviewers, who evaluate the work based on its technical depth, novelty, methodology, and significance to the field.</p>

            </div>
            <div className="text-center mt-1 ">
                <button className="bg-[#493D9E] text-white px-4 py-2 rounded-lg font-medium flex items-center mx-auto cursor-pointer" onClick={() => navigate('/peer')}>
                    Read More
                    <img src={Fbutton} alt="Fbutton" className="w-10 h-6" />
                </button>
            </div>

            <hr className="mt-6 mb-6" />


            <div className="bg-[#493D9E]  px-2 py-2 mt-6 poppins-bold text-white text-xl rounded-lg w-fit    ">Submission Guidelines</div>
            <div className=''>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        The International Journal of Computer Vision and Multimedia Processing welcomes original research articles, review papers, and technical notes that align with its scope. Authors must ensure that their submissions are original, unpublished, and not under review elsewhere. Manuscripts should be formatted according to the journal’s template, including structured sections such as abstract, introduction, methodology, results, discussion, and references.
                    </p>

                </div>
                <div className="flex justify-center mt-3">
                    <button onClick={() =>navigate('/authorguidelinespage')} className='bg-[#493D9E] text-white rounded-lg p-2 cursor-pointer'>Submission Guidelines</button>
                </div>
            </div>





        </>
    )
}
