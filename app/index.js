import viewsRouter from "./presenters/router.presenter";
import {nextPresentation} from "./presenters/introduction.presenter";
import {previousPresentation} from "./presenters/introduction.presenter";
import introductionView from "./views/introduction.view";
import signView from "./views/sessions.view";
import {presentationDeliveryView} from "./views/introduction.view";
import {presentationFoodView} from "./views/introduction.view";
import homeView from "./views/home.view";
import homeStyles from "./styles/home.style.css"
import {introductionHandler} from "./handlers/introduction.handler";
import {signinHandler,signupHandler} from "./handlers/auth.handler";
import {homeHandler} from "./handlers/home.handler";

const f = Object.freeze,
  d = document,
  w = window;

let state;

const listOfRoutes = f([
  f({url:"#introduction",handler:introductionHandler, view:introductionView}),
  f({url:"#signup",handler:signupHandler, view:signView("signup")}),
  f({url:"#signin",handler:signinHandler, view:signView("signin")}),
  f({url:"#home",handler:homeHandler, view:homeView(homeStyles)})
]);

const routerOptions = {
  state,
  listOfRoutes
}

const listOfEventPresenters = f([
  f({element:d,type:'DOMContentLoaded', presenter:viewsRouter(routerOptions)}),
  f({element:w,type:'hashchange', presenter:viewsRouter(routerOptions)}),
  f({element:d,type:'click', presenter:nextPresentation(presentationDeliveryView,state)}),
  f({element:d,type:'click', presenter:previousPresentation(presentationFoodView,state)})
]);

listOfEventPresenters.forEach(event=>{
  const {element,type,presenter} = event;
  element.addEventListener(type,presenter)
})