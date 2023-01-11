import {mountView} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";

export const homeHandler = curry(async(Models ,view,state)=>{
	
	if (!state.getState?.name) {

		const { 
			checkSessionModel,
			getPlatesModel
		} = Models
		
		const neededUserData = ["name","email"]
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
		const [appData,plates] = await Promise.all([
			checkSessionModel(...neededUserData),
			getPlatesModel(...plateData)
		])

		if (appData){
			const {data} = plates
			state.setState = appData
			state.setPlates = data.getPlates
			mountView(view,state)	
		}else if (!appData) 
			window.location.hash="#signin";
	
	}else if(state.getState?.name){
		mountView(view,state)
	}

})