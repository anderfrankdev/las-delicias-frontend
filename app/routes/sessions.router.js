import {curry} from "/libs/functional.lib";
import {addView} from "/libs/dom.lib";

export const signRouter = curry( async (view,state) => {


  addView(view)
})
 