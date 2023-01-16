import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const showPlate = curry((state, view, event ) => {

	const selector = `.card,
	.card > *:not(.card_item_btn):not(.card_item_btn)`
	
	const clicked = event.target.matches(selector)

	if (clicked) {

		let element;

		if (event.target.matches(`.card`)) {
			element = state.getState.plates
				.filter(e=>e.id===event.target.id)[0]
		}else{
			element = state.getState.plates
				.filter(e=>e.id===event.target.parentElement.id)[0]
		}
		
		getById("app").innerHTML+= view(element)
		
	}else if(event.target.id==="close_modal"){
		event.target.parent
	}


})