// ============================
// FILTER BUTTONS
// ============================

const filterButtons = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".food-category");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // ADD ACTIVE CLASS
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    categories.forEach(card => {

      if(category === "all"){
        card.style.display = "block";
      }
      else{

        if(card.getAttribute("data-category") === category){
          card.style.display = "block";
        }
        else{
          card.style.display = "none";
        }

      }

    });

  });

});


// ============================
// SEARCH + JUMP FUNCTION
// ============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const foodCards = document.querySelectorAll(".food-card");

function searchFood(){

  const searchValue =
    searchInput.value.toLowerCase().trim();

  let found = false;

  foodCards.forEach(card => {

    const foodName =
      card.getAttribute("data-name").toLowerCase();

    if(foodName.includes(searchValue)){

      // SHOW CARD
      card.style.display = "block";

      // SHOW CATEGORY
      const category =
        card.closest(".food-category");

      category.style.display = "block";

      // SCROLL TO FOOD
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      // HIGHLIGHT EFFECT
      card.classList.add("highlight");

      setTimeout(() => {
        card.classList.remove("highlight");
      }, 2000);

      found = true;

    }
    else{
      card.style.display = "none";
    }

  });

  // IF NOTHING FOUND
  if(!found){

    foodCards.forEach(card => {
      card.style.display = "block";
    });

    categories.forEach(category => {
      category.style.display = "block";
    });

    alert("Food not found!");
  }

}


// SEARCH BUTTON CLICK
searchBtn.addEventListener("click", searchFood);


// PRESS ENTER TO SEARCH
searchInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    searchFood();
  }

});