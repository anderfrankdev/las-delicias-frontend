import viewsRouter from "./presenters/router.presenter";
import {nextPresentation} from "./presenters/introduction.presenter";
import {previousPresentation} from "./presenters/introduction.presenter";
import {
  signPresenter,
  signoutPresenter
} from "./presenters/sessions.presenter";
import introductionView from "./views/introduction.view";
import signView from "./views/sessions.view";
import {presentationDeliveryView} from "./views/introduction.view";
import {presentationFoodView} from "./views/introduction.view";
import {paymentView} from "./views/payment.view";
import {plateCards} from "./views/home.view";
import homeView from "./views/home.view";
import {plateModal} from "./views/home.view";
import {cartSectionView} from "./views/home.view";
import {addressModal} from "./views/home.view";
import homeStyles from "./styles/home.style.css?inline";
import {introductionHandler} from "./handlers/introduction.handler";
import {signHandler} from "./handlers/auth.handler";
import {homeHandler} from "./handlers/home.handler";
import {paymentHandler} from "./handlers/payment.handler";
import signModel from "./models/Sessions.model";
import {signoutModel} from "./models/Sessions.model";
import State from "./models/State.model";
import {checkSessionModel} from "./models/Sessions.model";
import {getPlatesModel} from "./models/Plates.model";
import {getDicountModel} from "./models/Discount.model";
import {pay} from "./models/Stripe.model";
import {addToCartModel} from "./models/User.model";
import {deleteItemInCart} from "./models/User.model";
import {addAddressModel} from "./models/User.model";
import {deleteAddressModel} from "./models/User.model";
import {selectAddressModel} from "./models/User.model";
import {processPaymentModel} from "./models/Order.model";
import {checkFormInput} from "./presenters/form.presenter";
import {showPlate} from "./presenters/plates.presenter";
import {filterMenu} from "./presenters/filterMenu.presenter";
import {order} from "./presenters/order.presenter";
import {addToCart} from "./presenters/cart.presenter";
import {increaseItem} from "./presenters/cart.presenter";
import {deleteItem} from "./presenters/cart.presenter";
import {addAddress} from "./presenters/addresses.presenter";
import {deleteAddress} from "./presenters/addresses.presenter";
import {selectAddress} from "./presenters/addresses.presenter";

const f = Object.freeze,
  d = document,
  w = window;

let state = new State();

const listOfRoutes = f([
  f({
    url:"#introduction",
    handler:introductionHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:introductionView
  }),
  f({
    url:"#signup",
    handler:introductionHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:signView("signup")
  }),
  f({
    url:"#signin",
    handler:introductionHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:signView("signin")
  }),
  f({
    url:"#home",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('home',homeStyles)
  }),
  f({
    url:"#home/menu",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('menu',homeStyles)
  }),
  f({
    url:"#home/cart",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('cart',homeStyles)
  }),
  f({
    url:"#home/account",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('account',homeStyles)
  }),
  f({
    url:"#home/account/addresses",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('account/addresses',homeStyles)
  }),
  f({
    url:"#home/account/orders",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('account/orders',homeStyles)
  }),
  f({
    url:"#home/account/favorites",
    handler:homeHandler({
      checkSessionModel,
      getPlatesModel,
      getDicountModel
    }), 
    view:homeView('account/favorites',homeStyles)
  }),
  f({
    url:"#payment",
    handler:paymentHandler(processPaymentModel), 
    view:paymentView,
  })
]);

const listOfEventPresenters = f([
  f({
    element:d,
    type:'DOMContentLoaded', 
    presenter:viewsRouter(listOfRoutes,state)
  }),
  f({
    element:w,
    type:'hashchange', 
    presenter:viewsRouter(listOfRoutes,state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:nextPresentation(presentationDeliveryView,state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:previousPresentation(presentationFoodView,state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:signPresenter({
      signModel,
      getPlatesModel,
      getDicountModel
    },state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:signoutPresenter(signoutModel,state)
  }),
  f({
    element:d,
    type:'input', 
    presenter:checkFormInput
  }),
  f({
    element:d,
    type:'click', 
    presenter:showPlate(state,plateModal)
  }),
  f({
    element:d,
    type:'click', 
    presenter:filterMenu(plateCards,state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:order(pay,state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:addToCart(addToCartModel,state)
  }),
  f({
    element:d,
    type:'input', 
    presenter:increaseItem(
      addToCartModel,
      cartSectionView,
      state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:deleteItem(
      deleteItemInCart,
      cartSectionView,
      state)
  }),
  f({
    element:d,
    type:'click', 
    presenter:addAddress(
      addAddressModel,
      state,
      addressModal)
  }),
  f({
    element:d,
    type:'click', 
    presenter:deleteAddress(
      deleteAddressModel,
      state,
      plateCards)
  }),
  f({
    element:d,
    type:'click', 
    presenter:selectAddress(
      selectAddressModel,
      state,
      plateCards)
  })
]);

listOfEventPresenters.forEach(event=>{
  const {element,type,presenter} = event;
  element.addEventListener(type,presenter);
})