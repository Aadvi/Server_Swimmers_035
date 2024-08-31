import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "grapesjs/dist/css/grapes.min.css";
import "./index.css";
import "bootstrap";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
