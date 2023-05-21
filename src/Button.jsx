import {koleso} from "./core/koleso";

export const Button = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  );