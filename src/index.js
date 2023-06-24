

import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { NativeBaseProvider, extendTheme } from "native-base";
import reportWebVitals from "./reportWebVitals";
import 'mapbox-gl/dist/mapbox-gl.css';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
  
);

reportWebVitals();
