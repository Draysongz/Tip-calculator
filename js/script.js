var buttons = document.querySelectorAll('.btn');
var bill = document.querySelector('#bill')
var persons = document.querySelector('#bills')
var amount_display = document.querySelector('#amount')
var totalAmountDisplay = document.querySelector('#total-amount')
var reset = document.querySelector('#reset')

amount_display.value = "$0.00";
totalAmountDisplay.value = "$0.00";

var personInput= persons.value
           

buttons.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('clicked')
        persons.addEventListener('input', () => {
             if (personInput==0){
                document.querySelector('.warn').value=`can't be zero `;
            }
            
        })
        persons.addEventListener('input', () => {
            
            var billValue = bill.value
            console.log(billValue)
            var eValue = e.value
            var multipliedAnswer = ((billValue * eValue / 100));
            var personsValue = persons.value
            if(personsValue== 0){
                amountDisplay.value = "$0.00";
                tipTotal.value = "$0.00";
            }
            var amount = (multipliedAnswer / personsValue);
            var amountDisplay = amount_display;
            amountDisplay.value = `$${amount}`
            var tipTotal = totalAmountDisplay
            tipTotal.value = `$${multipliedAnswer}`
           
           
    
            var filled= persons.value
            document.querySelector('.warn').classList.add("disabled")
            reset.addEventListener('click', () => {
               bill.value = "";
               persons.value = "";
               amount_display.value = "$0.00";
               totalAmountDisplay.value = "$0.00";
               e.classList.remove("clicked")
               reset.disabled=true
               if (personInput=0){
                document.querySelector('.warn').value=`can't be zero `;
               }


               
           })
           if (filled==""){
               reset.disabled=true
           }else if(filled <=0){
            reset.disabled=true
           }
            else{
               reset.disabled=false
            }

            
        })
    })



})
