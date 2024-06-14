import { useState } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

// function BtnState({children, onClick}: Props) {
const BtnState = ({ children, onClick, color = "primary" }: Props) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state); // Toggle state
    onClick(); // Call the onClick prop
  };

  return (
    <button className={"btn btn-" + color} onClick={handleClick}>
      {children}
      {state ? "ON" : "OFF"}
    </button>
  );
};

export default BtnState; // Export the component
