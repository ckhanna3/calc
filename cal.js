
var exp ='', number, decimal, equal,operator,allowSR=true;
var textview= document.getElementById('input');

function insertNum(num)
{
if(equal){
    exp=num;
    textview.value=exp;
    number=true;
    equal=false;
}
else{
    exp=textview.value +num;
    textview.value=exp;
    number=true;
}
if (operator) decimal=false;



}
function insertOp(Op)
{
    
    textview.value= exp+Op;
    operator=true;
    equal=false;
    allowSR=false;
}
function insertDec(Op)
{
    if(number && !decimal){
        textview.value=exp+'.';
        decimal=true;
        operator=false;
    }
}

function equalTo()

{
    
    if(exp)
    {
        
        exp=eval(exp);
        textview.value=exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
        console.log(exp)
    }
}

function clean()
{
    exp='';
    textview.value=exp;
    decimal=false;
}

function back()
{
    exp=textview.value;
    exp=exp.substring(0,exp.length-1);
    textview.value=exp;
}