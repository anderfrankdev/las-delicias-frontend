export default class State{
  #name;
  #email;
  #plates;
  #cart;
  #addresses;
  #discounts;
  get getState(){
    const state = JSON.parse(JSON.stringify({
      name:this.#name,
      email:this.#email,
      plates:this.#plates,
      cart:this.#cart,
      addresses:this.#addresses,
      discounts:this.#discounts
    })) 
    
    return state
  }
  set setState(data){
    if(typeof data?.name === "string")
      this.#name = data.name
       
    if(typeof data?.email === "string")
      this.#email = data.email
    
    if(data?.cart?.constructor === Array)
      this.#cart = data.cart

    if(data?.addresses?.constructor === Array)
      this.#addresses = data.addresses
  }
  
  set setPlates(plates){
    if (plates?.constructor === Array)
      this.#plates = plates      
  }
  set setDiscounts(discounts){
    if (discounts?.constructor === Array)
      this.#discounts = discounts      
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