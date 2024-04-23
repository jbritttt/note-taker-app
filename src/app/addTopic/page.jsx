"use client";

import styles from "./page.module.css";
import { useState } from "react"
import {useRouter} from "next/navigation"

const AddTopic = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      alert("Title and Description cant be empty");
      return
    }

    try {
      const res = await fetch('https://backenddb-v9jp.onrender.com/api/products', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({title, description}),
        
          })
       if(res.ok){
        router.push('/')
       } else{
        throw new Error('Failed to create a topic')
       }  
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title} 
          type="text"
          placeholder="Topic Title"
          
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Topic Description"
        />
        <button type="submit" className={styles.BtnForm}>
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
