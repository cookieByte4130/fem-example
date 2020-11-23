document.addEventListener('DOMContentLoaded',function(){
    //set up variables
    let display, calcBtns, total, action;
    display = document.querySelector('.display');
    calcBtns = document.querySelector('.calcBtns');
    let calculator = {
        state: 'start',
        total: 0,
        plus: function(num1,num2){
            return num1 + num2;
        },
        subtract: function(num1,num2){
            return num1 - num2;
        },
        multiply: function(num1,num2){
            return num1 * num2;
        },
        divide: function(num1,num2){
            return num1 / num2;
        }
    }

    calcBtns.addEventListener('click',function(e){
        let selection;
        selection = e.target;
        if(selection.classList.contains('num')){
            if(display.textContent === '0'){
                display.textContent = selection.textContent;
            }else{
                display.textContent = display.textContent+selection.textContent;
            }
        }else if(e.target.textContent === "C"){
            resetDisplay();
            calculator.total = 0;
        }else if(e.target.classList.contains('backspace')){
            if(display.textContent.length === 1){
                resetDisplay();
            }else{
                display.textContent = display.textContent.slice(0,-1);
            }
        }else{
            let num = parseInt(display.textContent);
            if(calculator.state === 'start'){
                calculator.total = num;
                calculator.state = e.target.classList[1];
                resetDisplay();
            }else{
                calculator.total = calculator[calculator.state](calculator.total,num);
                display.textContent = calculator.total;
                if(e.target.classList.contains('equal')){
                    calculator.state = 'start';
                }
            }
        }
    },true);
    
    let resetDisplay = function(){
        display.textContent = 0;
    }

    let clrDisplay = function(){
        let num = display.textContent;
        console.log(num,total);
        resetDisplay();
        calculator.state = 'start';
    }
});