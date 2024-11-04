import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Root } from "./components/index.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  </StrictMode>
);
