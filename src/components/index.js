import { withTitle } from "../utils/TitleWrapper";
import { HomeComponent } from "./Home/Home";

export const Home = withTitle(HomeComponent, "tab.tab-title");

export { App } from "./App/App";
export { Header } from "./Header/Header";
export { Footer } from "./Footer/Footer";
