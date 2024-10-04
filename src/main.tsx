import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// mocking
import { enableMocking } from "./api/mock";
// style
import "./assets/style/index.css";

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </StrictMode>
  );
});
