import React from 'react'

export default function Contactus() {
    return (
        <>
            <div className="bg-[#DFDBF2] p-5 rounded-lg ">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#493D9E] poppins-extrabold text-xl">
                        Contact Us:
                    </h2>
                    <p className="poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">

                        Get in touch with us for any queries or support
                    </p>
                </div>
            </div>

            <div className='w-full  mx-auto px-6 mt-11' >
                <div className="bg-[#DFDBF2] p-6 rounded-lg  max-w-md mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-[#493D9E] poppins-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full p-2  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
                            />
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-[#493D9E] poppins-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-[#493D9E] poppins-medium mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                className="w-full p-2 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[#493D9E] poppins-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-2 bg-white   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493D9E] max-h-[calc(85vh-100px)]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#493D9E] text-white p-2 rounded-lg hover:bg-[#493D9E] transition duration-300 flex items-center justify-center poppins-medium"
                        >
                            <span className="mr-2"></span> Send Email
                        </button>

                        <p className="text-center text-gray-600 mt-6 poppins-regular">
                            For any queries contact Email: <a href="mailto:editor@ijccbd.com" className="text-[#493D9E] hover:underline">editor@ijcvmp.com</a>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}
