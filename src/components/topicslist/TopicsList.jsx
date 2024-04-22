import Link from "next/link";
import RemoveBtn from "../removebtn/RemoveBtn";
import styles from "./TopicsList.module.css";

import { HiPencilAlt } from "react-icons/hi";


async function getTopics () {
try {

  const res = await fetch('https://backenddb-v9jp.onrender.com/api/products', {
cache: "no-store",

  })
  
if(!res.ok){
  throw new Error('Failed to fetch topics')
}
return res.json()


} catch (error) {
  console.log('error loading topics', error)
}

}


async function TopicsList()  {

  const topics = await getTopics()
  //let kkk = topics.map(t => t.title)
  return (

<div>
{
topics.map((t) => (
    <div className={styles.topicsWrapper}>
      <div className={styles.topicTitleWrapper}>
        <h2>{t.title}</h2>
        <div>
          <RemoveBtn id={t._id}/>
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      <div>{t.description}</div>
    </div>
))}
    </div>
  );
};

export default TopicsList;
