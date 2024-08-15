import { ChargeAbout } from "./aboutPage";
import { ChargeHelp } from "./helpPage";
import { ChargeHome } from "./homePage";
import { pageLoad } from "./page";
import "./styles.css";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  pageLoad("content");
  ChargeAbout("content", "about");
  ChargeHome("content", "home");
  ChargeHelp("content", "help");
});
