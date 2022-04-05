import React from 'react'
import { Navigate, NavLink, Link } from 'react-router-dom'
import {TypeCategory} from '../Page/types/Category'
type CategoryProps = {
    RemoveCate: (id: string) => void
  category: TypeCategory[]
}

const Category = ({category, RemoveCate}: CategoryProps) => {
  return (
        <table className="table-auto w-full border-2 bg-gradient-to-tl from-green-200 to-indigo-600">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name Category</th>
                    <th colSpan={2}>Active</th>
                </tr>
            </thead>
            <tbody>
                {category?.map((item,index) => 
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td><button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick= {() => RemoveCate(item._id)}>remove</button></td>
                        <td><button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><Link to={`update/${item._id}`}>Edit</Link></button></td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default Category