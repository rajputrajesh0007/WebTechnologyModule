function displaychat(){
    let inputref = document.querySelector("input");
    let outputref= document.querySelector("#op");

    outputref.innerHTML=inputref.value;
     // clear the box
    inputref.value="";

}