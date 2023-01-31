const numbers = document.getElementsByTagName('div');
console.log(numbers);

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", linkClick);
}

let num = true;

function linkClick(){
    if (num) {
        num = false;
        this.style.background = 'red'; 
    } else {
        num = true;
        this.style.background = 'green';
    }
    
        
    
    }