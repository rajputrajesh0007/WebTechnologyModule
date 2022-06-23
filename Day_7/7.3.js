function likepost(ref1){
    //let output = document.querySelector('.count');  //this won't be work for multiple blocks i.e for dyanamic it wont work bcoz id and class is use we have to do it by passing reference as below;
    let current = ref1.nextElementSibling;
    let str=current.innerHTML;
    let inti=parseInt(str);
    inti++;
    current.innerHTML=inti;
}
function likepostheart(ref2){
    //let output = document.querySelector('.count1');  //this won't be work for multiple blocks i.e for dyanamic it wont work bcoz id and class is use we have to do it by passing reference as below; 
    let current2 = ref2.nextElementSibling;
    let str=current2.innerHTML;
    let inti=parseInt(str);
    inti++;
    current2.innerHTML=inti;
}
function addMore(ref3) {
    //let inref= document.querySelector('.mypost');
    let out = document.querySelector('#moreBlock');
    let oldval = out.innerHTML;
    let newval = `  <div class="mypost">
                        <h1>Hello World.Learning web Application</h1>
                        <span class="like" type="button" onclick="likepost(this)">&#128077;</span>
                        <span >0</span>
                        <span class="heart" type="button" onclick="likepostheart(this)">&#10084;</span>
                        <span >0</span>
                     </div>`;
    out.innerHTML=oldval + newval;
}