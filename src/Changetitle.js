import { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import "./styles.css";

export default function Changetitle() {
  const [ctitle, setcTitle] = useState({
    title: "Hello",
    subtitle: "Welcome back",
    style: {},
  });
  function changets(obj) {
    setcTitle((ctitle) => ({
      ...ctitle,
      title: obj.title,
      subtitle: obj.subtitle,
      style: obj.style,
    }));
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
        title={ctitle.title}
        subtitle={ctitle.subtitle}
        style={ctitle.style}
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
