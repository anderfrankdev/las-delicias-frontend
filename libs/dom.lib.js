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