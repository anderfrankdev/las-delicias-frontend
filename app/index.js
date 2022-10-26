import viewsRouter from "./presenters/router.presenter";
import introductionView from "./views/introduction.view";
import {routers} from "./routes";

const f = Object.freeze,
  d = document,
  w = window

let state;

const listOfRoutes = f([
  f({url:"#introduction", router:routers.introduction(introductionView)})
])

const listOfEventPresenters = [
  f({element:d,type:'DOMContentLoaded', presenter:viewsRouter(listOfRoutes,state)}),
  f({element:w,type:'hashchange', presenter:viewsRouter(listOfRoutes,state)}),
]

listOfEventPresenters.forEach(event=>{
  const {element,type,presenter} = event;
  element.addEventListener(type,presenter)
})
