function displayChatHistory() {
    let inref= document.querySelector("#ip");
    let outref = document.querySelector("#op");

    let oldvalue= outref.innerHTML;
    let newvalue="<h3>"+inref.value+"</h3>"
    outref.innerHTML= oldvalue+newvalue;
     // clear the box
    inref.value='';
}