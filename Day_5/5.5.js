function displaychat() {
    let inref = document.querySelector(".ip");
    let opref = document.querySelector("#op");

    opref.innerHTML=inref.value;
    inref.value='';
}