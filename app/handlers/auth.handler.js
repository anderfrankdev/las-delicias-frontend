import {mountView} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const signHandler = curry(async( Models, view, state) => {
	
	if (!state.getState?.name) {
		
		const { 
		    checkSessionModel,
		    getPlatesModel
		} = Models
		
		const neededData = [
			"name",
			"email",
			"cart",
			`addresses{
				id
				recipient
				house
				street
				city
				state
				zipcode
				main
			}`
		]
		const appData = await checkSessionModel(...neededData)
		if (appData){
			state.setState = appData
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
			const plates = await  getPlatesModel(...plateData)
      		state.setPlates = plates.data.getPlates
			window.location.hash="#home";
		}else if (!appData) 
			mountView(view,state)	
	
	}else if(state.getState?.name){
		window.location.hash="#home";
	}
	getById("loader").style.display="none"
	getById("app").style.display="grid"

})