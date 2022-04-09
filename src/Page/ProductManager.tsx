import React from 'react';
import { useEffect, useState } from 'react';
import {ProductType} from '../Page/types/products'
import {Link, NavLink} from 'react-router-dom'

type ProductManagerProps = {
    onhandleRemove: (id: string) => void
    products: ProductType[],
}


const ProductManager = ({products, onhandleRemove}: ProductManagerProps) => {  
    
    return(
        <div>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><NavLink to={'/admin/add'}>Add Product</NavLink></button>
            <table className="table-auto w-full border-2 bg-gradient-to-tl from-green-200 to-indigo-600">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name Product</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Titile</th>
                        <th colSpan={2}>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item,index) => 
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><img src={item.img} alt="" /></td>
                            <td>{item.desc}</td>
                            <td>{item.title}</td>
                            <td><button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
                            onClick= {() => onhandleRemove(item._id)}>remove</button>
                            </td>
                            <td><button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <Link to={`update/${item._id}`}>Edit</Link>
                            </button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        // <div>
        //     <NavLink to='/add'>Them</NavLink>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>#</th>
        //                 <th>Name</th>
        //                 <th>Price</th>
        //                 <th>Active</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             
        //                 <tr key={index}>
        //                     <td>{index+1}</td>
        //                     <td>{item.name}</td>
        //                     <td>{item.price}</td>
        //                     <td><button onClick= {() => onRemove(item._id)}>remove</button></td>
        //                     <td><Link to={`update/${item._id}`}>Edit</Link></td>
        //                 </tr>
        //             
        //         </tbody>
        //     </table>
        // </div>
    )
}
export default ProductManager