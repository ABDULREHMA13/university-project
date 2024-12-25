   alert("connected")
   function calculatetotal(){
    let total=0;
    const rows =document.querySelectorAll("table body tr");
    rows.forEach((row,index) => {
       if (index === rows.lenght -1) return;
       const checkbox = row.querySelectorAll('input[type="checkbox"]');
       const radio  = row.querySelectorAll('input[type="radio"]');
       const  dropdown = row.querySelectorAll('select');
       const costInput = row.querySelectorAll( 'input[type="text"]')

       if( checkbox.checked){
         let selectedPrice = 0;
         radios.forEach((radio) => {
            if (radio.checked){
                
                selectedPrice = parseFloat(radio.value);
            }
        });
         const units=parseInt(dropdown.value,10) || 0;
         const cost =units* selectedPrice ;
         costInput.value = cost.tofixed(2);
         total +=cost;
            }
        
        else{
        costInput.value='';
       }
     });
     if( total<200){
        total+=total*0.15;
     }else{

        total-=total*0.15;
     }
    document.getElementById("totalcost").value= total.tofixed(2);
    const accept=confirm(`the total cost is $${total.toFixed(2)}.Do you accept this cost?`);
    if (accept){
        alert("Thankyou for your acceptance!");
    }else{
        alert("Application withdrawn.");
    }
}