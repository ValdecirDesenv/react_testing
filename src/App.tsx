import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import BtnState from "./components/BtnState";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(`Selected item: ${item}`);
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
        <Alert>
          This is a primary alert—check it out! <span> All good !</span>
        </Alert>
      </div>
      <>
        <BtnState color="secondary" onClick={() => console.log("Cliked")}>
          Hey Btn
        </BtnState>
      </>
    </>
  );
}

export default App; // Export the component
