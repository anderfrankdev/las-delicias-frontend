export const signupModel = async (newUserData) =>{
  
  const {name,email,password} = newUserData
  
  const query = `mutation{
    createUser(input:{
      name:"${name}",
      email:"${email}",
      password:"${password}"
    }){
      name email
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