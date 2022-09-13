import { useReducer } from "react";
import Title from "./Title";
import Button from "./Button";
import "./App.css";

export default function App() {
  const [title, dispatch] = useReducer(titleReducer, initialTitle);

  function changets(obj) {
    dispatch({
      type: "change",
      title: obj.title,
      subtitle: obj.subtitle,
      style: obj.style,
    });
  }
  const textOne = {
    title: "Alif",
    subtitle: "Programmer di AIA",
    style: { color: "red", backgroundColor: "black" },
  };
  const texttwo = {
    title: "Mega",
    subtitle: "Programmer juga di AIA",
    style: { color: "yellow", backgroundColor: "blue" },
  };

  return (
    <div className="App">
      <Title
        title={title.title}
        subtitle={title.subtitle}
        style={title.style}
      />
      <Button
        onClick={() => {
          changets(textOne);
        }}
      >
        Change Title
      </Button>
      <Button
        onClick={() => {
          changets(texttwo);
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
    case "change": {
      return {
        ...title,
        title: action.title,
        subtitle: action.subtitle,
        style: action.style,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
