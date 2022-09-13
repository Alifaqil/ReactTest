import { useContext } from "react";
import Title from "./Title";
import Button from "./Button";
import "./App.css";
import { TitleProvider, TitleContext, TitleDispatch } from "./TitleContext.js";

export default function App() {
  // const [title, dispatch] = useReducer(titleReducer, initialTitle);
  const data = useContext(TitleContext);
  const dispatch = useContext(TitleDispatch);
  return (
    <TitleProvider>
      <div className="App">
        <Title title={data.title} subtitle={data.subtitle} style={data.style} />
        <Button
          onClick={() => {
            dispatch({ type: "change1" });
          }}
        >
          Change Title
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "change2" });
          }}
        >
          Change Style
        </Button>
      </div>
    </TitleProvider>
  );
}
// const initialTitle = {
//   title: "Hello",
//   subtitle: "Welcome back",
//   style: {},
// };

// function titleReducer(title, action) {
//   switch (action.type) {
//     case "change 1": {
//       return {
//         ...title,
//         title: "Alif",
//         subtitle: "Programmer di AIA",
//         style: { color: "red", backgroundColor: "black" },
//       };
//     }
//     case "change 2": {
//       return {
//         ...title,
//         title: "Mega",
//         subtitle: "Programmer juga di AIA",
//         style: { color: "yellow", backgroundColor: "blue" },
//       };
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }
