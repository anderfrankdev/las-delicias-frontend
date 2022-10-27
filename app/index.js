import viewsRouter from "./presenters/router.presenter";
import {signRouter} from "./routes/sessions.router.js";
import {nextPresentation} from "./presenters/introduction.presenter";
import {previousPresentation} from "./presenters/introduction.presenter";
import introductionView from "./views/introduction.view";
import signView from "./views/sessions.view";
import {presentationDeliveryView} from "./views/introduction.view";
import {presentationFoodView} from "./views/introduction.view";
import {routers} from "./routes";

const f = Object.freeze,
  d = document,
  w = window

let state;

const listOfRoutes = f([
  f({url:"#introduction", router:routers.introduction(introductionView)}),
  f({url:"#signup", router:signRouter(signView("signup"))}),
  f({url:"#signin", router:signRouter(signView("signin"))})
])

const listOfEventPresenters = [
  f({element:d,type:'DOMContentLoaded', presenter:viewsRouter(listOfRoutes,state)}),
  f({element:w,type:'hashchange', presenter:viewsRouter(listOfRoutes,state)}),
  f({element:d,type:'click', presenter:nextPresentation(presentationDeliveryView,state)}),
  f({element:d,type:'click', presenter:previousPresentation(presentationFoodView,state)})
]

listOfEventPresenters.forEach(event=>{
  const {element,type,presenter} = event;
  element.addEventListener(type,presenter)
})
