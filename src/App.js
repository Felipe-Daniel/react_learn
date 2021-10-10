import { useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import ShowUser from "./Components/ShowUsers/ShowUser";
import Card from "./Components/UI/Card";

function App() {
  const [usersList, setUsersList] = useState("");

  function liftInputDataHandler(prevData) {
    const newData = { ...prevData };
    setUsersList((prevState) => {
      return [newData, ...prevState];
    });
  }
  return (
    <Card>
      <AddUser onLiftInputData={liftInputDataHandler} />
      <ShowUser usersList={usersList} />
    </Card>
  );
}

export default App;
