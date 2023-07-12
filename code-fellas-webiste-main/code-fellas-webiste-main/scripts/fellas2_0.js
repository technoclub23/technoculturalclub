
document.addEventListener("DOMContentLoaded", function() {
    var materialCards = document.querySelectorAll(".material-card > .mc-btn-action");
    
    materialCards.forEach(function(card) {
      card.addEventListener("click", function() {
        var parentCard = this.parentElement;
        var icon = this.querySelector("i");
        icon.classList.add("fa-spin-fast");
  
        if (parentCard.classList.contains("mc-active")) {
          parentCard.classList.remove("mc-active");
  
          setTimeout(function() {
            icon.classList.remove("fa-arrow-left");
            icon.classList.remove("fa-spin-fast");
            icon.classList.add("fa-bars");
          }, 800);
        } else {
          parentCard.classList.add("mc-active");
  
          setTimeout(function() {
            icon.classList.remove("fa-bars");
            icon.classList.remove("fa-spin-fast");
            icon.classList.add("fa-arrow-left");
          }, 800);
        }
      });
    });
  });
  