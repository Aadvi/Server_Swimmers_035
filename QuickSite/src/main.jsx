import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "grapesjs/dist/css/grapes.min.css";
import "./index.css";
import "bootstrap";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-u4z3nk186scfupkh.us.auth0.com"
      clientId="58gsonsx4PacM2Z94StrrJ8K9RMBmWZ0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
