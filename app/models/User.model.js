const url = window.location.origin.includes("localhost")
  ? "http://localhost:8080/api"
  : "https://lasdelicias.fly.dev/api";



export const addToCartModel = async (data) =>{
  const query = `mutation{
    addToCart(input:${JSON.stringify(data)}){
      message
    }
  }`
  const cart = await fetch(url,{
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
  const cart = await fetch(url,{
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

export const addAddressModel = async (address) =>{

  const {
    recipient,
    house,
    street,
    city,
    state,
    zipcode
  } = address

  const query = `mutation{
    addAddress(input:{
      recipient:"${recipient}",
      house:"${house}",
      street:"${street}",
      city:"${city}",
      state:"${state}",
      zipcode:"${zipcode}"
    }){
      message id
    }
  }`
  const result = await fetch(url,{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return result
  
}

export const deleteAddressModel = async (id) =>{

  const query = `mutation{
    deleteAddress(input:"${id}"){
      message 
    }
  }`
  const address = await fetch(url,{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return address
  
}

export const selectAddressModel = async (id) =>{

  const query = `mutation{
    selectAddress(input:"${id}"){
      message 
    }
  }`
  const address = await fetch(url,{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return address
  
}