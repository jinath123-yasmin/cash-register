var inputText1=document.querySelector('#input-text1');
var inputText=document.querySelector('#input-text2');
var btnTranslate= document.querySelector('#btn-output');
var outputDiv = document.querySelector('#output')

function onClickOutput(){
    var rs=inputText1.value;
   var a=0,b=0,c=0,d=0,e=0,f=0,result=0,result1=0,result2=0,result3=0,result4=0,result5=0,result6=0;
   while(rs>=2000){
    f=parseInt(rs/2000);
    rs=parseInt(rs%2000);
    console.log("the no of 2000 rupees:" + f);
    // outputDiv.innerText= ("the no of 2000 rupees:" + f);
    var result= f;
    break;
}
   while(rs>=500){
       a=parseInt(rs/500);
       rs=parseInt(rs%500);
       console.log("the no of 500 rupees:" + a);
    //    outputDiv.innerText= ("the no of 500 rupees:" + a);
    var result1= a;
       break;
   }
   while(rs>=100){
    b=parseInt(rs/100);
    rs=parseInt(rs%100);
    console.log("the no of 100 rupees:" + b);
    // outputDiv.innerText= ("the no of 100 rupees:" + b);
    var result2= b;
    break;
}
while(rs>=20){
    c=parseInt(rs/20);
    rs=parseInt(rs%20);
    console.log("the no of 20 rupees:" + c);
    // outputDiv.innerText= ("the no of 20 rupees:" + c);
    var result3= c;
    break;
}
while(rs>=10){
    d=parseInt(rs/10);
    rs=parseInt(rs%10);
    console.log("the no of 10 rupees:" + d);
    // outputDiv.innerText= ("the no of 10 rupees:" + d);

    var result4 =  d;
    break;
}
while(rs>=5){
    e=parseInt(rs/5);
    rs=parseInt(rs%5);
    console.log("the no of 5 rupees:" + e);
    // outputDiv.innerText= "the no of 5 rupees:" + e;

    var result5 = e;
    break;
}
while(rs>=1){
    var g=parseInt(rs/1);
    rs=parseInt(rs%1);
    console.log("the no of 1 rupees:" + g);
    // outputDiv.innerText= "the no of 1 rupees:" + e;
    var result6 =g;
    break;
}
outputDiv.innerText= "the no. of 2000 notes: " + result +"\n" + "the no. of 500 notes:  " + result1+"\n" + "the no. of 100 notes:  " + result2+"\n" + "the no. of 20 notes:  "+
 result3 +"\n"+ "the no. of 10 notes:  " +  result4+"\n" + "the no. of 5 notes:  "+ result5 +"\n"+ "the no. of 1 notes:  " + result6;
}

btnTranslate.addEventListener("click",onClickOutput);
