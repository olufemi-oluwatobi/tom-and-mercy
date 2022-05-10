import React, { useRef, useState } from "react";
import { Input, Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  input, textarea {
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

const Home = () => {
    const contactDetails = {
        phone: "+1 905 410 5286",
        email: "info@tomandmercy.ca",
    };

    const socialMedia = [{
        icon: '/svg/twitter.svg',
        link: 'https://twitter.com/Tomandmercy1'

    }, {
        icon: '/svg/instagram.svg',
        link: 'https://www.instagram.com/tom_and_mercy/'
    }, {
        icon: '/svg/facebook.svg',
        link: '/'
    }]

    return (
        <Wrapper>
            <Layout className=' h-screen sm:overflow-hidden overflow-auto ' showFooter={false} title="TOM AND MERCY">
                <section className=" w-screen h-screen flex justify-between   bg-orange-100 px-[8%] mt-10 ">
                    <div className=' w-2/3 flex  '>
                        <Image width='800px' height='600px' src='/wallpaper/super_market.svg' />
                        {/* <img className=' w-[30%] rounded-2xl object-cover  min-h-[650px]  max-h-[850px] ' src='https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' />
                        <img className=' w-[30%]   rounded-2xl ml-20  object-cover  min-h-[650px]  max-h-[850px] ' src='https://images.unsplash.com/photo-1528733918455-5a59687cedf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' /> */}

                    </div>
                    <div className='flex flex-col w-1/3'>
                        <span className=' text-3xl font-bold py-10  text-gray-800   '>Let's help you solve all your grocery challenges</span>
                        <div className="  w-full mb-10 flex sm:flex-row flex-col justify-between items-start  ">
                            {Object.entries(contactDetails).map(([key, value]) => {
                                return (
                                    <div className="flex flex-col items-start  ">
                                        <span className="  capitalize font-medium mb-2 text-gray-800  ">
                                            {key}:
                                        </span>
                                        <span className=" w-48  font-medium text-orange-500">
                                            {value}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex my-2 w-full'>
                            {socialMedia.map(sm => (
                                <div className=' mr-5 cursor-pointer '>
                                    <a target='_blank' href={sm.link} >
                                        <Image height='32' width='32' src={sm.icon} />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <input
                            placeholder="Name"
                            className="w-full h-14 bg-orange-200 text-black  px-3.5 mt-5  rounded-md  "
                        />
                        <input
                            placeholder="Email"
                            className="w-full h-14 bg-orange-200 text-black  px-3.5 mt-5 rounded-md  "
                        />
                        <textarea

                            placeholder="Message"
                            className="w-full h-52 py-5 bg-orange-200 text-black  px-3.5 mt-10  rounded-md  "
                        />
                        <button className=' mt-5 rounded-3xl bg-black  w-40 h-12 text-white   '>See Message</button>

                    </div>
                    <div>

                    </div>
                </section>
            </Layout>
        </Wrapper>
    );
};
export default Home;
