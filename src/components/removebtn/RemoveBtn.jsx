import { HiOutlineTrash} from "react-icons/hi"
import styles from "./RemoveBtn.module.css"


const RemoveBtn = () => {
    return ( 

<button class={styles.deleteBtn}>
<HiOutlineTrash size={24}/>

</button>


        
     );
}
 
export default RemoveBtn;
