'use client'

import { HiOutlineTrash} from "react-icons/hi"
import styles from "./RemoveBtn.module.css"
import { useRouter } from "next/navigation"

const RemoveBtn = ({ id }) => {

    const router = useRouter()
    const removeTopic = async() => {

        const confirmed = confirm(' Are you sure?')
        if(confirmed){
            const res = await fetch(`https://backenddb-v9jp.onrender.com/api/products/${id}`, {
                method: "DELETE",
                
                  })

                  if(res.ok){
                    router.refresh()
                  }
                  

        }
    }
    return ( 
<>
<button onClick={removeTopic} className={styles.deleteBtn}>
<HiOutlineTrash size={24}/>

</button>

</>
        
     );
}
 
export default RemoveBtn;
