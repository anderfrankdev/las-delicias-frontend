const url = window.location.origin.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://lasdelicias.fly.dev/api";


export const pay = async (products,discounts=false) =>{

  const query = `mutation{
    pay(input:{
      products:${JSON.stringify(products)}
      ${discounts?`coupon:"${discounts}"`:''}
    }){
      url
    }
  }`
  console.log(query)
  const pay = await fetch(url,{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return pay
  
}
