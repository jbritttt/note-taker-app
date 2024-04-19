
import TopicsList from "@/components/topicslist/TopicsList";
import styles from"./page.module.css"


export default function Home() {
  return (
<div className={styles.topicContainer}>
    <TopicsList/>
    <TopicsList/>
    <TopicsList/>
    <TopicsList/>
    </div>
   
  )
  
}
