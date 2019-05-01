let navCats = document.querySelectorAll(".nav-cat");

function transformHam(x) {
    x.classList.toggle("change");
    for (let i of navCats) {
        i.classList.toggle("nav-cat-col");
    } 
    let navCatCols = document.querySelectorAll(".nav-cat-col");
    for (let n of navCatCols) {
        n.addEventListener("click", function(c) {
            x.classList.remove("change");
            for (let items of navCatCols) {
                items.classList.remove("nav-cat-col");
            }
        });
    }
  }


