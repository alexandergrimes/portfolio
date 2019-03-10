function transformHam(x) {
    x.classList.toggle("change");
    let navCats = document.querySelectorAll(".nav-cat");
    for (let i of navCats) {
        i.classList.toggle("nav-cat-col");
    } 
  }