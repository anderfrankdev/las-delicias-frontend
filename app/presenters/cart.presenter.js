import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const addToCart = curry(async(addToCart,state,event)=>{
	const selector = `.cart-btn:not(.added)`
	
	const clicked = event.target.matches(selector)
	
	if (clicked){
		getById("loader").style.display="initial"
		getById("app").style.display="none"
		const plates = state.getState.plates
		const plate = plates
			.filter(e=>e.stripe_code===event.target.parentElement.dataset.id)[0];

		const data = [[plate.stripe_code,"1"]]
		
		const deleteMsgEvent = `document
		      .getElementById('login_error')
		      .remove()`
		
		try{
			const result = await addToCart(data)
			console.log(result)
			const cart = new Map(state.getState.cart)
			
			data.forEach(e=>{
				
				const [id,quantity] = e 
				
				if (cart.get(id)) {
					const newQuantity = Number(cart.get(id))
						+ Number(quantity);

					cart.set(id,`${newQuantity}`)
				}else{
					cart.set(id,quantity)
				}
		
			})
			state.setState = {cart:Array(...cart)}
		    document.body.innerHTML += `
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
		        <p class="message">Added succesfully</p>
		      </div>
		    `
		}catch(err){
			document.body.innerHTML += `
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
		        <p class="message">There was an error</p>
		      </div>
		    `
		}
		getById("loader").style.display="none"
		getById("app").style.display="grid"
		setTimeout(()=>{
		    document
		    .getElementById('login_error')
		    ?.remove()
		},5000)
	}

})

export const deleteItem = curry(async(deleteItemInCart,view,state,event)=>{
	
	const selector = `.item_btn`
	
	const clicked = event.target.matches(selector)
	
	if (clicked){
		getById("loader").style.display="initial"
		getById("app").style.display="none"

		const plate = event.target.parentElement.id

		const deleteMsgEvent = `document
		      .getElementById('login_error')
		      .remove()`
		
		try{
			const result = await deleteItemInCart(plate)
			console.log(result)
			let cart = new Map(state.getState.cart)
			event.target.parentElement.remove()
			cart.delete(plate)
			
			state.setState = {cart:Array(...cart)}
		    document.body.innerHTML += `
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
		        <p class="message">Delete succesfully</p>
		      </div>
		    `
		    
		    getById("main-content").innerHTML=view(state)

		}catch(err){
			console.log(err)
			document.body.innerHTML += `
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
		        <p class="message">There was an error</p>
		      </div>
		    `
		}
		getById("loader").style.display="none"
		getById("app").style.display="grid"
		setTimeout(()=>{
		    document
		    .getElementById('login_error')
		    ?.remove()
		},5000)
	}

})

export const increaseItem = curry(async(addToCart,view,state,event)=>{
	const selector = `.item_quatity`
	
	const clicked = event.target.matches(selector)
	
	if (clicked){
		if(event.target.value<1) return
		getById("loader").style.display="initial"
		getById("app").style.display="none"
		const plates = state.getState.cart
		const plate = plates
			.filter(e=>e[0]===
				event.target.parentElement.parentElement.id)[0]

		const total = Number(event.target.value) - Number(plate[1]);

		console.log(total)
		const data = [[plate[0],`${total}`]]
		
		const deleteMsgEvent = `document
		      .getElementById('login_error')
		      .remove()`
		
		try{
			const result = await addToCart(data)
			console.log(result)
			const cart = new Map(state.getState.cart)
			
			data.forEach(e=>{
				
				const [id,quantity] = e 
				
				if (cart.get(id)) {
					const newQuantity = Number(cart.get(id))
						+ Number(quantity);

					cart.set(id,`${newQuantity}`)
				}else{
					cart.set(id,quantity)
				}
		
			})
			state.setState = {cart:Array(...cart)}
		    document.body.innerHTML += `
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
		        <p class="message">Cart modified</p>
		      </div>
		    `
		}catch(err){
			console.log(err)
			document.body.innerHTML += `
		      <div id="login_error" class="login_error">
		        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
		        <p class="message">There was an error</p>
		      </div>
		    `
		}
		getById("loader").style.display="none"
		getById("app").style.display="grid"
	    getById("main-content").innerHTML=view(state)

		setTimeout(()=>{
		    document
		    .getElementById('login_error')
		    ?.remove()
		},5000)
	}

})