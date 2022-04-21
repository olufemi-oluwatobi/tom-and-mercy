import React, { ChangeEventHandler, useState } from 'react';
import { Input } from 'antd';
import Image from 'next/image';
import data from './api/data'
import Layout from '../components/Layout';
import Product from '../components/product'


const Home = () => {
  const [productData, setProductData] = useState(data)
  const contactDetails = {
    phone: '+1 905 410 5286',
    email: 'info@tomandmercy.ca',
    address: '633 King St E, Oshawa, ON L1H 1G3, Canada',
    'Open hours': '8am - 10pm'
  }

  const onSearch = (e: any) => {
    const { target: { value } } = e
    if (!value || !value?.length) {
      return setProductData(data)
    }
    let searchData = data?.filter(o => o['Brand Name'].toLowerCase().includes(value) || o['Product Name'].toLowerCase().includes(value));
    return setProductData(searchData)
  }
  return (
    <Layout>
      <section className="  bg-orange-100   py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 px-20 pb-12">
          <div className='w-full flex sm:flex-row flex-col my-20 justify-between mb-20'>
            <Image width='104px' height='104px' src='/svg/pizza.svg' />
            <div className='flex flex-col justify-center  w-auto items-center '>
              <span className=' font-bold sm:text-8xl text-[15vw] leading-none   sm:w-8/12 w-full  text-center  '>Shop for  African grocery
              </span>
              <span className='   font-bold text-base my-10 text-center sm:w-6/12  w-full  '>
                Find the best grocery products from thousands of top brands at TOM AND MERCY nutrition facts, ingredients, calories, and more for millions of items.
              </span>
              <button className=' rounded-3xl bg-orange-500 w-40 h-12 text-white   '>See Products</button>
            </div>
            <Image width='104px' height='104px' src='/svg/burger.svg' />

          </div>
          <div className='w-full mb-40 mt-20 '>
            <Image className='1 rounded-[999px]   ' width='1500px' height='800px' src='https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80' />
          </div>
          <div className=' border-solid border-t-2 border-b-2  w-full flex flex-col border-gray-300 mb-40 py-32 items-center justify-center  '>
            <span className=' text-center text-black text-6xl font-bold   '>
              About Us
            </span>
            <span className='sm:w-6/12 w-full text-center my-10 text-gray-200 font-medium '>
              Shop at TOM AND MERCY and you get the best African  grocery shopping experience along with healthy food. We stock more than 240,000 great-tasting everyday items and more than 50 fresh produce varieties so you can eat well, every day. We’re also known to offer special seasonal products at unbeatable prices.
            </span>
            <div className=' sm:w-8/12 w-full flex sm:flex-row flex-col justify-between items-center  '>
              {Object.entries(contactDetails).map(([key, value]) => {
                return (
                  <div className='flex flex-col  '>
                    <span className=' self-center capitalize mb-5 font-medium text-orange-500 '>{key}</span>
                    <span className=' w-48 text-center font-medium text-orange-500'>{value}</span>
                  </div>
                )
              })}
            </div>

          </div>
          <div className='w-full  flex sm:flex-row flex-col justify-between items-center mb-20 '>
            <span className=' text-center text-5xl font-bold '>
              Popular products
            </span>
            <div className=' w-[fit-content] sm:mt-0 mt-6 h-full flex justify-center items-center bg-white p-2 '>
              <Input.Search onChange={onSearch} placeholder='Search product' className='  ' />
            </div>
          </div>


          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {productData.filter(d => d.imageSrc).map((product, index) => (
              <Product product={{
                id: index, imageSrc: `${product.imageSrc}`,
                price: product['Unit Price'],
                name: `${product['Brand Name']} ${product['Product Name']}`,
                href: 'prod'
              }} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )

}
export default Home;