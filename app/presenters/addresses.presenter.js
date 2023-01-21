import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const addAddress = curry((view, event ) => {

	const selector = `#newAddress`
	
	const clicked = event.target.matches(selector)

	if (clicked) {
		let element;

		if (event.target.matches(`#newAddress`)) {
			getById("app").innerHTML+= view
		
		}
		
		
	}	


})