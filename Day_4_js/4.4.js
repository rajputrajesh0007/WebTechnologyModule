function changeColor() {
    let ref = document.querySelector(".class1");
  
    ref.style.color = "blue";
  }
  
  function changeColorOld() {
    let ref = document.getElementsByClassName("class1");
  
    ref[0].style.color = "tomato";
  }
  
  function randomeColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
  
    let ref = document.querySelector("h1");
    ref.style.color = `rgb(${red}, ${green}, ${blue})`;
  }
  
  function randomeBackground() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
  
    let ref = document.querySelector("body");
    ref.style.background = `rgb(${red}, ${green}, ${blue})`;
  }