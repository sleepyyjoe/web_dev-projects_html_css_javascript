let curr_display = '';
document.querySelector('.show').value= curr_display;
function X1(){
    curr_display +='1';
    document.querySelector('.show').value= curr_display;
}
function X2(){
    curr_display +='2';
    document.querySelector('.show').value= curr_display;
}
function X3(){
    curr_display +='3';
    document.querySelector('.show').value= curr_display;
}
function X4(){
    curr_display +='4';
    document.querySelector('.show').value= curr_display;
}
function X5(){
    curr_display +='5';
    document.querySelector('.show').value= curr_display;
}
function X6(){
    curr_display +='6';
    document.querySelector('.show').value= curr_display;
}
function X7(){
    curr_display +='7';
    document.querySelector('.show').value= curr_display;
}
function X8(){
    curr_display +='8';
    document.querySelector('.show').value= curr_display;
}
function X9(){
    curr_display +='9';
    document.querySelector('.show').value= curr_display;
}
function X0(){
    curr_display +='0';
    document.querySelector('.show').value= curr_display;
}
function Xclr(){
    curr_display ='';
    document.querySelector('.show').value= curr_display;
}
function Xplus(){
    curr_display +='+';
    document.querySelector('.show').value= curr_display;
}
function Xminus(){
    curr_display +='-';
    document.querySelector('.show').value= curr_display;
}
function Xdiv(){
    curr_display +='/';
    document.querySelector('.show').value= curr_display;
}
function Xmul(){
    curr_display +='*';
    document.querySelector('.show').value= curr_display;
}
function Xequ(){
    curr_display =eval(curr_display);
    document.querySelector('.show').value= curr_display;
}