import {curry} from "/libs/functional.lib";
import {getById} from "/libs/dom.lib";

export const nextPresentation = curry(  (viewHtml, state,event)=>{
  
  if (event.target.id==="next"
      || event.target.id === "second-nav-dot"){

    if (getById("presentation").dataset.stage==="food"){ 
        getById("second-nav-dot").style.backgroundColor = "#666";
        getById("first-nav-dot").style.backgroundColor = "#ddd";
        getById("presentation").innerHTML = viewHtml;
        getById("presentation").dataset.stage="delivery"
        getById("next").textContent="Get started"
    }
    else if(getById("presentation").dataset.stage==="delivery" 
      && event.target.id === "next"){
      window.location.hash="signup"
    }

  }
  
})

export const previousPresentation = curry( (viewHtml, state,event)=>{
  
  if (event.target.id === "first-nav-dot"){

    if (getById("presentation").dataset.stage==="delivery"){ 
        getById("second-nav-dot").style.backgroundColor = "#ddd";
        getById("first-nav-dot").style.backgroundColor = "#666";
        getById("presentation").innerHTML = viewHtml;
        getById("presentation").dataset.stage="food"
        getById("next").textContent="Continue"
    }

  }
  
})