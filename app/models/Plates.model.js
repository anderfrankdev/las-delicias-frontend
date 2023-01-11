export const getPlatesModel = async (...toRequest) => {

	const query = `{
	  getPlates{
	    ${toRequest.toString().replace(","," ")}
	  }
	}`

	const res = await fetch('http://localhost:8080/api',{
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