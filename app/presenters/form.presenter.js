import {curry} from "/libs/functional.lib";
import {
	checkPassword,
	checkEmail
} from "/libs/forms.lib"
import {getById} from "/libs/dom.lib";

export const checkFormInput = curry( async  ( event )=>{

	const validIds = [
		"email",
		"password"
	]

	const input = event.target

	if (!validIds.includes(input.id)) return

	getById("invalid_password")?.remove()

	if (input.id==="password") {
		const OK = checkPassword(input.value)

		if (OK) {
			input.style.outline = "2px solid green"
			document.querySelector("[type='submit']").disabled=false

		}
		else {

			const errorMsg = "Your password has to be "+
				"8 characters long and has to include "+
				"lowercase letters and symbols"

			const html = `
				<p class="invalid_password" id="invalid_password">${errorMsg}</p>
			`

			input.style.outline = "2px solid red"
			input.insertAdjacentHTML("afterend",html) 
			document.querySelector("[type='submit']").disabled=true
		}
		
	}else if(input.id==="email"){
		const OK = checkEmail(input.value)

		if (OK) {
			input.style.outline = "2px solid green"
			document.querySelector("[type='submit']").disabled=false

		}
		else {
			input.style.outline = "2px solid red"
			document.querySelector("[type='submit']").disabled=true
		}
	}
});