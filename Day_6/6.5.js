function register(){
    //console.log("hi");
    //input read value
    let userref = document.querySelector(".userField");
    let pwdref = document.querySelector(".pwdField");
    let mailref = document.querySelector(".emailField");
    let phoneref = document.querySelector(".phoneField");
    // output value
    let userotp=document.querySelector(".data1");
    let pwdotp=document.querySelector(".data2");
    let mailotp=document.querySelector(".data3");
    let numotp=document.querySelector(".data4");
    // old value i.e null values
    let oldval1=userotp.innerHTML;
    let oldval2=pwdotp.innerHTML;
    let oldval3=mailotp.innerHTML;
    let oldval4=numotp.innerHTML;

    //new values 
    let newuser = "<span>" + userref.value +"</span>"; 
    let newpwd =" <span>" + pwdref.value +"</span>"; 
    let newmail = "<span>" + mailref.value +"</span>"; 
    let newnumber =" <span>" + phoneref.value +"</span>"; 

    // ====appending to table 
    userotp.innerHTML=newuser;
    pwdotp.innerHTML=newpwd;
    mailotp.innerHTML=newmail;
    numotp.innerHTML=newnumber;

    userref.value='';
    pwdref.value='';
    mailref.value='';
    phoneref.value='';

}