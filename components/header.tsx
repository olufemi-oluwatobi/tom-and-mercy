import React from "react";
import Image from 'next/image'

class Header extends React.Component {
    render() {
        return (
            <header className='flex flex-col w-full'>
                <nav id="header" className="w-full z-30 top-0 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3">
                        {/* <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </label> */}
                        {/* <input className="hidden" type="checkbox" id="menu-toggle" />
                        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                            <nav>
                                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a></li>
                                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
                                </ul>
                            </nav>
                        </div> */}
                        <div className="order-1 md:order-2">
                            <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-900 text-xl " href="#">
                                <Image height='30px' width='30px' src='/favicon.png' />
                                <span className=' ml-4'>TOM AND MERCY</span>
                            </a>
                        </div>

                    </div>
                </nav>
                {/* <div className=' px-[7%] w-full py-10 '>
                    <Image width='2000px' className='w-full' height='800px' src={'https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80'} />
                </div> */}
            </header>
        );
    }
}
export default Header;