import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { useRouter } from "next/router";

import Image from "next/image";
import data from "../api/data";
import Layout from "../../components/Layout";
import Product from "../../components/product";

const Home = () => {
    const { query } = useRouter();
    const [productData, setProductData] = useState(data);


    useEffect(() => {

        const productClone = [...productData]
        console.log(query.category)
        const products = data.filter(product => product.category == query.category)
        console.log(products)
        setProductData(products)
        console.log('in here')
    }, [query])

    const categoriesTitles = {
        sweet_and_snacks: "Sweet and Snacks",
        food: "Food",
        milk_and_beverages: "Milk and Beverages",
        ingredients: "Ingredients",
        soap_and_detergents: "Soap and Detergents",
        skin_products: "Skin Products",
    };



    const heroImage = {
        sweet_and_snacks:
            "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80",
        food: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        milk_and_beverages:
            "https://images.unsplash.com/photo-1579895989361-4c83c6493681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
        ingredients:
            "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        soap_and_detergents:
            "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        skin_products:
            "https://images.unsplash.com/photo-1629380108599-ea06489d66f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    };
    console.log(heroImage[query.category as unknown as string])

    return (
        <Layout title="TOM AND MERCY">
            <section className="  bg-orange-100">
                <div className="flex w-full h-96 mb-20 items-center  relative">
                    <div className=' w-full bg-black h-full'>
                        <div className="flex">
                            <Image
                                layout='fill'
                                alt={heroImage[query.category as unknown as string]}
                                objectFit='cover'
                                src={heroImage[query.category as unknown as string] || heroImage.skin_products}
                                className="w-full  z-10"
                            />
                        </div>
                    </div>
                    <span className='absolute z-50 text-white  text-9xl px-[8%]'>{categoriesTitles[query.category as unknown as string]}</span>
                </div>
                <div className=" w-full mx-auto flex items-center flex-wrap pt-4 px-[8%]  pb-12">

                    {/* <div
                        className="w-full  flex sm:flex-row flex-col justify-between items-center mb-20 "
                    >
                        <span className=" text-center text-5xl font-bold ">
                            Popular products
                        </span>
                        <div className=" w-[fit-content] sm:mt-0 mt-6 h-full flex justify-center items-center bg-white p-2 ">
                            <Input.Search
                                onChange={onSearch}
                                placeholder="Search product"
                                className="  "
                            />
                        </div>
                    </div> */}

                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                        {productData
                            .filter((d) => d.imageSrc)
                            .map((product, index) => (
                                <Product
                                    product={{
                                        id: index,
                                        imageSrc: `/images${product.imageSrc}`,
                                        price: product["Unit Price"],
                                        name: `${product["Brand Name"]} ${product["Product Name"]}`,
                                        href: "prod",
                                    }}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Home;
