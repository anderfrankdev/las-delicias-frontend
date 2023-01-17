import {curry} from "/libs/functional.lib";

export const plateCards = (items, section )=>{
  let cards="";

  if(section === "menu") items?.forEach( item => cards += `
      <div class="card" id="${item.id}">
        <img src="${item?.images?item.images[0]:item.img}" class="card_img" alt="">
        <p class="item_tittle">${item.title}</p>
        <p class="item_price">${item.price}$</p>
        <button class="card_item_btn" id="${item.stripe_code}">Order</button>
        <button class="card_item_btn" style="background-color: #fcf;">Add to favorites</button>
      </div>
    `)
  
  else if(section === "orders") {

    if (items.length<1) cards+="<p style='text-align:center;'>You have not done any order</p>"

    items.forEach( item => cards += `
      <div class="card">
        <img src="${item.img}" alt="">
        <p class="item_tittle">${item.title}</p>
        <p>Amount: ${item.amount}</p>
        <p class="item_price">Price: ${item.price}$</p>
        <p class="item_price">Total: ${(item.price*item.amount).toFixed(1)}$</p>
        <p>${item.date.toLocaleString()}</p>
      </div>
    `)
  }else if( section === "addresses" ){

    if (items.length<1) cards+=`
      <p style='text-align:center;'>You have not added any address</p>`

    items.forEach( item => cards += `
      <div class="card">
        <p class="address_recipient">Fullname: ${item.recipient}</p>
        <p class="address_house">House number: ${item.house}</p>
        <p class="address_street">Street: ${item.street}$</p>
        <p class="address_city">City: ${item.city}</p>
        <p class="address_state">State: ${item.state}</p>
        <p class="address_zipcode">Zipcode: ${item.zipcode}</p>
        <button class="card_item_btn" style='background:#ddd;'">Delete</button>
      </div>
    `)
  }else if( section === "favorites" ){

    if (items.length<1) cards+=`
      <p style='text-align:center;'>You have not added any address</p>`

    items.forEach( item => cards += `
      <div class="card" id="${item.id}">
        <img src="${item?.images?item.images[0]:item.img}" class="card_img" alt="">
        <p class="item_tittle">${item.title}</p>
        <p class="item_price">${item.price}$</p>
        <button class="card_item_btn">Order</button>
      </div>
    `)
  }


  return cards
}

const carrouselView = ( title , items ) =>{

  return `
    <div class="carrousel">
      <h2>${title}</h2>
      <div class="cards">${plateCards(items, "menu")}</div>
    </div>
  ` 
};

