export const checkPassword = (password) => {

	const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,+:;-])[A-Za-z\d$@$!%*?&.,+:;-]{8,15}/;

	const passwordIsOk = (!(!regexp_password.exec(password)))

	return passwordIsOk

}

export const checkEmail = ( email ) => {

	const regexp_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
	const passwordIsOk = (!(!regexp_email.exec(email)))
	
	return passwordIsOk
}
