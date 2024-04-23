import Link from "next/link";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (  
<nav className={styles.nav}>

<Link className={styles.logo} href={'/'}>Note Taker</Link>
<Link className={styles.btnTopic} href={'/addTopic'}>Add Topic</Link>


</nav>

    );
}
 
export default NavBar;
