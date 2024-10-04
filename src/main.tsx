import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// react-query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// mocking
import { enableMocking } from "./api/mock";
// style
import "./assets/style/index.css";
import Home from "./pages/Home";

const client = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </StrictMode>
  );
});
