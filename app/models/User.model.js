export const addToCartModel = async (data) =>{
  const query = `mutation{
    addToCart(input:${JSON.stringify(data)}){
      message
    }
  }`
  const cart = await fetch('http://localhost:8080/api',{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return cart
  
}
export const deleteItemInCart = async (data) =>{
  const query = `mutation{
    deleteItemInCart(input:"${data}"){
      message
    }
  }`
  const cart = await fetch('http://localhost:8080/api',{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return cart
  
}
