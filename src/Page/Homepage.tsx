import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CTAs from '../Page/CTAs'
import {ProductType, SearchProduct} from '../Page/types/products'
import Filter from '../components/Filter'
type HomepageProps = {
    products: ProductType[],
    onSearch: SearchProduct[]
}

function Homepage({products, onSearch}: HomepageProps) {
    
  return (
        <div>
            <div>
                <div className=" 2xl:container 2xl:mx-auto">
                    <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Apple Products 2019-2022</p>
                    </div>
                    <div className=" py-6 lg:px-20 md:px-6 px-4">
                        <p className=" font-normal text-sm leading-3 text-gray-600 ">Home/Products</p>
                        <hr className=" w-full bg-gray-200 my-6" />

                        <div className=" flex justify-between items-center">
                            <Filter/>
                        
                    </div>
                    <div className=" grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                        {products?.map((item) =>
                            <div className=" relative ">
                                <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                                    <p className="text-xs leading-3 text-gray-800">New</p>
                                </div>
                                <div className=" relative group">
                                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                    <img className=" w-full" src={item.img} alt="A girl Posing Img" />
                                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                                            Add to cart
                                            </button>
                                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                                            <NavLink to={`/products/${item._id}`}>View Detail</NavLink>
                                            </button>
                                    </div>
                                </div>
                                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{item.name}</p>
                                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${item.price}</p>
                            
                            </div>
                        )}
                        {onSearch?.map((item) =>
                            <div className=" relative ">
                                <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                                    <p className="text-xs leading-3 text-gray-800">New</p>
                                </div>
                                <div className=" relative group">
                                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                    <img className=" w-full" src={item.img} alt="A girl Posing Img" />
                                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                                            Add to cart
                                            </button>
                                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                                            <NavLink to={`/products/${item._id}`}>View Detail</NavLink>
                                            </button>
                                    </div>
                                </div>
                                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{item.name}</p>
                                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${item.price}</p>
                            
                            </div>
                        )}
                    </div>
                    <div className=" flex justify-center items-center">
                        <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                    </div>
                </div>
        </div>
        <CTAs/>
                </div>
            
            
        </div>
    );
}

export default Homepage