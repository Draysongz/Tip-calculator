 var buttons = document.querySelectorAll('.btn');
 var bill = document.querySelector('#bill')
 var persons = document.querySelector('#bills')
 var amount_display = document.querySelector('#amount')
 var totalAmountDisplay = document.querySelector('#total-amount')
 var reset = document.querySelector('#reset')

 amount_display.value = "$0.00";
 totalAmountDisplay.value = "$0.00";


 //  if (persons.value == 0) {
 //      var warnDisplay = document.querySelector('.warn')
 //      warnDisplay.value = `can't be zero `;
 //  } else {
 //      warnDisplay.classList.add('disabled')
 //      console.log(warnDisplay)
 //  }
 buttons.forEach((e) => {
     e.addEventListener('click', () => {
         e.classList.toggle('clicked')
         persons.addEventListener('input', () => {

             let billValue = bill.value
             console.log(billValue)
             var eValue = e.value
             console.log(eValue)
             let multipliedAnswer = ((billValue * eValue / 100));
             let personsValue = persons.value
             let amount = (multipliedAnswer / personsValue);
             let amountDisplay = amount_display;
             amountDisplay.value = `$${amount}`
             let tipTotal = totalAmountDisplay
             tipTotal.value = `$${multipliedAnswer}`
         })
     })



 })
 reset.addEventListener('click', () => {
     bill.value = "";
     persons.value = "";
     amount_display.value = "$0.00";
     totalAmountDisplay.value = "$0.00";
 })