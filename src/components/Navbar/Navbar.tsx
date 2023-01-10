import Link from "next/link";
import styles from '../Navbar/Index.module.css'
import { useSelector } from "react-redux";


const Navbar = () => {
const items = useSelector((state:any) => state.cart)
  return (
   <>
   <nav className={styles.navitems}>
    <p><Link href="/">MY STORE</Link></p>
    <ul className={styles.navlist}>
        <li className={styles.navlink}><Link href="/">Home</Link></li>
        <li className={styles.navlink}><Link href="/cart">Cart</Link></li>
        <li className={styles.navlink}><Link href="/products">Products</Link></li>
        <span className={styles.cartcount}><Link href="/cartitems">Cart Items</Link> : {items.length}</span>
        <li className={styles.navlink}><Link href="/signup">Sign Up</Link></li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar
