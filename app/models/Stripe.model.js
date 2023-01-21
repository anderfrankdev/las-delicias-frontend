export const pay = async (data) =>{
  console.log(JSON.stringify(data))
  const query = `mutation{
    pay(input:${JSON.stringify(data)}){
      url
    }
  }`
  const pay = await fetch('http://localhost:8080/api',{
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
