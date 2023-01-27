const url = window.location.origin.includes("localhost")
	? "http://localhost:8080/api"
	: "https://lasdelicias.fly.dev/api";



export const processPaymentModel = async (...toRequest) => {

	const query = `{
		processPayment{
  			${toRequest.toString().replace(","," ")}
		}
	}`

	const res = await fetch(url,{
	    method:"POST",
	    headers:{"Content-Type": "application/json; charset=utf-8" },
	    mode:"cors",
	    credentials:"include",
	    body:JSON.stringify({
	      query
	    })
  	})

	const json = await res.json()

	return json
}