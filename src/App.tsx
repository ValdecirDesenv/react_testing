import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import BtnState from "./components/BtnState";
import { useState } from "react";
import CountEvent from "./components/countEvent";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  const [stAlert, setStAlert] = useState(false);
  const toggleAlert = () => {
    setStAlert(!stAlert);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectedItem={handleSelectedItem}
        />
      </div>
      <div>
        {stAlert && (
          <Alert onClose={() => setStAlert(false)}>
            This is a primary alert—check it out! <span> All good !</span>
          </Alert>
        )}
      </div>
      <>
        <BtnState color="secondary" onClick={toggleAlert}>
          Hey Btn
        </BtnState>
      </>
      <>
        <CountEvent />
      </>
    </>
  );
}

export default App; // Export the component
