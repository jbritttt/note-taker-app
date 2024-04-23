"use client";

import styles from "./EditTopicFrom.module.css";
import { useRouter } from "next/navigation";
import {useState} from "react"

export default function EditTopicForm({ id, title, description }){
    
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  console.log('this is ', id) 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://backenddb-v9jp.onrender.com/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({title:newTitle, description:newDescription }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Topic Description"
      />
      <button className={styles.BtnForm}>Update Topic</button>
    </form>
  );
};


