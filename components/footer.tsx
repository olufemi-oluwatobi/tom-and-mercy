import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  input {
    color: black;
    ::placeholder {
      color: black;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: black;
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: black;
    }
  }
  .ant-input,
  .ant-input-affix-wrapper,
  .ant-picker {
    background: transparent;
    padding: 10px;
    border: 3px solid #33cfca;
    border-top: 0px;
    border-radius: 0px;
    border-left: 0px;
    border-right: 0px;
    box-sizing: border-box;
    height: 50px;
    font-size: 18px;
    line-height: 24px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: white;
  }
`;
const Footer = () => {
    const socialMedia = [{
        icon: '/svg/twitter.svg',
        link: '/'
    }, {
        icon: '/svg/instagram.svg',
        link: '/'
    }, {
        icon: '/svg/facebook.svg',
        link: '/'
    }]
    return (
        <Wrapper
            style={{ background: "#44b5e3" }}
            className="h-fit-content justify-center items-center flex flex-col pt-32  w-full  py-20"
        >
            <span className=" sm:px-0 px-10% text-2xl font-bold   text-black ">
                TOM AND MERCY
            </span>
            <div
                style={{ padding: "0% 10%" }}
                className="flex sm:flex-row flex-col mt-20  justify-between  w-full items-start"
            >
                <div className="  font-new sm:pb-0 pb-10  sm:text-2xl md:text-lg lg:text-3xl xl:text-4xl sm:w-4/12 w-full sm:text-left text-black ">
                    <span> Where exceptional services are delivered.</span>
                    <div className='flex mt-2 w-full'>
                        {socialMedia.map(sm => (
                            <div className=' mr-2 '>
                                <Link href={sm.link} >
                                    <Image height='32' width='32' src={sm.icon} />
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
                <div className=" flex  sm:w-1/3 w-full sm:pl-10  justify-center flex-col ">
                    <div className="flex flex-col mb-5 items-start ">
                        <span className=" font-semibold mb-3  text-lg ">Canada</span>
                        <span className="text-black font-noto  text-base">
                            304 Eddystone Avenue, North York, Toronto M3N1H7 Ontario Canada
                        </span>

                    </div>
                    <div className="flex flex-col mb-5 items-start ">
                        <span className="  mb-3 font-semibold text-lg ">Phone Number</span>
                        <span className="text-black font-noto text-base">
                            +1 289-830-7923
                        </span>
                    </div>

                    <div className="flex flex-col mb-5 items-start ">
                        <span className="  mb-3 font-semibold text-lg ">Email</span>
                        <span className="text-black font-noto text-base">
                            info@tomandmercy.ca
                        </span>
                    </div>
                </div>
                <div className="flex sm:pl-16 sm:w-1/3 w-full flex-col">
                    <span className=" text-black ">
                        Send us an email if you have any enquiry
                    </span>
                    <input
                        placeholder="join our waiting list"
                        className="w-full h-14 bg-transparent text-black    border px-3.5 mt-5  rounded-md border-solid border-black "
                    />
                    <button className=' mt-3 rounded-3xl bg-orange-500 w-40 h-12 text-white   '>See Products</button>

                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;