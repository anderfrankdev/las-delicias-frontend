export default class State{
  #name;
  #email;
  #todos;
  get getState(){
    const state = JSON.parse(JSON.stringify({
      name:this.#name,
      email:this.#email,
      todos:this.#todos
    })) 
    
    return state
  }
  set setState(user){
    if(typeof user?.name === "string")
      this.#name = user.name
       
    if(typeof user.email === "string")
      this.#email = user.email
        
  }
  
  deleteState(){
    this.#name  = undefined ,
    this.#email = undefined ,
    this.#todos = undefined
  }
  
  get isEmpty(){
      return Object.entries(user.getState).length === 0
  }
  
}