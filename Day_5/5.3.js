function counter(){
    let ref = document.querySelector("h1");
    let strvalue =ref.innerHTML;
    let intvalue=parseInt(strvalue);
    intvalue++;
    ref.innerHTML= intvalue;

 }