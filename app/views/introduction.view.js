export const presentationFoodView = `
  <div class="img"><img src="/steak_dinner.jpeg" alt=""></div>
  <h2 class="title">All your favorite foods</h2>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque.</p>`;

export const presentationDeliveryView = `
  <div class="img"><img src="/food-delivery.png" alt=""></div>
  <h2 class="title">Get delivered at your doorstep</h2>
  <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque.</p>`;


const introductionView = {
  
  html:`
    <div class="introduction" id="introduction">
      <div class="logo">
        <img src="/logo-bar.png" alt="">
      </div>
      <div class="presentation" id="presentation" data-stage="food">
        ${presentationFoodView}
      </div>
      <div class="dot-nav">
        <div class="dot-item first" id="first-nav-dot"></div>
        <div class="dot-item last" id="second-nav-dot"></div>
      </div>
      <div class="nav-buttons">
        <button class="nav-button next" id="next">Continue</button>
        <button class="nav-button log" onclick="window.location.hash='login'">
          Sign in
        </button>
      </div>
    </div>
  `,
  
  css:`

  #app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width:100%;
    height:100vh;
    overflow: auto;
  }

  .introduction{
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-template-areas: 
      "logo"
      "presentation"
      "nav"
      "buttons";
    grid-template-rows: repeat(2, auto) min-content auto ;
    font-family: sans-serif;
    height: 100%;
    margin-top:0.5rem;
    margin-bottom:2rem;
  }

  .logo{
    width:100%;
  }

  .logo>img{
    width:45%;
  }

  .presentation,
  .logo,
  .nav-buttons,
  .dot-nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .presentation>.img{
    border-radius: 50%;
    overflow: hidden;
    width: 60%;
    height: 60vw;
    margin-top: 1rem;
  }

  .presentation>.img>img{
    height: 100%;
    width: 100%;
  }

  .logo{
    grid-area: logo;
    
  }

  .presentation{
    grid-area: presentation;
  }

  .dot-nav{
    grid-area: nav;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .nav-buttons{
    grid-area: buttons;
    justify-content: space-evenly;

  }

  .presentation > .description{
    width: 60%;
    text-align: center;
    color: #333;
    font-size: 0.9rem;
  }

  .presentation > .title{
    width: 60%;
    text-align: center;
    margin-bottom: 0;
    margin-top: 1.7rem;
  }

  .nav-buttons>.nav-button{
    width: 70%;
    height: 3rem;
    border: none;
    font-size: 1.4rem;
    background: none;
    border-radius: 10px;
    font-weight: bolder;
  }

  .nav-buttons .next{
    background-color: #69b550;
    color: #eee;
    margin-bottom:0.4rem;
  }
  .nav-buttons .log{
    color: #58a441;
    background-color: #eee;
  }

  .dot-item{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #ddd;
    margin-inline: 0.4rem;
    border-radius: 50%;
  }
  .dot-item.first{
    background-color: #666;
  }

  @media (min-width: 432px) and (min-height:432px) {

    #app{
      background-image: linear-gradient(120deg, #69b550, #f58634);
    }

    .introduction {
      width: 375px !important;
      height: 666px !important;
      padding-bottom: 2rem;
      padding-top: 0.4rem;
      margin: 0;
      border-radius: 14px;
      background-color: #fff;
    }
    .img{
      height: 225px !important;
      width: 225px !important;
    }
  }
  `

}

export default introductionView 