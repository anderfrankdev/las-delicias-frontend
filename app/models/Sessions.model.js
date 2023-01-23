export const signup = async (newUserData) =>{
  
  const {name,email,password} = newUserData
  
  const query = `mutation{
    createUser(input:{
      name:"${name}",
      email:"${email}",
      password:"${password}"
    }){
      name email cart
      addresses{
        id
        recipient
        house
        street
        city
        state
        zipcode
        main
      }
    }
  }`
  
  const userData = await fetch('http://localhost:8080/api',{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  }).then(res=>res.json())

  return userData
  
}

export const signin = async (data) =>{
  
  const mutation = `mutation{
    login(input:{
      email:"${data.email}",
      password:"${data.password}"
    }){
      name email cart
      addresses{
        id
        recipient
        house
        street
        city
        state
        zipcode
        main
      }
    }
  }`
  
  const userData = await fetch('http://localhost:8080/api',{
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    body:JSON.stringify({
      query:mutation
    })
  }).then(res=>res.json())
  
  return userData

}

export const signoutModel = async () =>{

  const query = `{
    logout{
      message
    }
  }`

  const userData = await fetch('http://localhost:8080/api',{
    method:"POST",
    mode:"cors",
    credentials:"include",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    body:JSON.stringify({
      query:query
    })
  }).then(res=>res.json())

  return userData
}

export const checkSessionModel = async (...toRequest) =>{

  const query = `{
    getOwnData{
      ${toRequest.toString().replace(","," ")}
    }
  }`
  
  const userData = await fetch('http://localhost:8080/api',{
    method:"POST",
    headers:{"Content-Type": "application/json; charset=utf-8" },
    mode:"cors",
    credentials:"include",
    body:JSON.stringify({
      query
    })
  })

  const {data} = await userData.json()

  return data?.getOwnData
}

const signModel = {
  signup,
  signin
}

export default signModel