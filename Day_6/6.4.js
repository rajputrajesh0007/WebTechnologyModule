function sendMessage(){
    $('#output').html($('#id1').val());
    $('#id1').val('');
}
function keyboardevent(e){
    if(e.keyCode == 13 ){
        sendMessage();

    }
}