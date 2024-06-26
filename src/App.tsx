import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import BtnState from "./components/BtnState";
import { useEffect, useState } from "react";
import CountEvent from "./components/countEvent";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [game, setGame] = useState({
    id: 1,
    players: {
      score: 0,
      name: "Chess",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Pizza Spice",
    toppings: ["cheese", "pepperoni"],
  });
  const [cart, setCart] = useState({
    discount: 0,
    items: [{ id: 1, title: "mango", quantity: 1, price: 2.5 }],
  });
  const [category, setCategory] = useState("");
  const [stAlert, setStAlert] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const connect = () => console.log("Connecting to the server...");
  const disconnect = () => console.log("Disconnecting from the server...");

  const toggleAlert = () => {
    setStAlert(!stAlert);
  };

  const handleClick = () => {
    setGame({
      ...game,
      players: {
        ...game.players,
        score: game.players.score + 1,
        name: "Soccer",
      },
    });
  };

  const handleClickCart = () => {
    setCart({
      ...cart,
      items: [
        ...cart.items.map((item) =>
          item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
        ),
      ],
    });
  };

  const handleClearCart = () => {
    setCart({ ...cart, items: [] }); // Clear only the items array
  };

  const handleSelectedItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        console.log(response.data[0].id);
        setUsers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <Navbar cartItemsCount={cart.items.length} />
      <Cart
        cartItems={cart.items.map((item) => item.title)}
        onClearCart={handleClearCart}
      />
      <button onClick={handleClickCart}>Add Cart</button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      <div>
        {stAlert && (
          <Alert onClose={() => setStAlert(false)}>
            This is a primary alert—check it out! <span> All good !</span>
          </Alert>
        )}
      </div>
      <BtnState color="secondary" onClick={toggleAlert}>
        Hey Btn
      </BtnState>
      <CountEvent />
      <div>
        <ExpandableText maxChars={110}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          ducimus, doloribus, culpa placeat debitis porro labore tenetur
          consequuntur animi ipsum aut quod. Recusandae repellendus tenetur
          nostrum quam sit repudiandae! Amet dolorum obcaecati velit facere esse
          magni itaque quam qui ratione recusandae atque veritatis error,
          consectetur dolore iure, at aut repudiandae doloremque, tempore sequi.
          Quo, quis. Harum maiores rem nisi fuga eos iure dignissimos voluptas
          culpa provident, ducimus velit illum iste dicta incidunt perspiciatis
          assumenda aspernatur et laboriosam aperiam fugiat voluptatum non?
          Pariatur ipsa aspernatur amet dolore facilis nobis obcaecati dicta
          similique accusantium. Labore enim voluptatibus blanditiis quasi,
          aliquam dolore delectus.
        </ExpandableText>
      </div>
      <select onChange={(event) => setCategory(event.target.value)}>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <ProductList category={category} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App; // Export the component
