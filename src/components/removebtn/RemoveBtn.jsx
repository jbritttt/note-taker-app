'use client'

import { HiOutlineTrash} from "react-icons/hi"
import styles from "./RemoveBtn.module.css"


const RemoveBtn = ({ id }) => {
    const removeTopic = async() => {

        const confirmed = confirm(' Are you sure?')
        if(confirmed){
            const res = await fetch(`https://backenddb-v9jp.onrender.com/api/products/${id}`, {
                method: "DELETE",
                
                  })

        }
    }
    return ( 

<button onClick={removeTopic} class={styles.deleteBtn}>
<HiOutlineTrash size={24}/>

</button>


        
     );
}
 
export default RemoveBtn;
