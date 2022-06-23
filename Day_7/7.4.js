function likepost(rf){
    let current = rf.nextElementSibling;
    let str=current.innerHTML;
    let inti=parseInt(str);
    inti++;
    current.innerHTML=inti;
}
function likepostheart(rf2){
    let current2 = rf2.nextElementSibling;
    let str=current2.innerHTML;
    let inti=parseInt(str);
    inti++;
    current2.innerHTML=inti;
}
function addMore() {
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