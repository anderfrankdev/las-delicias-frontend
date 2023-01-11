export default class State{
  #name;
  #email;
  #plates;
  get getState(){
    const state = JSON.parse(JSON.stringify({
      name:this.#name,
      email:this.#email,
      plates:this.#plates
    })) 
    
    return state
  }
  set setState(data){
    if(typeof data?.name === "string")
      this.#name = data.name
       
    if(typeof data?.email === "string")
      this.#email = data.email      
  }
  set setPlates(plates){
    if (plates?.constructor === Array)
      this.#plates = plates      
  }
  
  deleteState(){
    this.#name  = undefined ,
    this.#email = undefined ,
    this.#plates = undefined
  }
  
  get isEmpty(){
      return Object.entries(user.getState).length === 0
  }
  
}