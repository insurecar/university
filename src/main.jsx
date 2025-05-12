import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";

import { Router } from "./Router";
import "./i18n";

createRoot(document.getElementById("root")).render(<Router />);
