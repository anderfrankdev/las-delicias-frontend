import {getById} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";

export const signPresenter = curry( async  ( signModel, state, event)=>{
  
  let userData = {}, 
    result = {},
    appData = {}


  if (event.target.id==="signup"){
    event.preventDefault()

    const {signup} = signModel


    userData = {
      name:getById("fullname").value,
      email:getById("email").value,
      password:getById("password").value
    }


    result = await signup(userData)
    console.log(result)

    appData = result.data.createUser
    state.setState = appData
    
    if (appData) window.location.hash="#home"


  }else if(event.target.id==="signin"){

    event.preventDefault()

    const {signin} = signModel

    userData = {
      email:getById("email").value,
      password:getById("password").value
    }


    result = await signin(userData)

    appData = result.data.login
    state.setState = appData
    
    if (appData) window.location.hash="#home"


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