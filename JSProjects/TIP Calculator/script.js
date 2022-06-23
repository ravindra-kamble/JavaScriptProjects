console.log("TIP Calculator");

let calcTip = (bill)=>{
  
    if(bill<50 || bill>300)
    {
        let tip = (bill/100)*20;
        return tip;
       
    }
    else{
        let tip = (bill/100)*15;
        return tip;
    
    }
}

const bills = [125, 555, 44, 1000, 100];
let tips =[];
let total=0;
let totalBill= [];
for(let i=0; i<bills.length;i++)
{
    tips.push(calcTip(bills[i]));
    total  = bills[i] + (calcTip(bills[i]));
    totalBill.push(total);
}
console.log("Array of Bill Amount as below:");
console.log(bills);
console.log("Array of all Tips as below:");
console.log(tips);

// calculate Total Bill

console.log("Array of Total bill as below including TIP");
console.log(totalBill);


