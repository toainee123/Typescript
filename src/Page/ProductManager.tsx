import React from 'react';
import {ProductType} from '../Page/types/products'
import {Link, NavLink} from 'react-router-dom'

type ProductManagerProps = {
    onRemove: (id: string) => void
    products: ProductType[],
}

const ProductManager = ({products, onRemove}: ProductManagerProps) => {
    return(
        <div>
            <NavLink to='/add'>Them</NavLink>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item,index) => 
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button onClick= {() => onRemove(item._id)}>remove</button></td>
                            <td><Link to={`update/${item._id}`}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager