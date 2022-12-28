import {mountView} from "/libs/dom.lib";

export const signinHandler = (view,state) => {
	if (state.getState?.name) window.location.hash="#home"
	console.log(state.getState)
	mountView(view,state)
}

export const signupHandler = (view,state) => {
	if (state.getState?.name) window.location.hash="#home"
	mountView(view,state)
	console.log(state.getState)

}