import {curry} from "/libs/functional.lib";
import {addView} from "/libs/dom.lib";

const introduction =curry( async (view,state) => {


  addView(view)
})

export default introduction 