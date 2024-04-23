

import EditTopicForm from "@/components/editTopicForm/EditTopicForm";
import styles from "./page.module.css";

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `https://backenddb-v9jp.onrender.com/api/products/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  
  const { title, description } = await getTopicById(id);

  return (

    <>
    <div className={styles.container}>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
    </>
  );
}
