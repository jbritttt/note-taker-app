import Link from "next/link";
import RemoveBtn from "../removebtn/RemoveBtn";
import styles from "./TopicsList.module.css";

import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
  return (
    <div class={styles.topicsWrapper}>
      <div class={styles.topicTitleWrapper}>
        <h2>Topic Title</h2>
        <div>
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      <div>Topics Description egeg Lorem ipsum dolo</div>
    </div>
  );
};

export default TopicsList;
