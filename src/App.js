import { useReducer } from "react";
import Title from "./Title";
import Button from "./Button";
import "./App.css";

export default function App() {
  const [title, dispatch] = useReducer(titleReducer, initialTitle);

  return (
    <div className="App">
      <Title
        title={title.title}
        subtitle={title.subtitle}
        style={title.style}
      />
      <Button
        onClick={() => {
          dispatch({
            type: "change 1",
          });
        }}
      >
        Change Title
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: "change 2",
          });
        }}
      >
        Change Style
      </Button>
    </div>
  );
}
const initialTitle = {
  title: "Hello",
  subtitle: "Welcome back",
  style: {},
};

function titleReducer(title, action) {
  switch (action.type) {
    case "change 1": {
      return {
        ...title,
        title: "Alif",
        subtitle: "Programmer di AIA",
        style: { color: "red", backgroundColor: "black" },
      };
    }
    case "change 2": {
      return {
        ...title,
        title: "Mega",
        subtitle: "Programmer juga di AIA",
        style: { color: "yellow", backgroundColor: "blue" },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
