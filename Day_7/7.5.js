function likepost(rf){
    let current = rf.nextElementSibling;      //<span>0</span>
    let str=current.innerHTML;
    let inti=parseInt(str);
    //inti++;
    current.innerHTML=inti+1;
}
function likepostheart(rf2){
    let current2 = rf2.nextElementSibling;
    let str=current2.innerText;
    let inti=parseInt(str);
    inti++;
    current2.innerHTML=inti;
}
function addMore(refBtn) {
    let currentval=refBtn.previousElementSibling;
    let old = currentval.value;
    let out = document.querySelector('#moreBlock');
    let oldval = out.innerHTML;
    let newval = `  <div class="mypost">
                        <h1>${old}</h1>
                        <span class="like" type="button" onclick="likepost(this)">&#128077;</span>
                        <span >0</span>
                        <span class="heart" type="button" onclick="likepostheart(this)">&#10084;</span>
                        <span >0</span>
                     </div>`;
    out.innerHTML=`${oldval} ${newval}`;
    currentval.value=''
}
function keyboardevent(e,ref){
    if(e.keyCode == 13){
        addMore(ref.nextElementSibling);
    }
}