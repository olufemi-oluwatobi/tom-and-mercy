import React from "react";
import { Menu, Dropdown, Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const categories = ['Sweet and Snacks', 'Food', 'Milk and Beverages', 'Seasonings', 'Skin Products']
    const categoriesMenu = (
        <Menu>
            {categories.map(category => (
                <Menu.Item key={Math.random()}>
                    <Link href={`/categories?category=${category.toLowerCase().split(" ").join("_")}`}>
                        <span className=" font-bold cursor-pointer mx-5 my-5 ">{category}</span>
                    </Link>
                </Menu.Item>

            ))}

        </Menu>
    );
    return (
        <header className="flex flex-col w-full">
            <nav id="header" className="w-full z-30 top-0 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
                    <label
                        htmlFor="menu-toggle"
                        className="cursor-pointer md:hidden block"
                    >
                        <svg
                            className="fill-current text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                    <div className="">
                        <Link
                            href="/"
                        >
                            <div className="flex cursor-pointer items-center tracking-wide no-underline hover:no-underline font-bold text-gray-900 text-xl "
                            >
                                <Image height="50px" width="50px" src="/favicon.png" />
                                <span className=" ml-4">TOM AND MERCY</span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="hidden md:flex md:items-center md:w-auto w-full"
                        id="menu"
                    >
                        <nav>
                            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                <li className=' w-[fit-content] '>
                                    <Dropdown overlay={categoriesMenu}>
                                        <span className='font-bold cursor-pointer mx-5'>Product List</span>
                                    </Dropdown>
                                </li>
                                <li>
                                    {" "}
                                    <Link href="/contact">
                                        <span className=" font-bold cursor-pointer ml-5">
                                            Contact
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>
            </nav>
            {/* <div className=' px-[7%] w-full py-10 '>
                    <Image width='2000px' className='w-full' height='800px' src={'https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80'} />
                </div> */}
        </header>
    );
}

export default Header;
