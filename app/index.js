import viewsRouter from "./presenters/router.presenter";
import {nextPresentation} from "./presenters/introduction.presenter";
import {previousPresentation} from "./presenters/introduction.presenter";
import introductionView from "./views/introduction.view";
import signView from "./views/sessions.view";
import {presentationDeliveryView} from "./views/introduction.view";
import {presentationFoodView} from "./views/introduction.view";
import homeView from "./views/home.view";
import homeStyles from "./styles/home.style.css?inline";
import {introductionHandler} from "./handlers/introduction.handler";
import {signinHandler,signupHandler} from "./handlers/auth.handler";
import {homeHandler} from "./handlers/home.handler";

const f = Object.freeze,
  d = document,
  w = window;

const state={name:"Ander"};

const listOfRoutes = f([
  f({
    url:"#introduction",
    handler:introductionHandler, 
    view:introductionView
  }),
  f({
    url:"#signup",
    handler:signupHandler, 
    view:signView("signup")
  }),
  f({
    url:"#signin",
    handler:signinHandler, 
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