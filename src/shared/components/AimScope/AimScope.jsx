import React from 'react'
import Upload from "/assets/Upload.png";
import Vision from "/assets/ai-eye.png";
import Pin from "/assets/Pin.png";

export default function AimScope() {
    return (
        <>
            {/*Aim annd Scope Section */}
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-bold text-2xl">
                        Aim and Scope:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="poppins-medium">
                            The International Journal of Computer Vision and Multimedia Processing
                        </span>
                        { } aims to provide a premier platform for researchers, academicians, and industry professionals to share and advance knowledge in computer vision, image processing, video analysis, and multimedia technologies. The journal covers a wide range of topics, including object recognition, scene understanding, deep learning for vision, augmented and virtual reality, multimedia security, real-time vision applications, and human-computer interaction. IJCVMP fosters interdisciplinary research that integrates artificial intelligence, machine learning, and data-driven approaches to address complex challenges in intelligent vision systems. The journal is committed to bridging the gap between theory and real-world applications, supporting innovations in healthcare, security, automation, smart cities, and multimedia communications while ensuring the highest academic and ethical standards.
                    </p>
                    <div className="text-center ">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#493D9E] text-white px-4 py-2 rounded-lg cursor-pointer  ">
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


            {/*Aim*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Aim</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>The International Journal of Computer Vision and Multimedia Processing aims to advance research and innovation in the fields of computer vision, image and video processing, and multimedia technologies. The journal provides a high-quality platform for researchers, academicians, and industry professionals to publish original contributions that push the boundaries of artificial intelligence, deep learning, and human-computer interaction. IJCVMP is dedicated to fostering collaboration, bridging the gap between theoretical advancements and real-world applications, and addressing emerging challenges in intelligent vision systems.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Encourage Cutting-Edge Research{" "}
                        </span>
                        - Support groundbreaking studies in computer vision, artificial intelligence, and multimedia processing that drive innovation and technological advancements. The journal aims to publish high-quality research that enhances automated visual perception, deep learning-based recognition, and intelligent multimedia applications, ensuring significant contributions to academia and industry.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Facilitate Knowledge Exchange{" "}
                        </span>
                        - Provide a global and interdisciplinary platform where researchers, academicians, and industry professionals can share novel methodologies, innovative frameworks, and technological advancements. By fostering collaboration between various disciplines, IJCVMP helps bridge theoretical research with practical applications, encouraging the development of next-generation intelligent systems.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Promote Ethical and High-Quality Publications{" "}
                        </span>
                        - Uphold the highest academic and ethical standards by ensuring a rigorous peer-review process, transparency, and integrity in research. The journal is committed to eliminating unethical research practices such as plagiarism, data fabrication, and redundant publications, ensuring that all published work significantly contributes to the responsible development of AI-driven vision systems and multimedia technologies.
                    </p>

                </div>
            </div>

            {/*Scope*/}
            <div className="bg-[#493D9E] px-2 py-2 mt-6 mb-4 poppins-bold text-white text-xl rounded-lg w-fit">Scope</div>

            <div>
                <p className='text-sm sm:text-base md:text-lg lg:text-[16px] text-justify'>The International Journal of Computer Vision and Multimedia Processing covers a broad spectrum of research areas related to computer vision, image and video processing, artificial intelligence, and multimedia technologies. The journal welcomes high-quality contributions that explore novel methodologies, innovative algorithms, and real-world applications in intelligent vision systems. IJCVMP serves as a bridge between theoretical advancements and practical implementations, addressing challenges in automation, security, healthcare, and interactive media.</p>
                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Computer Vision and Image Processing{" "}
                        </span>
                        - Covers fundamental and advanced topics such as object detection, face recognition, image segmentation, motion tracking, and feature extraction. It also includes AI-driven vision techniques, 3D reconstruction, and computational photography, which enhance automated decision-making and visual data analysis in fields like medical diagnostics, surveillance, and autonomous vehicles.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Multimedia Processing and Communication{" "}
                        </span>
                        - Focuses on multimedia data analysis, adaptive content delivery, video compression, immersive media, and real-time streaming technologies. This area also includes advancements in augmented and virtual reality, human-computer interaction, and digital media security, enabling high-quality interactive experiences and intelligent multimedia applications in entertainment, education, and smart systems.
                    </p>

                </div>

                <div className="flex gap-1 mt-5">
                    <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                        <span className="text-[#493D9E] poppins-medium">
                            Machine Learning and Deep Learning for Vision{" "}
                        </span>
                        - Explores the integration of artificial intelligence models, deep learning frameworks, neural networks, and advanced pattern recognition techniques. Research in this area includes real-time image classification, video analysis, biometric authentication, intelligent surveillance, and autonomous systems. The journal emphasizes AI-driven methodologies that improve computational efficiency, scalability, and accuracy in vision-based applications.
                    </p>

                </div>
            </div>
            <hr className="mt-6 mb-6" />


            {/*Research and Innovation    Intelligent System*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <div className="flex-1 border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="">

                        <div className="bg-[#DFDBF2]  flex items-center justify-center p-2">
                            <div className=" flex items-center justify-center">
                                <img src={Vision} className="w-[45px] h-[45px]" />
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Research and Innovation</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Encourage research that bridges the gap between theoretical advancements and industry applications in various sectors, including healthcare, robotics, and smart surveillance.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Support interdisciplinary collaboration among researchers, academicians, and industry professionals to foster knowledge exchange, innovation, and the development of groundbreaking technologies.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Support the integration of advanced computer vision techniques with the Internet of Things (IoT), cybersecurity, and cloud computing for enhanced performance and security.
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
                                <p className='text-[#493D9E] poppins-bold lg:text-[20px] text-[18px]'>Intelligent System</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Focus on the development of advanced algorithms for high-accuracy visual recognition, real-time analytics, and adaptive multimedia processing to improve efficiency and performance.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                                Support novel techniques for multimedia data retrieval, indexing, content-based recommendation systems, and semantic analysis to improve information accessibility and usability.
                                </p>
                            </div>
                            <div className="flex gap-1 ">
                                <img src={Pin} alt="" className='w-[24px] h-[18px]' />
                                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                Foster research on computational photography, 3D reconstruction, scene understanding, and virtual reality applications to enhance digital visualization and simulation technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
