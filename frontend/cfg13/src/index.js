import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// <ThemeProvider theme={theme}>
//       <div className="App">
//         <p>hi</p>
//         <Button>hi</Button>
//       </div>
//     </ThemeProvider>