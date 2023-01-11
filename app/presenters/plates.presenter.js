import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const showPlate = curry(( view, event ) => {

	const selector = `.card,
	.card > *:not(.card_item_btn):not(.card_item_btn)`
	
	const clicked = event.target.matches(selector)

	if (clicked) {
	
		getById("app").innerHTML+= view
	
	}else if(event.target.id==="close_modal"){
		event.target.parent
	}


})