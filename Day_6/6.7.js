function color(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let ref = $("h1");
    
    ref.css("color",`rgb(${red}, ${green}, ${blue})`) ;
    

}   

function backgrondcolor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let ref2 = $("body");
    ref2.css("backgroundColor",`rgb(${red}, ${green}, ${blue})`);
}