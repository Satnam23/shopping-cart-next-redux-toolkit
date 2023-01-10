import React from 'react'
import styles from '../styles/Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { remove, incrementQuantity, decrementQuantity, cartItem } from '../src/features/cart/cartSlice'

const cart = () => {
  const dispatch = useDispatch();
  const addedProduct = useSelector(cartItem);
  const removeHandler = (cart: any) => {
    dispatch(remove(cart))
  }

  const Increment = (cart: any) => {
    dispatch(incrementQuantity(cart));
  }
  const Decrement = (cart: any) => {
    dispatch(decrementQuantity(cart));
  }
  return (
    <>
      <div>
        <h1>This is a cart page</h1>
        <div className={styles.cartWrapper}>
          {addedProduct.length > 0 ?
            (addedProduct.map((cart: any) => {
              return (
                <div key={cart.id} className={styles.cartCard}>
                  <img src={cart.image} alt="cartimage" width={200} height={200} />
                  <h5>{cart.title}</h5>
                  <h5>Rs. {cart.price}</h5>
                  <div className={styles.btns}>
                    <button disabled={cart.quantity === 1} onClick={() => Decrement(cart.id)}>-</button>
                    <p>{cart.quantity}</p>
                    <button onClick={() => Increment(cart.id)}>+</button>
                  </div>
                  <button
                    className={styles.btn}
                    onClick={() => removeHandler(cart.id)}
                  >
                    Remove
                  </button>
                </div>
              )
            }
            )) : (<h3>No product in cart yet</h3>)}
        </div>
      </div>
    </>
  )
}

export default cart
