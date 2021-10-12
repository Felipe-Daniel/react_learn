import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./AddUser.module.scss";
import Modal from "./Modal";

function AddUser(props) {
  const usernameRef = useRef("");
  const ageRef = useRef("");

  const [modal, setModal] = useState();

  function liftModalHandler(state) {
    setModal(state);
  }

  function submit(event) {
    event.preventDefault();
    if (usernameRef.current.value.length === 0) {
      setModal("Please enter a username");
    } else if (
      isNaN(Number(ageRef.current.value)) ||
      ageRef.current.value < 0 ||
      ageRef.current.value === ""
    ) {
      setModal('Please enter a valid age ( {">"}0)!');
    } else {
      const data = {
        key: usernameRef.current.value,
        userName: usernameRef.current.value,
        age: ageRef.current.value,
      };
      props.onLiftInputData(data);
      usernameRef.current.value = "";
      ageRef.current.value = "";
    }
  }
  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <div className={styles["form-block"]}>
          <label className={styles["form-block__label"]}>Username</label>
          <input
            className={styles["form-block__input"]}
            ref={usernameRef}
          ></input>
        </div>
        <div className={styles["form-block"]}>
          <label className={styles["form-block__label"]}>Age (Years)</label>
          <input className={styles["form-block__input"]} ref={ageRef}></input>
        </div>
        <button type="submit" className={styles["submit-button"]}>
          Add User
        </button>
      </form>
      {modal &&
        ReactDOM.createPortal(
          <Modal
            isOpen={modal}
            onLiftModal={liftModalHandler}
            message={modal}
          />,
          document.getElementById("modal")
        )}
    </React.Fragment>
  );
}
export default AddUser;
