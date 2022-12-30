import {mountView} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";

export const signHandler = curry(async(checkSessionModel,view,state) => {

	if (!state.getState?.name) {

		const neededData = ["name","email"]
		const appData = await checkSessionModel(...neededData)
		if (appData){
			state.setState = appData
			window.location.hash="#home";
		}else if (!appData) 
			mountView(view,state)	
	
	}else if(state.getState?.name){
		window.location.hash="#home";
	}
	

})