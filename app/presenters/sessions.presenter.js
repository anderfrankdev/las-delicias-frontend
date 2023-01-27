import {getById} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";

export const signPresenter = curry( async  ( Models, state, event)=>{

  const validIds = [
    "signup",
    "signin"
  ]

  const id = event.target.id

  if (!validIds.includes(id)) return
  event.preventDefault()
  
  const { 
      signModel,
      getPlatesModel,
      getDicountModel
  } = Models

  const inputsAreValid = 
    !(!getById("email").dataset.valid)
    && !(!getById("password").dataset.valid)

  if (!inputsAreValid) return

  let userData = {}, 
    result = {},
    appData = {}

  if (event.target.id==="signup"){

    const {signup} = signModel


    userData = {
      name:getById("fullname").value,
      email:getById("email").value,
      password:getById("password").value
    }


    result = await signup(userData)

    appData = result.data.createUser
    state.setState = appData
    
    if (appData){
      const dataDiscounts = [
        "title",
        "stripe_price",
        "stripe_discount",
        "percentage",
        "image"
      ]
      const plateData = [
        "id",
        "title",
        "price",
        "ingridients",
        "description",
        "stripe_code",
        "category",
        "images"
    ]
      const [plates,discounts] = await Promise.all([
        getPlatesModel(...plateData),
        getDicountModel(...dataDiscounts)
      ])
      state.setPlates = plates.data.getPlates
      state.setDiscounts = discounts.data.getDiscounts
      window.location.hash="#home";
    }


  }else if(event.target.id==="signin"){

    event.preventDefault()

    const {signin} = signModel

    userData = {
      email:getById("email").value,
      password:getById("password").value
    }

    const plateData = [
        "id",
        "title",
        "price",
        "ingridients",
        "description",
        "stripe_code",
        "category",
        "images"
    ]
    result = await signin(userData)  
    console.log(result)

    appData = result?.data?.login
    state.setState = appData
    
    
    if (appData) {
      const dataDiscounts = [
        "title",
        "stripe_price",
        "stripe_discount",
        "percentage",
        "image"
      ]
      const [plates,discounts] = await Promise.all([
        getPlatesModel(...plateData),
        getDicountModel(...dataDiscounts)
      ])
      state.setPlates = plates.data.getPlates
      state.setDiscounts = discounts.data.getDiscounts
      window.location.hash="#home"
    }

  }

  if (result?.errors) {

    const {message} = result.errors[0]

    const deleteMsgEvent = `document
      .getElementById('login_error')
      .remove()`

    document.body.innerHTML += `
      <div id="login_error" class="login_error">
        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
        <p class="message"> ${message} </p>
      </div>
    `

    setTimeout(()=>{
      document
      .getElementById('login_error')
      ?.remove()
    },5000)
  }

});

export const signoutPresenter = curry( async  ( signoutModel, state, event)=>{

  if (event.target.id==="logout") {

    const data = await signoutModel()

    if(!data?.errors) {
      
      window.location.hash="#signin"
      state.deleteState()    
    }

  }

})