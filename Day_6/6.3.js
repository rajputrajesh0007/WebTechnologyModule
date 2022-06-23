function validation(){
    let inref = document.querySelector("#ip");
    let outref = document.querySelector(".text");
    let oldvalue = outref.innerHTML;
    let er1 = document.querySelector(".error");
    let newvalue = "<p>"+inref.value+"</p>"
    outref.innerHTML=newvalue+oldvalue;
    
     // Empty validation
    if(inref.value == ''){
        inref.style.borderColor="red";
        let er='empty field not allot';
        er1.innerHTML=er;
        er1.style.color='red';
        return;
    }
    else{
        er1.innerHTML='';
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
function chekkeyboardevent(event){
    console.log(event);
    if(event.keyCode == 13){
        validation();
    }
   
}