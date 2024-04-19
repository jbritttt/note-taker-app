import Link from "next/link";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (  
<nav class={styles.nav}>

<Link class={styles.logo} href={'/'}>Note Taker</Link>
<Link class={styles.btnTopic} href={'/addTopic'}>Add Topic</Link>


</nav>

    );
}
 
export default NavBar;
