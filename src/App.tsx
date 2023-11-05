import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendar3Fill } from "react-icons/bs";
import Like from "./Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Mumbai"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Sign Up
      </Button>
      <BsFillCalendar3Fill color="Red" size={40} />

      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
