import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";
import {loader,addModalMessage} from "/libs/dom.lib";
import {validateAddress} from "/libs/objectValidation.lib";

export const addAddress = curry(async(addAddress,state,view, event ) => {
	event.preventDefault()
	const selector = `
		#newAddress,
		#addNewAddress`
	
	const clicked = event.target.matches(selector)

	if (clicked) {
		const deleteMsgEvent = `document
		      .getElementById('login_error')
		      .remove()`

		if (event.target.matches(`#newAddress`)) {
			getById("app").innerHTML+= view
		}else if(event.target.matches(`#addNewAddress`)){
			const address = {
				recipient:getById("recipient").value,
				house:getById("house").value,
				street:getById("street").value,
				city:getById("city").value,
				state:getById("state").value,
				zipcode:getById("zipcode").value
			}
			const validation = validateAddress(address)
			if(validation.invalid){
				const {invalidFields} = validation
				const msg = "The following fields are invalid: "+
					`${invalidFields}`.replaceAll(",",", ")

				const deleteMsgEvent = `document
			      .getElementById('login_error')
			      .remove()`

			    document.body.innerHTML += `
			      <div id="login_error" class="login_error">
			        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
			        <p class="message"> ${msg} </p>
			      </div>
			    `
			}else{

				try{
					getById("loader").style.display="initial"
					getById("app").style.display="none"
					const result = await addAddress(address)
					
					if (result?.errors)
						throw new Error()

					const {id} = result.data.addAddress
					const addresses = state.getState.addresses
					const newAddress = {
						id,
						...address,
						main:
							addresses.length<1
							? true
							: false
					}
					addresses.push(newAddress)
					state.setState = {addresses}
					window.location.hash=""
					window.location.hash="#home/account/addresses"
					getById("loader").style.display="none"
					getById("app").style.display="grid"
					document.body.innerHTML += `
				      <div id="login_error" class="login_error">
				        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
				        <p class="message">New address added</p>
				      </div>
				    `
				}catch(e){
					console.log(e)
					document.body.innerHTML += `
				      <div id="login_error" class="login_error">
				        <div class="close_btn" onclick="${deleteMsgEvent}">X</div> 
				        <p class="message">There was an error</p>
				      </div>
				    `
				    getById("loader").style.display="none"
					getById("app").style.display="grid"
				}

			}
			setTimeout(()=>{
			    document
			    .getElementById('login_error')
			    ?.remove()
			},5000)

		}		
	}	
})

export const deleteAddress = curry(async(deleteAddress,state,view, event)=>{
	const selector = `
		.deleteAddress`
	
	const clicked = event.target.matches(selector)

	if (clicked) {
		loader("on")

		const {id} = event.target.parentElement

		const result = await deleteAddress(id)
		if (result?.errors) 
			addModalMessage(result.errors[0].message)
		else{
			const {message} = result.data.deleteAddress 
			
			addModalMessage(message)

			const {addresses} = state.getState
			
			const index = addresses.findIndex(e=>e.id===id)		
			addresses.splice(index,1)

			state.setState={addresses}

			document.querySelector(".cards_container")
				.innerHTML = view(addresses,"addresses")
		}

		loader("off")
	}
})

export const selectAddress = curry(async(selectAddressM,state,view, event)=>{
	const selector = `
		.selectAddress`
	
	const clicked = event.target.matches(selector)

	if (clicked) {
		loader("on")

		const {id} = event.target.parentElement

		const result = await selectAddressM(id)
		if (result?.errors) 
			addModalMessage(result.errors[0].message)
		else{
			const {message} = result.data.selectAddress 
			
			addModalMessage(message)

			const addresses = state.getState.addresses.map(e=>{
				if (e.id===id) {
				e.main=true
				}else{
					e.main=false
				}

				return e	
			})
			
			const index = addresses.findIndex(e=>e.id===id)		

			state.setState={addresses}

			document.querySelector(".cards_container")
				.innerHTML = view(addresses,"addresses")
		}

		loader("off")
	}
})