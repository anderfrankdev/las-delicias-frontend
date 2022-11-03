const homeSectionView = `
  <div class="search">
    <img src="/magnifier.svg" alt="">
    <input type="text" placeholder="Search on Las Delicias">
  </div>
  <div class="special-plate">
  </div>
  <div>
    <h2></h2>
    <div></div>
  </div>
`

const homeView = (state)=> {

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
    
    css:`
    `  
  }
  

}

export default homeView