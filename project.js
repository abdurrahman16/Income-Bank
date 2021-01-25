//login button event handler

const loginButton= document.getElementById('login');
loginButton.addEventListener("click", function(){
   const loginArea = document.getElementById('login-area');
   loginArea.style.display='none';

   const transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display='block';

});

//deposit handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function (){
            const depositAmount = document.getElementById("depositAmount").value;
            const depositNumber = parseFloat(depositAmount);
            // console.log(depositNumber);
            const currentAmount = document.getElementById("currentDeposit").innerText;
            const currentNumber = parseFloat(currentAmount);
            const totalDeposit = depositNumber + currentNumber;
            document.getElementById("currentDeposit").innerText = totalDeposit;
            
            // current Balance
            const currentSavings = document.getElementById("currentBalance").innerText;
            const depositNumbers = parseFloat(currentSavings);
            const totalBalance = depositNumber + depositNumbers;
            document.getElementById("currentBalance").innerText = totalBalance;

            document.getElementById("depositAmount").value ='';

            

});


const withdrawBtn= document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function(){

//withdraw balance

const withdrawAmount = document.getElementById("withdrawAmount").value;
const withdrawNumber = parseFloat(withdrawAmount);
const lastWithdraws = document.getElementById("lastWithdraw").innerText;
const currentWithdraws = parseFloat(lastWithdraws);
const totalWithdraws = withdrawNumber + currentWithdraws;
document.getElementById("lastWithdraw").innerText = totalWithdraws;

const currentSavings = document.getElementById("currentBalance").innerText;
            const depositNumbers = parseFloat(currentSavings);
            document.getElementById("currentBalance").innerText = depositNumbers - withdrawNumber;


document.getElementById("withdrawAmount").value ='';


});