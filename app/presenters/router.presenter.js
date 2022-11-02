import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";
import {mountView} from "/libs/dom.lib";

const viewsRouter = curry( async (routerOptions,event)=>{
  
  const { listOfRoutes, state } = routerOptions 

  const result = listOfRoutes.filter( route => route.url === location.hash )[0];

  if(!result) return location.hash = "#introduction";

  const { handler, view } = result
 
  return handler(view,state) 

} )

export default viewsRouter