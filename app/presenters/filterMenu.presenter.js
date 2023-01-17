import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const filterMenu = curry(  (viewHtml, state,event)=>{
	const selector = `.menu-item:not(.selected),
	.menu-item:not(.selected)>*`
	
	const clicked = event.target.matches(selector)

	if (clicked){


		const selectedBefore = document.querySelector(".selected")

		selectedBefore.classList.toggle("selected")

		let element;

		if (event.target.matches(`.menu-item`)) {
			element = event.target
			element.classList.toggle("selected") 
		}else{
			element = event.target.parentElement
			element.classList.toggle("selected")
		}

		if (element.id==="All") {
			
			document.querySelector(".menu-list").innerHTML=
				viewHtml(state.getState.plates,"menu")

		}else{
			const plates = state.getState.plates
				.filter(e =>
					e.category===element.id)

			document.querySelector(".menu-list").innerHTML=
				viewHtml(plates,"menu")
		}

	}
  
})