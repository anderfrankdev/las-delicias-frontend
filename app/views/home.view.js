const carrouselView = ( title , items ) =>{

  let carrousel="";

  items.forEach( item => carrousel += `
    <div class="card">
      <img src="${item.img}" alt="">
      <p class="item_tittle">${item.title}</p>
      <p class="item_price">${item.price}$</p>
    </div>
  `)

  return `
    <div class="carrousel">
      <h2>${title}</h2>
      <div class="cards">${carrousel}</div>
    </div>
  ` 
};

const specialPlatesView = (specials)=>{
  let html = ""

  specials.forEach(special => {
    html += `
      <div class="special-plate">
        <h2>${special.title}</h2>
        <p class="discount">Discount ${special.discount}%</p>
        <button>Order now</button>
        <img src="${special.img}" alt="">
      </div>
    `

  })

  return html
}

const homeSectionView = (state)=>{

  const items = [
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4
    }
  ]

  const specials = [
    {
      img:"/oreo-cake.webp",
      title:"Oreo cake",
      price:3.4,
      discount:27
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4,
      discount:27
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4,
      discount:27
    },
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4,
      discount:27
    }
  ]

  return `
    <div class="search">
      <img src="/magnifier.svg" alt="">
      <input type="text" placeholder="Search on Las Delicias">
    </div>
    <div class="special">
      ${specialPlatesView(specials)}
    </div>
    
    ${carrouselView("Top of the week",items)}
    ${carrouselView("Most popular",items)}
    ${carrouselView("Best sellers",items)}
  `
}

const homeView = (styles,state)=> {

  return {
    html:`
    <div class="content-title">
      <h1>Home</h1>
      <img src="/notification.svg" alt="">
    </div>
    <main class="main-content">
      ${homeSectionView(state)}
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