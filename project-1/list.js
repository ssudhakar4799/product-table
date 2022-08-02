let amount = document.getElementById('Unitprice');
console.log(amount);
let qty = document.getElementById('Qty');
console.log(qty);
let price = document.getElementById('Price');
console.log(price);

let buttton=document.getElementById('prices0');


buttton.addEventListener('click',clear);

function clear() {
  
    
    
}

//2nd
let amount1 = document.getElementById('Unitprice1');
console.log(amount1);
let qty1 = document.getElementById('Qty1');
console.log(qty1);
let price1 = document.getElementById('Price1');
console.log(price1);

//3rd
let amount2 = document.getElementById('Unitprice2');
console.log(amount1);
let qty2 = document.getElementById('Qty2');
console.log(qty1);
let price2 = document.getElementById('Price2');
console.log(price1);

//4th
let amount3 = document.getElementById('Unitprice3');
console.log(amount3);
let qty3 = document.getElementById('Qty3');
console.log(qty1);
let price3 = document.getElementById('Price3');
console.log(price3);

//5th
let all=document.getElementById('totalall');

let allclear=document.getElementById('prices0');
console.log(allclear);





//btn
amount.addEventListener('click', add);
qty.addEventListener('click',add1)
price.addEventListener('click', add3);

//btn1
amount1.addEventListener('click', add4);
qty1.addEventListener('click',add5)
price1.addEventListener('click', add6);

//btn3d
//btn1
amount2.addEventListener('click', add7);
qty2.addEventListener('click',add8)
price2.addEventListener('click', add9);

//btn4th
amount3.addEventListener('click', add10);
qty3.addEventListener('click',add11)
price3.addEventListener('click', add12);

//btn 5th
all.addEventListener('click',add13);

// //btn6th
// btn.addEventListener('click',zero)
// console.log(btn);


function add() {
    amount = prompt();    
    console.log(amount);
    var uprice=`${amount}`
    document.getElementById("upice").innerHTML=uprice
}

function add1() {   
    qty = prompt();
    console.log(qty);
    var amounts=`${qty}`
    document.getElementById("qtys").innerHTML=amounts 
}


function add3() {
    total = amount * qty;
    console.log(total);
    var amounts=`${total}`
    document.getElementById("prices").innerHTML=amounts 
}

function add4() {
    amount1 = prompt();    
    console.log(amount1);
    var uprice1=`${amount1}`
    document.getElementById("upice1").innerHTML=uprice1
}

function add5() {   
    qty1 = prompt();
    console.log(qty1);
    var amounts1=`${qty1}`
    document.getElementById("qtys1").innerHTML=amounts1 
}

function add6() {
    total1 = amount1 * qty1;
    console.log(total1);
    var amounts1=`${total1}`
    document.getElementById("prices1").innerHTML=amounts1 
}






function add7() {
    amount2 = prompt();    
    console.log(amount2);
    var uprice2=`${amount2}`
    document.getElementById("upice2").innerHTML=uprice2
}

function add8() {   
    qty2 = prompt();
    console.log(qty2);
    var amounts2=`${qty2}`
    document.getElementById("qtys2").innerHTML=amounts2 
}

function add9() {
    total2 = amount2 * qty2;
    console.log(total2);
    var amounts2=`${total2}`
    document.getElementById("prices2").innerHTML=amounts2 
}

function add10() {
    amount3 = prompt();    
    console.log(amount3);
    var uprice3=`${amount3}`
    document.getElementById("upice3").innerHTML=uprice3
}

function add11() {   
    qty3 = prompt();
    console.log(qty3);
    var amounts3=`${qty3}`
    document.getElementById("qtys3").innerHTML=amounts3 
}

function add12() {
    total3 = amount3 * qty3;
    console.log(total3);
    var amounts3=`${total3}`
    document.getElementById("prices3").innerHTML=amounts3
}

function add13(){
    alltotal=total+total1+total2+total3;
    console.log(alltotal);
    var amounts4=`${alltotal}`
    document.getElementById("prices4").innerHTML=amounts4
    

}





