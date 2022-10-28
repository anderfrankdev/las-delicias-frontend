import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";
import {mountView} from "/libs/dom.lib";

const viewsRouter = curry( async (listOfRoutes,state,event)=>{
  
  getById("app").innerHTML = "";
  getById("styles").innerHTML = "";

  const route = listOfRoutes.filter( route => route.url === location.hash )[0];

  if(!route) return location.hash = "#introduction";

  const { router, view } = route
 
  return router 
    ? router(view,state) 
    : mountView(view,state)

} )

export default viewsRouter