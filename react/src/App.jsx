import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// custom components
import TodoList from "./assets/components/TodoList";
import Form from "./assets/components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList />
      <hr />
      <Form />
    </>
  );
}

export default App;
