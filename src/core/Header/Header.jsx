import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from "./NavItems";
import ijcvmp from '/assets/IJCVMP.png'

const Header = () => {
    const menuRef = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;
    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }
            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }
            if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
                setDropdown3(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const Aboutus = [
        { name: "About Us", path: "/aboutus" },
        { name: "Aim & Scope", path: "/aimscope" },
        { name: "Editorial Board", path: "/editorial" },
        { name: "Issues", path: "/issues" },
        { name: "Author Guidelines", path: "/authorguidelinespage" },
        { name: "Copyrights", path: "/copyrightformpage" },
    ];
    const Overview = [
        { name: "Peer Review Process", path: "/peer" },
        { name: "Publication Ethics", path: "/publicationethicspage" },
        { name: "Abstracting and Indexing", path: "/abstractindexing" },
        { name: "Article Processing", path: "/articleprocessingpage" }
    ];
    const Policy = [
        { name: "Plagiarism ", path: "/plagiarismpage" },
        { name: "Malpractice", path: "/malpracticepage" },
        { name: "Correction", path: "/correctionpage" },
        { name: "Publication Rights", path: "/publicationrightspage" },
    ];



    return (
        <div ref={menuRef} className="w-full bg-[#493D9E] text-white fixed top-0 z-20 max-h-[102px]">
            <div className={`${scroll ? "bg-[#493D9E]" : "bg-[#493D9E]"}  `}>
                <div className="max-w-full mx-auto w-full ">
                    <div className="w-full flex items-center justify-between">
                        <div
                            className="bg-white p-5 w-55 lg:border-none border border-b-[#493D9E]"
                            style={{
                                clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                            }}
                        >
                            {/* <Link to="/" className="text-[#493D9E] text-4xl poppins-bold">
                                IJCVMP
                            </Link> */}
                            <Link to="/">
                                <img className="w-40 md:mx-0 mx-auto" src={ijcvmp} alt="logo" />
                            </Link>
                        </div>

                        <Link to={"/"} className="lg:block hidden  absolute left-1/2 transform -translate-x-1/2">
                            <div className="flex justify-center items-center">
                                <h1 className="2xl:text-2xl md:text-base  poppins-medium">
                                    International Journal of Computer Vision and Multimedia Processing
                                </h1>
                            </div>
                        </Link>


                        <div
                            onClick={ToggleMenu}
                            className={`${scroll ? "" : ""
                                } text-white inline-flex align-middle cursor-pointer items-center duration-300 min-w-24 select-none lg:hidden `}
                        >
                            {" "}

                            < GiHamburgerMenu
                                className={`${scroll ? " " : ""}  ml-12 text-3xl  cursor-pointer duration-300 m-1.5  rotate-180 `}
                            />
                        </div>

                    </div>
                </div>
                <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} dropdown2Ref={dropdown2Ref} setDropdown1={setDropdown1} setDropdown2={setDropdown2} dropdown1={dropdown1} dropdown2={dropdown2} />
                {MenuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="h-screen w-full bg-black/40 absolute top-0"
                    ></div>
                )}
            </div>

            <div className="py-2 bg-primary-mid w-full hidden lg:block bg-[#DFDBF2]"
            >
                <div className="w-fit mx-auto lg:pl-44 xl:pl-0 h-full text-[#493D9E] font-medium">
                    <ul className="flex gap-5 h-full items-center justify-center">
                        <li className="">
                            <Link to='/'>Home</Link>
                        </li>

                        <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className="flex items-center gap-1" >About<FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                            {dropdown1 &&
                                <div className="absolute bg-[#DFDBF2] border border-[#493D9E] mt-2 rounded ">
                                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                                        {Aboutus.map((link, index) => (
                                            <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                                                <li className="px-4 py-1  text-[#493D9E] font-medium rounded-md border-b " >{link.name} </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>}
                        </li>
                        <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className="flex items-center gap-1" >Journal Overview <FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                            {dropdown2 &&
                                <div className="absolute bg-[#DFDBF2] border border-[#493D9E] mt-2 rounded ">
                                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                                        {Overview.map((link, index) => (
                                            <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                                                <li className="px-4 py-1   text-[#493D9E] font-medium rounded-md border-b " >{link.name} </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>}
                        </li>
                        <li ref={dropdown3Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown3(!dropdown3)} className="flex items-center gap-1" >Journal Policy<FaChevronDown className={`${dropdown3 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                            {dropdown3 &&
                                <div className="absolute bg-[#DFDBF2] border border-[#493D9E] mt-2 rounded  ">
                                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                                        {Policy.map((link, index) => (
                                            <Link key={index} onClick={() => setDropdown3(!dropdown3)} to={link.path} className="!w-full" >
                                                <li className="px-4 py-1   text-[#493D9E] font-medium rounded-md border-b " >{link.name} </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>}
                        </li>
                        <li className="">
                            <Link to='/contactuspage'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>





            {/* <div className="lg:hidden block w-full bg-[#DFDBF2] p-2"></div> */}
        </div>
    );
};
export default Header;
