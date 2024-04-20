import EditTopicForm from "@/components/editTopicForm/EditTopicForm";
import styles from "./page.module.css"

const EditTopic = () => {
    return ( 
        <div className={styles.container}>
        <EditTopicForm/>
        </div>
     );
}
 
export default EditTopic;
