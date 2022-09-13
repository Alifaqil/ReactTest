import { createContext, useReducer } from "react";

const initialTitle = {
  title: "Hello",
  subtitle: "Welcome back",
  style: {},
};

export const TitleContext = createContext(initialTitle);
export const TitleDispatch = createContext(null);
export function TitleProvider({ children }) {
  const [data, dispatch] = useReducer(titleReducer, initialTitle);

  return (
    <TitleContext.Provider
      value={{
        title: data.title,
        subtitle: data.subtitle,
        style: data.sytle,
      }}
    >
      <TitleDispatch.Provider value={dispatch}>
        {children}
      </TitleDispatch.Provider>
    </TitleContext.Provider>
  );
}
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
