import {mountView} from "/libs/dom.lib";
import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";
import {loader} from "/libs/dom.lib";

export const paymentHandler = curry(async( processPayment, view, state) => {
	
	console.log("payment")
	const data = [
		"successful",
		`address{
      		house
      	    state
      	    street
      	    city
      	    zipcode
      	}
    	order{
    	  id
          amount_paid
          amount_items
        }`
		]
	const payment = await processPayment(...data)

	const result = payment?.data?.processPayment

	if(result){ 
		getById("app").innerHTML = view(result)
		loader("off")
	}

	if (!result.successful) window.location.hash="#home"

	console.log(payment)
})