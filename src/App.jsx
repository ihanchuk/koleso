import {koleso} from "./core/koleso.js";
import {Button} from "./Button.jsx";

const render = (node) => {
  console.log("rendering:::", node);
}


export const App = () => (
  <div>
    <h1>Hello its me</h1>
    <Button onClick={() => alert(1)}>Click 11</Button>
    <Button onClick={() => alert(2)}>Click 12</Button>
    <Button onClick={() => alert(3)}>Click 13</Button>
  </div>
);

// const rootElement = document.getElementById("root");
// rootElement.appendChild(<App />);