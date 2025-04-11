import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "/src/Styles/Main.scss";
console.log(App);
createRoot(document.getElementById("root")).render(<App />);
