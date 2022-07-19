import { createStore } from "./core.js";
import reducer from "./reducre.js"
const{attach , connect , dispatch } = createStore(reducer)
window.dispatch = dispatch
export {
    attach ,
    connect
}