const searchBar = `
  <div class="search">
    <img src="/magnifier.svg" alt="">
    <input type="text" placeholder="Search on Las Delicias">
  </div>
`

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
    ${searchBar}
    <div class="special">
      ${specialPlatesView(specials)}
    </div>
    
    ${carrouselView("Top of the week",items)}
    ${carrouselView("Most popular",items)}
    ${carrouselView("Best sellers",items)}
  `
}

const menuNav = (items) => {

  let navHtml = "";

  items.forEach((item,i)=>{
    navHtml+=`
      <div class="menu-item ${i===0 ? 'selected' : '' }"  id="${item.split(" ")[0]}">
        <p>${item}</p>
      </div>
    `
  })

  return `
    <nav class="menu-nav">
      ${navHtml}
    </nav>`
}

const menuSectionView = (state)=>{

  const {plates} = state.getState

  return `
    ${searchBar}
    ${menuNav(
      [ 
        "All",
        "Soup",
        "Fast food",
        "Seafood",
        "Meat",
        "Vegan",
        "Japanese",
        "Italian",
        "Desserts",
        "Salads",
        "Venezuelan"
      ]
    )}
    <div class="menu-list">
      ${plateCards(plates,"menu")}    
    </div>
  `
}

const cartItemsView = (items) => {
  let html = ""

  items.forEach(item=>html+=`
    <div class="cart_item">
      <div class="item_img">
        <img src="${item.img}" alt="">
      </div>
      <p class="item_title">${item.title}</p>
      <div class="item_amount">
        <input type="number" value="${item.amount}">
      </div>
      <p class="item_price">${item.price}$</p>
      <input type="button" value="Delete" class="item_btn">
    </div>
  `)

  return html
}

const cartSectionView = (state) => {
  
  const cart = [{
    img:"/toats.jpg",
    title:"Toats with tomatos",
    price:3.4,
    amount:2
  },{
    img:"/toats.jpg",
    title:"Toats with tomatos",
    price:3.4,
    amount:2
  },{
    img:"/toats.jpg",
    title:"Toats with tomatos",
    price:3.4,
    amount:4
  }];
  
  const nonfree = cart?.filter(a=>a?.price)
  const prices = nonfree.map(a=>a.price*a.amount)

  const emptyTemplate = `
    <p><strong>Oh... seems like the cart is empty</strong></p>
    <p class="cart_ad_msg">Looking for a particular plate? Let's head to the menu and start getting your favorite food</p>
  `

  return `
    <div class="cart">
      <h2 class="cart_title">Shopping cart (${cart.length} ${cart.length<2?'item':'items'})</h2>
      <div class="cart_items">
        ${cart.length < 1 ? emptyTemplate : cartItemsView(cart) }
      </div>
      <div class="cart_count">
        <h2>Summary</h2>
        <p class="cart_count_estimted"><span>Est. Total:</span> <span>${nonfree.length>0 ? prices.reduce((a,b)=>a+b):0}$</span></p>
        <div class="cart_checkout"><span>Secure checkout</span><img src="/triangle.svg" alt="" width="24" height="24"></div>
      </div>
    </div>
  `
}

const accountSectionView = (state, section) => {
  
  const ordersArr = [
    {
      img:"/toats.jpg",
      title:"Toats with tomatos",
      price:3.4,
      date:new Date(),
      amount: 9
    }
  ]

  const addressesArr = [
    {
      recipient:"Ander Carrasco",
      house:32,
      street:"Hoe av.",
      city:"Miami",
      state:"Florida",
      zipcode:37035
    },{
      recipient:"Ander Carrasco",
      house:32,
      street:"Hoe av.",
      city:"Miami",
      state:"Florida",
      zipcode:37035
    }
  ]

  const main = `
    <div class="account_actions">
      <p class="action" onclick="window.location='#home/account/orders'">Your previous orders</p>
      <p class="action" onclick="window.location='#home/account/addresses'">Your addresses</p>
      <p class="action" onclick="window.location='#home/account/favorites'">Your favorite plates</p>
      <p class="action logout" id="logout">Logout</p>
    </div>
  `

  const orders = `
    <div class="account_orders">
      <div class="back" onclick="window.location='#home/account'"><img src="/arrow.svg" with="40" height="40" alt=""></span></div>
      <div class="cards_container">
        ${plateCards(ordersArr,"orders")}
      </div> 
    </div>
  `

  const addresses = `
    <div class="account_orders">
      <div class="back" onclick="window.location='#home/account'"><img src="/arrow.svg" with="40" height="40" alt=""></span></div>
      <div class="cards_container">
         ${plateCards(addressesArr,"addresses")}
      </div>
      <button>Add a new address</button>
    </div>
  `

  const favorites = `
    <div class="account_orders">
      <div class="back" onclick="window.location='#home/account'"><img src="/arrow.svg" with="40" height="40" alt=""></span></div>
      <div class="cards_container">
        ${plateCards(ordersArr,"favorites")}
      </div> 
    </div>
  `

  let html;
  
  if (section==="main") html = main
  else if(section==="orders") html = orders
  else if(section==="addresses") html = addresses
  else if(section==="favorites") html = favorites

  return html
}

const homeView = curry((content,styles,state) => {

  let mainContent;
  let title;

  if(content==="home"){
    mainContent = homeSectionView(state)
    title="Home"
  }else if(content==="menu") {
    mainContent = menuSectionView(state)
    title="Menu"
  }else if(content==="cart"){
    mainContent = cartSectionView(state)
    title="Cart"
  }else if(content==='account'){
    mainContent = accountSectionView(state,"main")
    title="Your account"
  }else if(content==='account/orders'){
    mainContent = accountSectionView(state,"orders")
    title="Your orders history"
  }else if(content==='account/addresses'){
    mainContent = accountSectionView(state,"addresses")
    title="Your addresses"
  }else if(content==='account/favorites'){
    mainContent = accountSectionView(state,"favorites")
    title="Your favorites"
  }else {
    console.error("View not found")
  }

  return {
    html:`
    <div class="content-title">
      <h1>${title}</h1>
      <img src="/notification.svg" alt="">
    </div>
    <main class="main-content">
      ${mainContent}
    </main>
    <nav class="nav-bar">
      <div class="nav-icon" onclick="window.location='#home'"><img src="/home.svg" alt=""></div>
      <div class="nav-icon" onclick="window.location='#home/menu'"><img src="/menu.svg" alt=""></div>
      <div class="nav-icon" onclick="window.location='#home/account'"><img src="/profile.svg" alt=""></div>
    </nav>
    `,
    
    css:styles
  }
  

})

export const plateModal = (element)=>{

  const deleteModal = `document
    .getElementById('modal')
    .remove()`
  
  let ingridients = ""

  element.ingridients.forEach(e=>ingridients+=
  `<li>${e[e.length-1]==="."?e:e+"."}</li>`)

  let groupOfImages = ""

  element.images
    .forEach(e=>groupOfImages+=`<img src="${e}" alt="">`)

  return `
  <div class="modal" id="modal">
    <div class="close_modal" id="close_modal" onclick="${deleteModal}">X</div>
    <div class="modal_content">
      <div class="modal_images">
        <div class="main_image">
          <img src="${element.images[0]}" alt="">
        </div>
        <div class="group">
          ${groupOfImages}
        </div>
      </div>
      <div class="modal_title">
        <h2>${element.title}</h2>
      </div>
      <div class="modal_description">${element.description}</div>
      <div class="modal_ingridients">
        <h3>Ingridients:</h3>
        <ul>${ingridients}</ul>
      </div>
      <div class="modal_resume">
        <div class="modal_price">Price: ${element.price}$</div>
        <input type="number" class="modal_amount" value="1">
        <input type="button" class="checkout card_item_btn" id="${element.stripe_code}" value="Order" name="">
      </div>
    </div>
  </div>`
}

export default homeView