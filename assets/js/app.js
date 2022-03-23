// get UI elements
const UIdisplay = document.querySelector('.display'),
    UInumbers   = document.querySelectorAll('.number'),
    UIoperators   = document.querySelectorAll('.operator'),
    UIclear   = document.querySelector('.clear-all'),
    UIclearLast   = document.querySelector('.clear-one'),
    UIequal   = document.querySelector('.equal');

// all vers
let hasDot = false,
    num1 = '';
    result = '';

// number validation;
UInumbers.forEach(number=>{
    number.addEventListener('click', (e)=>{
        if(e.target.innerText == '.' && !hasDot) hasDot = true;
        else if(e.target.innerText == '.' && hasDot) return;
        num1 += e.target.innerText;
        UIdisplay.innerText = num1;
    });
});

// operator validation;
UIoperators.forEach(operator=>{
    operator.addEventListener('click', (e)=>{
        if (result) {
            num1 = result;
            result = '';
        }
        if(!num1) return;
        if (e.target.innerText == 'X') {
            num1 += '*';
        } else {
            num1 += e.target.innerText;
        }
        hasDot = false;
        UIdisplay.innerText = num1;
    });
});

// calculation
UIequal.addEventListener('click', (e)=>{
    let x = num1;
    result = String(eval(x));
    if (result == undefined) {
        UIdisplay.innerText = 'Error';
    }
    UIdisplay.innerText = result;
});

// clear all
UIclear.addEventListener('click', (e)=>{
    UIdisplay.innerText = '0';
    num1 = '';
    result = '';
});

// clear last element
UIclearLast.addEventListener('click', (e)=>{
    if (result) {
        UIdisplay.innerText = '0';
        num1 = '';
        result = '';
    } else {
        num1 = num1.slice(0, -1);
        UIdisplay.innerText = num1;
    }  
});