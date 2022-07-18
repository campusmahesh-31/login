const submit=document.querySelector("#sub");
const heading=document.getElementById("wait");
const dateSpan=document.getElementById("dates");
const genderSpan=document.getElementById("genders");

const func=()=>{
    const pass=document.querySelector("#pass").value;
    const passc=document.querySelector("#passc").value;
    const date=document.querySelector("#date").value;
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
   if (name=="" || name==null) {
    document.getElementById("names").innerHTML="required***<br>";
    return false;
   }
   if(name.length<=2 || name.length>=21){
    document.getElementById("names").innerHTML=`${name} is not a name<br>`;
    return false;
   }
   if(!isNaN(name)){
    document.getElementById("names").innerHTML=`${name} is not a name<br>`;
    return false;
   }
   if(email=="" || email==null){
    document.getElementById("emails").innerHTML=`required***<br>`;
    return false;
   }
   if(email.indexOf("@")<=0){
    document.getElementById("emails").innerHTML=`wrong position of '@'<br>`;
    return false;
   }
   if((email.charAt(email.length-4)!=='.') && (email.charAt(email.length-3) !== '.')){
    document.getElementById("emails").innerHTML="invalid postion of '.'<br>";
    return false;
   }
   if(pass==""){
    document.getElementById("passs1").innerHTML=`required<br>`;
    return false;
   }
   if((pass.length<=7) || (pass.length>=20)){
    document.getElementById("passs1").innerHTML=`password should between 8-20 charecter<br>`;
    return false;
   }
   if(pass!==passc){
    document.getElementById("passs2").innerHTML=`password not matched<br>`;
    return false;
   }
    else {
    heading.innerHTML="We will be checking your details wait a second...";
    const users=document.getElementById("name").value;
    const emails=document.getElementById("email").value;
    setTimeout(()=>{
        heading.innerHTML=`Thank you Mr. ${users} for filling form,we will check it and send
         you verification detail on ${emails} soon.`;
    },1000);
    return false;
}

}
submit.addEventListener('click',func);

const navs=document.querySelector(".mobile");
const head=document.querySelector(".header");

const togs=()=>{
head.classList.toggle("acts");
}

navs.addEventListener('click',togs);





const back=()=>{
    window.history.back();
}










