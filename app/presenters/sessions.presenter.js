import {getById} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";

export const signupPresenter = curry( async  ( signupModel, state, event)=>{
  
  let newUserData = {}, 
    result = {},
    appData = {}


  if (event.target.id==="signup"){

    event.preventDefault()

    

    newUserData = {
      name:getById("fullname").value,
      email:getById("email").value,
      password:getById("password").value
    }


    result = await signupModel(newUserData)
    console.log(result)

    appData = result.data.createUser
    
    if (appData) window.location.hash="#home"

    state.setState = appData

    console.log(state.getState)
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
      .remove()
    },5000)
  }

});