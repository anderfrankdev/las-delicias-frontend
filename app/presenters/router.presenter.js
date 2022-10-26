import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

const viewsRouter = curry( async (listOfRoutes,state,event)=>{
  
  getById("app").innerHTML = "";
  getById("styles").innerHTML = "";

  const route = listOfRoutes.filter( route => route.url === location.hash )[0];

  if(!route) return location.hash = "#introduction";
  else return route.router(state);
  
} )

export default viewsRouter