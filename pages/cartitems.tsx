import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/cartitems.module.css'
import { remove,cartItem } from '../src/features/cart/cartSlice';

const cartitems = () => {
    const dispatch = useDispatch()
    const addedProduct = useSelector(cartItem)
    const handleRemove = (cart:any) => {
        dispatch(remove(cart))
    }
    let totalAmount = 0;
    let color="";
    let snum = 0;
    return (
        <>
            <div>
                <h1 className={styles.heading}>This is a cartitems page</h1>
                <div className={styles.cartWrapper}>

                    <table className={styles.tableseaction}>
                        <tr className={styles.tablerow}>
                            <th>Sr No.</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove Product</th>
                        </tr>
                        {
                          addedProduct.length > 0 ? ( addedProduct.map((prd:any)=>{
                            totalAmount= totalAmount + (prd.price * prd.quantity);
                            snum = snum + 1;
                            snum%2==0 ?  color='lightgray':color='white';
                                return(
                                 <tr key={prd.id} className={styles.tabsrow} style={{backgroundColor:color}}>
                                    <td className={styles.tabdata}>
                                     {snum}
                                    </td>
                                    <td className={styles.tabdata}>
                                     {prd.title}
                                    </td>
                                    <td className={styles.tabdata}>
                                     {prd.quantity}
                                    </td>
                                    <td className={styles.tabdata}>
                                     {prd.price}
                                    </td>
                                    <td className={styles.tabdata}>
                                     <button className={styles.removebtn} onClick={() => handleRemove(prd.id)}>Remove</button>
                                    </td>
                                 </tr>
                                )
                            }, 
                            )):(<h3>No product in cart yet</h3>)
                        }
                        <div >
                        <p className={styles.totalamount}>Total Amount: {totalAmount.toFixed(2)}</p>
                        </div>
                    </table>
                </div>
            </div>
        </>
    )
}

export default cartitems;