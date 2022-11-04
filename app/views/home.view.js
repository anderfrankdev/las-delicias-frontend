const homeSectionView = `
  <div class="search">
    <img src="/magnifier.svg" alt="">
    <input type="text" placeholder="Search on Las Delicias">
  </div>
  <div class="special-plate">
    <h2>Shoyu ramen</h2>
    <p class="discount">Discount 25%</p>
    <button>Order now</button>
    <img src="/ramen.jpg" alt="">
  </div>
  <div>
    <h2></h2>
    <div></div>
  </div>
`

const homeView = (styles,state)=> {

  return {
    html:`
    <div class="content-title">
      <h1>Home</h1>
      <img src="/notification.svg" alt="">
    </div>
    <main class="main-content">
      ${homeSectionView}
    </main>
    <nav class="nav-bar">
      <div class="nav-icon"><img src="/home.svg" alt=""></div>
      <div class="nav-icon"><img src="/menu.svg" alt=""></div>
      <div class="nav-icon"><img src="/cart.svg" alt=""></div>
      <div class="nav-icon"><img src="/profile.svg" alt=""></div>
    </nav>
    `,
    
    css:styles
  }
  

}

export default homeView