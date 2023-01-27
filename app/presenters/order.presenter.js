import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const order = curry( async (payModel, state,event)=>{
	const selector = `.card_item_btn.checkout,
	.card_item_btn,
	.cart_checkout,
	.order_special`
	
	const clicked = event.target.matches(selector)
	
	if (clicked){
		let result;
		getById("loader").style.display="initial"
		getById("app").style.display="none"
		if (event.target.matches(".card_item_btn.checkout")) {
			const {id} = event.target
			const {value} = document.querySelector(".modal_amount")

			const element = [id,value+""]

			result = await payModel([element])
		}else if(event.target.matches(".card_item_btn.order-btn")){
			const {id} = event.target
			const element = [id,"1"]
			
			result = await payModel([element])

		}else if(event.target.matches(".cart_checkout")){

			result = await payModel(state.getState.cart)
		}else if(event.target.matches(".order_special")){
			console.log(event.target.dataset)
			const price = event.target.dataset.price
			const coupon = event.target.dataset.coupon
			console.log(price,coupon)
			result = await payModel([[price,"1"]],coupon)
		}

		if (result?.data?.pay?.url) {
			window.location=result.data.pay.url
		}else{
			getById("loader").style.display="none"
			getById("app").style.display="grid"
		}
		//const result = await payModel()
	}
  
})