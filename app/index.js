import viewsRouter from "./presenters/router.presenter";
import {nextPresentation} from "./presenters/introduction.presenter";
import {previousPresentation} from "./presenters/introduction.presenter";
import {signPresenter} from "./presenters/sessions.presenter";
import introductionView from "./views/introduction.view";
import signView from "./views/sessions.view";
import {presentationDeliveryView} from "./views/introduction.view";
import {presentationFoodView} from "./views/introduction.view";
import homeView from "./views/home.view";
import homeStyles from "./styles/home.style.css?inline";
import {introductionHandler} from "./handlers/introduction.handler";
import {signHandler} from "./handlers/auth.handler";
import {homeHandler} from "./handlers/home.handler";
import signModel from "./models/Sessions.model";
import State from "./models/State.model";
import {checkSessionModel} from "./models/Sessions.model";
import {checkFormInput} from "./presenters/form.presenter";

const f = Object.freeze,
  d = document,
  w = window;

let state = new State();

const listOfRoutes = f([
  f({
    url:"#introduction",
    handler:introductionHandler, 
    view:introductionView
  }),
  f({
    url:"#signup",
    handler:signHandler(checkSessionModel), 
    view:signView("signup")
  }),
  f({
    url:"#signin",
    handler:signHandler(checkSessionModel), 
    view:signView("signin")
  }),
  f({
    url:"#home",
    handler:homeHandler, 
    view:homeView('home',homeStyles)
  }),
  f({
    url:"#home/menu",
    handler:homeHandler, 
    view:homeView('menu',homeStyles)
  }),
  f({
    url:"#home/cart",
    handler:homeHandler, 
    view:homeView('cart',homeStyles)
  }),
  f({
    url:"#home/account",
    handler:homeHandler, 
    view:homeView('account',homeStyles)
  }),
  f({
    url:"#home/account/addresses",
    handler:homeHandler, 
    view:homeView('account/addresses',homeStyles)
  }),
  f({
    url:"#home/account/orders",
    handler:homeHandler, 
    view:homeView('account/orders',homeStyles)
  }),
  f({
    url:"#home/account/favorites",
    handler:homeHandler, 
    view:homeView('account/favorites',homeStyles)
  })
]);

const listOfEventPresenters = f([
  f({element:d,type:'DOMContentLoaded', presenter:viewsRouter(listOfRoutes,state)}),
  f({element:w,type:'hashchange', presenter:viewsRouter(listOfRoutes,state)}),
  f({element:d,type:'click', presenter:nextPresentation(presentationDeliveryView,state)}),
  f({element:d,type:'click', presenter:previousPresentation(presentationFoodView,state)}),
  f({element:d,type:'click', presenter:signPresenter(signModel,state)}),
  f({element:d,type:'input', presenter:checkFormInput})
]);

listOfEventPresenters.forEach(event=>{
  const {element,type,presenter} = event;
  element.addEventListener(type,presenter);
})