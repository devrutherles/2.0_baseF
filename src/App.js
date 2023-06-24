import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Client as Styletron } from 'styletron-engine-atomic';
import ServerProvider from "./server/server";
import AuthProvider from "./context/auth";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Provider } from "react-redux";
import store from "./context/store";

import "./styles/app.sass";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { Provider as StyletronProvider } from 'styletron-react';
import Home from "./pages/home";
const engine = new Styletron();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Provider store={store}>
          <ServerProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ServerProvider>
        </Provider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
