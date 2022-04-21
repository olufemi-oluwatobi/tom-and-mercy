
import React from 'react'
import Image from 'next/image'

const Product = ({ product }: { product: { id: string | number, href: string, imageSrc: string, name: string, price: string } }) => {
    return (
        <div className=' w-[fit-content] max-w-[300px] p-5 rounded bg-white ' >
            <Image height='216px' width='216px' className=" border-solid border border-orange-100 p-4 hover:grow  hover:shadow-lg" src={product.imageSrc} />
            <div className=' w-full  flex mt-5 justify-between items-center '>
                <span className='  text-xs font-medium '>{product.name}</span>
                <span className='  text-xs font-medium text-gray-400 '>{product.price}</span>

            </div>
        </div>
    )
}

export default Product