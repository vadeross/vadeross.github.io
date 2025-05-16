import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "/src/Styles/Main.scss";

createRoot(document.getElementById("root")!).render(<App />);
