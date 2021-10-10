import { useState } from "react";
import styles from "./AddUser.module.scss";

function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  function submit(event) {
    event.preventDefault();
    if (isNaN(Number(age))) {
      console.log("modal");
    } else {
      const data = {
        key: userName,
        userName: userName,
        age: age,
      };
      props.onLiftInputData(data);
    }
  }
  return (
    <form onSubmit={submit}>
      <div className={styles["form-block"]}>
        <label className={styles["form-block__label"]}>Username</label>
        <input
          className={styles["form-block__input"]}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
      </div>
      <div className={styles["form-block"]}>
        <label className={styles["form-block__label"]}>Age (Years)</label>
        <input
          className={styles["form-block__input"]}
          onChange={(event) => setAge(event.target.value)}
        ></input>
      </div>
      <button type="submit" className={styles["submit-button"]}>
        Add User
      </button>
    </form>
  );
}
export default AddUser;
