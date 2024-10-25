import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import classes from './main.module.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createTheme, Input, MantineProvider } from "@mantine/core";
import { MainPage } from "./pages/MainPage.tsx";
import { CreatePageGeneric } from "./pages/CreatePageGeneric.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/create",
        element: <CreatePageGeneric />,
      },
    ],
  },
]);

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
