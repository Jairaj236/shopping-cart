     const shop = document.getElementById("shop")

          let cart = []

     shop.innerHTML = shopItemsData.map((data, item)=>{
          let { id, name, price, desc, img } = data;

          return `
            <div class="card">
             <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt=""/>
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <button onclick="decrement('${id}')" class="bi bi-plus-lg">--</button>
              <div id=${id} class="quantity">
             0
              </div>
              <button onclick="increment('${id}')" class="bi bi-plus-lg">+</button>
            </div>
          </div>
        </div>
      </div>
            </div>
          `
     }).join("")

     const decrement = (id)=>{
         
             const remCart =   cart.find((data)=>data.id ===id)
    console.log(remCart)

             if(remCart !== undefined){
               remCart.item -= 1;
             }
            
             updateCart(id)
   console.log(cart)

     }

   const  increment = (id)=>{
      console.log(id)
     const search =  cart.find((dta,index) => dta.id === id )
         
     if(search === undefined){
        cart.push({
            id: id,
            item : 1,
        })
     }
     else{
      search.item +=1
     }
     console.log(cart)
      updateCart(id)
   }

   const updateCart = (id)=>{
   
           const updateCartValues   =  cart.find((data)=> data.id === id)
          console.log(updateCartValues.item)
           document.querySelector(".quantity").textContent = updateCartValues.item
       
   }