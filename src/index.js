import "./styles.css";
import createHeader from "./header";
import {createCursor, cursorHover} from "./cursor";
import createHome from "./home";


createHeader()
createHome()











document.querySelector("body").appendChild(createCursor())
document.addEventListener("mousemove", e=>cursorHover(e))
