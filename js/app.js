import { products } from "./model.js";

/**************Start variables****************** */
const Items = products;
let resultsNumber = "";
let searchInput = document.querySelector("input.search-input");
const resultsSpan = document.querySelector(".results");
const foundedItemElement = document.getElementById("foundedItem"); 
const rate1 = ` <div class="d-flex justify-content-between align-items-center">

<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

</div>`
const rate2 = ` <div class="d-flex justify-content-between align-items-center">

<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

</div>`
const rate3 = ` <div class="d-flex justify-content-between align-items-center">

<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

</div>`
const rate4 = ` <div class="d-flex justify-content-between align-items-center">

<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="#E5E5E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star text-muted"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

</div>`
/**************End Variables****************** */
/**************Start Events****************** */

searchInput.addEventListener("keyup",search);

/**************End Events****************** */
/**************Start Functions****************** */

export function display() {
    let figures = "";
    let ratingString = "";
    let dotsOrNot = ""
    
    for (var i = 0; i < Items.length; i++) {
                
        if(Items[i].rating == 4){
            ratingString = rate4
        }else if(Items[i].rating == 3){
            ratingString = rate3
        }else if (Items[i].rating==2){
            ratingString = rate2
        }else{
            ratingString = rate1
        }

        // Checking if tha Name > 20
        if(Items[i].name.length > 20){
            dotsOrNot="..."
        }else{
            dotsOrNot = ""
        }


      resultsNumber=`${i+1} results found`
      figures += `<figure>
      <img src="${Items[i].img}" alt="watch">
      <figcaption class="pt-2">
          <div class="caption-text">

              <div class=" pb-1 d-flex justify-content-between align-items-center">
                  
              ${ratingString}
                         
                          <div>
                              <span class="caption-price">$${Items[i].price}</span>
                          </div>
                      
                  
              </div>
              
              <a class="caption-title"> ${Items[i].name.substring(0,20)}${dotsOrNot}</a>

              <p class="pt-1">${Items[i].discription.substring(0,30)}...</p><br>
          </div>
          <div class="figure-btns">

              <a class="wishlist-btn ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
              Wishlist
              </a>
          
          

              <a class="view-in-card-btn ">
                  <i class="fa-solid fa-cart-shopping"></i>                                           
                   View In Card
              </a>
          </div>
      </figcaption>
      </figure>`;
    }
    foundedItemElement.innerHTML = figures;
    resultsSpan.innerHTML = resultsNumber;
  }

  function search() {
    
    let figures = "";
    let ratingString = "";
    let dotsOrNot = ""
    for (let i = 0; i < Items.length; i++) {


        if(Items[i].rating == 4){
            ratingString = rate4
        }else if(Items[i].rating == 3){
            ratingString = rate3
        }else if (Items[i].rating==2){
            ratingString = rate2
        }else{
            ratingString = rate1
        }

        // Checking if tha Name > 20
        if(Items[i].name.length > 20){
            dotsOrNot="..."
        }else{
            dotsOrNot = ""
        }


      if (
        Items[i].name.toLowerCase().includes(searchInput.value.toLowerCase())
      ) {


        resultsNumber=`${i+1} results found`
        figures += `<figure>
      <img src="${Items[i].img}" alt="watch">
      <figcaption class="pt-2">
          <div class="caption-text">

              <div class=" pb-1 d-flex justify-content-between align-Items-center">
                  
              ${ratingString}
                         
                          <div>
                              <span class="caption-price">$${Items[i].price}</span>
                          </div>
                      
                  
              </div>
              
              <a class="caption-title"> ${Items[i].name.substring(0,20)}${dotsOrNot}</a>

              <p class="pt-1">${Items[i].discription.substring(0,30)}...</p><br>
          </div>
          <div class="figure-btns">

              <a class="wishlist-btn ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
              Wishlist
              </a>
          
          

              <a class="view-in-card-btn ">
                  <i class="fa-solid fa-cart-shopping"></i>                                           
                   View In Card
              </a>
          </div>
      </figcaption>
    </figure>`;
      }
    }
    foundedItemElement.innerHTML = figures;
    resultsSpan.innerHTML = resultsNumber;

  }

  /**************End Functions****************** */


  display()