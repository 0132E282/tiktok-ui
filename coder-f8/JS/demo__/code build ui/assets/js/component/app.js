import html from "../core.js";
import {connect} from '../store.js';
const connector = connect()
function app({cars}) {
    return html `
      <h1> ${
        cars.map(car => `<h2> ${car}</h2>`)
      }</h1>
      <button onclick="dispatch('add','awc')"> click 
      </button>
    `
}
export default connector(app)