
import styles from "./EditTopicFrom.module.css"

const EditTopicForm = () => {
    return (  

        <form className={styles.form}>
        <input type="text" placeholder="Topic Title"/>
        <input type="text" placeholder="Topic Description"/>
        <button className={styles.BtnForm}>Update Topic</button>
    </form>
    );
}
 
export default EditTopicForm;
