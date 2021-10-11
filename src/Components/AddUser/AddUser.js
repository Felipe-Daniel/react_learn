import { useState } from "react";
import styles from "./AddUser.module.scss";
import Modal from "./Modal";

function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const [modal, setModal] = useState();

  function liftModalHandler(state) {
    setModal(state);
  }

  function submit(event) {
    event.preventDefault();
    if (userName.length === 0) {
      setModal("Please enter a username");
    } else if (isNaN(Number(age)) || age < 0) {
      setModal('Please enter a valid age ( {">"}0)!');
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
    <div className={styles["form-container"]}>
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
      {modal && (
        <Modal isOpen={modal} onLiftModal={liftModalHandler} message={modal} />
      )}
    </div>
  );
}
export default AddUser;
