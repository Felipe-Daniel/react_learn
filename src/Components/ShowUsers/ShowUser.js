import styles from "./ShowUser.module.scss";

function ShowUser(props) {
  if (props.usersList.length === 0) {
    return (
      <div className={`${styles["users-block__user-block"]} ${styles["no-itens-found"]}`}>
        No items found
      </div>
    );
  }
  return (
    <ul className={styles["users-block"]}>
      {props.usersList.map((user) => (
        <li className={styles["users-block__user-block"]}>
          {`${user.userName}  (${user.age} years old)`}
        </li>
      ))}
    </ul>
  );
}
export default ShowUser;
