console.log("DikzNakano Loaded");

document.querySelectorAll("a").forEach(btn => {
  btn.addEventListener("click", e => {
    if(btn.getAttribute("href") === "#"){
      e.preventDefault();
    }
  });
});