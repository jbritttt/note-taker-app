
import styles from "./page.module.css"

const AddTopic = () => {
    return ( 

        <div className={styles.container}>

<form className={styles.form}>
    <input type="text" placeholder="Topic Title"/>
    <input type="text" placeholder="Topic Description"/>
    <button className={styles.BtnForm}>Add Topic</button>
</form>


        </div>
     );
}
 
export default AddTopic;
