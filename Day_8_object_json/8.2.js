const id = '5';

if(id ){
    console.log(" Always Executed");
}
// WITH DOUBLE EQUALS
if(id == '5'){
    console.log(" I m also true!");
}
// (==) THIS IGNORES THE DATA TYPE
// this is magic :: ONLY CHECK CONTENTS ARE SAME
if(id == 5){
    console.log(" I m also true!");
}

// === MEANS STRICT DATA TYPE CHECK
// WITH TRIPLE EUQLS(===)
if(id === '5'){
    console.log('works');
}
if(id === 5){
    console.log('works OR not ?');
}
