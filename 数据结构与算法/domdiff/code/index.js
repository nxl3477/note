/** 
 * <ul class="list">
 *  <li clas="item">1</li>
 *  <li clas="item">2</li>
 *  <li clas="item">3</li>
 * </ul>
*/

import { diff } from './dom-diff.js'
import { createElement } from './elements.js'

let virtualDom1 = createElement("ul", {
  class: "list"
}, [
  createElement("li", { class: "item"}, ["1"]),
  createElement("li", { class: "item"}, ["2"]),
  createElement("li", { class: "item"}, ["3"])
])

let virtualDom2 = createElement("ul", {
  class: "list-new"
}, [
  createElement("li", { class: "item"}, ["a"]),
  createElement("li", { class: "item"}, ["444"]),
  createElement("li", { class: "item"}, ["c"])
])


const result = diff(virtualDom1, virtualDom2)
export default result