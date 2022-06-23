function likepost(){
    let output = document.querySelector('.count');
    let str=output.innerHTML;
    let inti=parseInt(str);
    inti++;
    output.innerHTML=inti;
}
