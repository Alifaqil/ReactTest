import { createContext, useReducer } from "react";

export const TitleContext = createContext(null);
export const TitleDispatch = createContext(null);

export function TitleProvider({ children }) {
  const [data, dispatch] = useReducer(titleReducer, initialTitle);

  return (
    <TitleContext.Provider value={data}>
      <TitleDispatch.Provider value={dispatch}>
        {children}
      </TitleDispatch.Provider>
    </TitleContext.Provider>
  );
}

const initialTitle = {
  title: "Hello",
  subtitle: "Welcome back",
  style: {},
};

function titleReducer(title, action) {
  switch (action.type) {
    case "change1": {
      console.log(1);
      return {
        ...title,
        title: "Alif",
        subtitle: "Programmer di AIA",
        style: { color: "red", backgroundColor: "black" },
      };
    }
    case "change2": {
      console.log(2);
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
