import styles from "./Modal.module.scss";

function Modal(props) {
  function update(){
    props.onLiftModal(null)
  }
    return (
      <div className={styles["modal"]}>
        <div className={styles["modal__content"]}>
          <div className={styles["modal__content__title"]}>Invalid Input</div>
          <div className={styles["modal__content__description"]}>
            {props.message}
          </div>
          <button className={styles["modal__content__button"]}  onClick={update}>Okay</button>
        </div>
      </div>
    );
}
export default Modal;
