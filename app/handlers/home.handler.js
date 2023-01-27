import {mountView} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const homeHandler = curry(async(Models ,view,state)=>{
	
	if (!state.getState?.name) {

		const { 
			checkSessionModel,
			getPlatesModel,
			getDicountModel
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
		const dataDiscounts = [
				"title",
				"stripe_price",
			    "stripe_discount",
			    "percentage",
			    "image"
			]
		const [appData,plates,discounts] = await Promise.all([
			checkSessionModel(...neededData),
			getPlatesModel(...plateData),
			getDicountModel(...dataDiscounts)
		])

		if (appData){
			const {data} = plates
			state.setState = appData
			state.setPlates = data.getPlates
			state.setDiscounts = discounts.data.getDiscounts
			mountView(view,state)	
		}else if (!appData) 
			window.location.hash="#signin";
	
	}else if(state.getState?.name){
		mountView(view,state)
	}
	getById("loader").style.display="none"
	getById("app").style.display="grid"

})