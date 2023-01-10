import React, { useEffect } from 'react';
import styles from '../styles/Products.module.css';
import { add } from '../src/features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import { productList, productItems } from '../src/features/product/productSlice'
import Image from 'next/image';

const products = () => {
    const dispatch = useDispatch()
    const allList = useSelector(productItems);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const data = await res.json();
            dispatch(productList(data));
        };
        fetchProducts();    
    }, [])


    const handleAdd = (product: any) => {
        const newobj = {
            ...product,
            quantity:1
        }
        dispatch(add(newobj))
    }
    return (
        <>
            <div className='Productswrapper'>
                <h1>this is a products page</h1>
                {
                    allList.map((product: any) => (

                        <div className={styles.card} key={product.id}>
                            <Image src={product.image} alt="image" width={200} height={200} />
                            <h4>{product.title}</h4>
                            <h5>Rs. {product.price}</h5>
                            <button className={styles.btn} onClick={() => handleAdd(product)}>add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default products
