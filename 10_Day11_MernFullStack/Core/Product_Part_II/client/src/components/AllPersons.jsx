import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const AllPersons = ({ products, setProducts }) => {
    const navigate = useNavigate()
    // console.log("----", products, setProducts);
    return (
        <>
            {products && products.map(p =>                 
                <div key={p._id}>
                        <div>
                            <Link to={`/api/products/${p._id}`}> {p.name} {p.price}</Link>
                        </div>
                    </div >
                    )}
        </>
    )
}

export default AllPersons