function validation(){
    let inref = document.querySelector("#ip");
    let outref = document.querySelector(".text");
    let oldvalue = outref.innerHTML;
    let newvalue = "<p>"+inref.value+"</p>"
    outref.innerHTML=newvalue+oldvalue;

     // Empty validation
    if(inref.value == ''){
        inref.style.borderColor="red";
        return;
    }else{
        inref.style.borderColor="inherit";
    }

     // length validation :: Min Validation
     if(inref.value.length <=3){
        alert("charector must be minmum 3");
        return;
     }

    // clear the box
    inref.value='';
}