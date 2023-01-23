import {curry} from "/libs/functional.lib";

export const getById = (id) => document.getElementById(id)

export const viewToApp = curry((action ,view,state) => {

	const {html,css} = typeof view === 'function' 
    	? view(state)
    	: view;

	if (action==="resetView") {
		document.getElementById("styles").innerHTML = css
		document.getElementById("app").innerHTML = html
	}else if(action==="addView"){
		document.getElementById("styles").innerHTML += css
		document.getElementById("app").innerHTML += html
	}
})

export const mountView = viewToApp("resetView")
export const addView = viewToApp("addView")

export const addModalMessage = curry((message)=>{
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
})

export const loader = action=>{
	if(action==="on"){
		getById("loader").style.display="initial"
		getById("app").style.display="none"
	}else if(action==="off"){
		getById("loader").style.display="none"
		getById("app").style.display="grid"
	}
}