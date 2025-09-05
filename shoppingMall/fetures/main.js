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
              <button onclick="decrement(${id})" class="bi bi-dash-lg">--</button>
              <div id=${id} class="quantity">
             0
              </div>
              <button onclick="increment(${id})" class="bi bi-plus-lg">+</button>
            </div>
          </div>
        </div>
      </div>
            </div>
          `
     }).join("")

     const decrement = (id)=>{
               const selectedId = id.id

             const remCart =   cart.find((data)=>data.id === selectedId)
    console.log(remCart)

             if(remCart !== undefined){
               remCart.item -= 1;
             }
            
             updateCart(id)
       console.log(cart)
     }

   const  increment = (id)=>{
      // console.log(id)
      const selectedId = id.id
     const search =  cart.find((dta,index) => dta.id === selectedId )
         
     if(search === undefined){
        cart.push({
            id: selectedId,
            item : 1,
        })
     }
     else{
      search.item +=1
     }
     console.log(cart)
      updateCart(id)
   }

  //  const updateCart = (id)=>{
  //   console.log("id",id)
  //          let updateCartValues =  cart.find((data,index)=> data.id === id.id)
  //         console.log("@@",updateCartValues)
  //         id.innerHTML = updateCartValues.item

  //         const incrementbtn =   document.getElementById(id.id)
  //         // console.log(value)
  //         if(updateCartValues.item >= 10 ){
  //            incrementbtn.disabled = true;
  //         }
  //  }


  const updateCart = (id) => {
    // id is the div element, so id.id gives its string ID.
    const quantityDiv = document.getElementById(id.id);

    // Find the item in the cart.
    const updateCartValues = cart.find((data) => data.id === id.id);

    if (updateCartValues && quantityDiv) {
        // Update the quantity display.
        quantityDiv.innerHTML = updateCartValues.item;


        const parent = quantityDiv.parentElement;
        const incrementbtn = parent.querySelector('.bi-plus-lg');
       const decrementbtn = parent.querySelector('.bi-dash-lg');


        if (updateCartValues.item === 10) {
            if (incrementbtn) {
                incrementbtn.disabled = true;
            }
        } else {
            if (incrementbtn) {
                incrementbtn.disabled = false;
            }
        }


         if (updateCartValues.item  <= 0) {
            if (decrementbtn) {
                decrementbtn.disabled = true;
            }
        } else {
            if (incrementbtn) {
                decrementbtn.disabled = false;
            }
        }
    }
};