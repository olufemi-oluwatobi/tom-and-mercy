import React, { useRef, useState } from "react";
import { Input, Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import data from "./api/data";
import Layout from "../components/Layout";
import Product from "../components/product";

const CAROUSEL_IMAGE_URLS = [
  {
    image:
      "https://res.cloudinary.com/digift/image/upload/v1644515778/DSP_1_tcwjl1.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/digift/image/upload/v1644515764/DSP_3_ze96jd.jpg",
  },
];

const Home = () => {
  const productRef = useRef(null);

  const [productData, setProductData] = useState(data);
  const contactDetails = {
    phone: "+1 905 410 5286",
    email: "info@tomandmercy.ca",
    address: "304 Eddystone Avenue, North York, Toronto M3N1H7 Ontario Canada",
    "Open hours": "8am - 10pm",
  };

  const executeScroll = () =>
    productRef?.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });

  const onSearch = (e: any) => {
    const {
      target: { value },
    } = e;
    if (!value || !value?.length) {
      return setProductData(data);
    }
    let searchData = data?.filter(
      (o) =>
        o["Brand Name"].toLowerCase().includes(value) ||
        o["Product Name"].toLowerCase().includes(value)
    );
    return setProductData(searchData);
  };

  const renderBanner = () => {
    return (
      <div>
        <Carousel
          className="w-full rounded-2xl mt-10 sm:flex hidden "
          dots={{ className: "tw-text-black" }}
          dotPosition="left"
          autoplay
        >
          {[
            "https://res.cloudinary.com/drda29q8x/image/upload/v1652304534/WhatsApp_Image_2022-04-14_at_5.27.25_PM_4_ztysql.jpg",
            "https://res.cloudinary.com/drda29q8x/image/upload/v1652217828/image_4_lhqcxh.jpg",
            "https://res.cloudinary.com/drda29q8x/image/upload/v1652304534/WhatsApp_Image_2022-04-14_at_5.27.25_PM_4_ztysql.jpg",
            "https://res.cloudinary.com/drda29q8x/image/upload/v1652304525/WhatsApp_Image_2022-04-14_at_5.27.25_PM_3_shzav2.jpg",
            "https://res.cloudinary.com/drda29q8x/image/upload/v1652304525/WhatsApp_Image_2022-04-14_at_5.27.25_PM_3_shzav2.jpg",
          ].map((num) => (
            <Image
              alt="banner"
              key={Math.random()}
              width='2000px'
              height='800px'
              objectFit='cover'
              src={num}
              style={{ maxHeight: "540px", maxWidth: "1200px" }}
              className=" rounded-2xl w-full object-cover "
            />
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <Layout title="TOM AND MERCY">
      <section className="  bg-orange-100 sm:px-[4%] px-[2%]   py-8">
        <div className=" w-full mx-auto flex justify-center items-center flex-wrap pt-4 sm:px-20 px-10 pb-12">
          <div className="w-full flex sm:flex-row flex-col my-20 justify-center mb-20">
            <div className="flex flex-col justify-center  w-auto items-center ">
              <span className=" font-bold sm:text-8xl text-[15vw] leading-none   sm:w-8/12 w-full  text-center  ">
                Shop for African Grocery
              </span>
              <span className="   font-bold text-base my-10 text-center sm:w-6/12  w-full  ">
                Find the best grocery products from thousands of top brands at
                TOM AND MERCY nutrition facts, ingredients, calories, and more
                for millions of items.
              </span>
              <button
                onClick={() => executeScroll()}
                className=" rounded-3xl bg-orange-500 w-40 h-12 text-white   "
              >
                See Products
              </button>
            </div>
          </div>
          <div className="flex w-full relative z-0">{renderBanner()}</div>
          {/* <div className="w-full mb-40 mt-20 ">
            <Image
              className="1 rounded-[999px]   "
              width="1500px"
              height="800px"
              src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
            />
          </div> */}

          <div
            ref={productRef}
            className="w-full mt-20  flex sm:flex-row flex-col justify-between items-center mb-20 "
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
          </div>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {[...productData]
              .splice(0, 39)
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

          <div className=" w-full flex mt-20  ">
            <div className="sm:w-1/2 sm:flex hidden">
              <Image
                className=" mr-10 "
                src="/wallpaper/shopping.svg"
                width={"800px"}
                height="800px"
              />
            </div>
            <div className=" sm:w-1/2 w-full    flex flex-col    items-center justify-center  ">
              <span className=" text-center text-black text-6xl font-bold   ">
                About Us
              </span>

              <p className="w-full text-center sm:px-2 px-0 text-xl my-10 text-orange-500 font-medium ">
                Tom & Mercy is a subsidiary of Coastwise group.It amongst other
                things handles thr e-commerce service of the group including
                sales of grocery items. Shop at Tom & Mercy and you get the best
                African and Caribbean grocery shopping experience asking with
                healthy food
              </p>
              {/* <div className=" sm:w-8/12 w-full flex sm:flex-row flex-col justify-between items-center  ">
              {Object.entries(contactDetails).map(([key, value]) => {
                return (
                  <div className="flex flex-col  ">
                    <span className=" self-center capitalize mb-5 font-medium text-orange-500 ">
                      {key}
                    </span>
                    <span className=" w-48 text-center font-medium text-orange-500">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
