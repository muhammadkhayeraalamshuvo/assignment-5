 const seats=document.getElementsByClassName("seat");
 let count=1;
 let ticketPrice=550;
 for(const seat of seats){
    seat.addEventListener("click",function(event){
      if(count<5){
        const seatDisplay=document.getElementById("seat-display");
        const span=document.createElement("span");
        const span2=document.createElement("span");
        const span3=document.createElement("span");
        span.innerText=event.currentTarget.innerText;
        span2.innerText="Economy";
        span3.innerText=parseInt(550);
        seatDisplay.appendChild(span);
        seatDisplay.appendChild(span2);
        seatDisplay.appendChild(span3);
        
        // total price display
        const totalPrice=document.getElementById("total-price");
        const price=totalPrice.innerText;
        const money=parseInt(price)+ticketPrice;
        totalPrice.innerText=money;

        // grand total display
        const grandTotal=document.getElementById("grand-total");
        grandTotal.innerText=money;
      
        // those which selected add background color
        event.currentTarget.classList.add("button-white");
        
       
        

      }
      else{
        alert("You cant choose more than 4 seats at a time sir")
        return;
      }

        // seat count
        const seatCount=document.getElementById("seat-count");
        seatCount.innerText=count;
        count++;
        
    });
 }
// grand total with coupon
 
 const applyButton=document.getElementById("apply-button");

 applyButton.addEventListener("click",function(event){
  const grandTotal=document.getElementById("grand-total");
  const convertGrandTotal=parseInt(grandTotal.innerText);

  const coupon=document.getElementById("coupon");
  const couponValue=coupon.value;
  if(count===5){
    if(couponValue==="NEW15" ){
      const discount=parseFloat(convertGrandTotal*(85/100));
      const discountPrice=parseFloat(convertGrandTotal*(15/100));
      grandTotal.innerText=discount; 
      coupon.setAttribute('disabled','disabled') ;
      event.currentTarget.disabled=true;
      const discountID=document.getElementById("discount");
      const p=document.createElement("p");
      const p1=document.createElement("p1");
      p.innerText='Discount';
      p1.innerText='BDT'+" "+discountPrice;
      discountID.appendChild(p);
      discountID.appendChild(p1);

    }
    else if(couponValue==="Couple 20"){
      const couple=parseFloat(convertGrandTotal*(80/100));
      grandTotal.innerText=couple; 
      coupon.setAttribute('disabled','disabled') ;
      event.currentTarget.disabled=true;
    }
  }
  else{
    alert("you have to buy 4 tickets to get the offer of coupon sir")
  }
  coupon.value=' ';
})