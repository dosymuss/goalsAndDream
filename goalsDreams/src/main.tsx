import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/HomePage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

// const GlobalStyle = createGlobalStyle`
//   /* Global scrollbar styles */
//   body, html {
//     scrollbar-width: 3px;
//     scrollbar-color: #c0b9b9 #f1f1f1;
//   }

//   /* WebKit-based browsers */
//   ::-webkit-scrollbar {
//     width: 5px;
//     height: 5px;
//   }

//   ::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }

//   ::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 10px;
//     border: 2px solid #f1f1f1;
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }

//   /* Hide scrollbar buttons */
//   ::-webkit-scrollbar-button {
//     display: none;
//   }
// `;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <GlobalStyle /> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
