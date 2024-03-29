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
        event.target.disabled=true;
         
        // remaining seat
        const remainingSeatElement=document.getElementById("remaining-seat");
        const remainingSeat=parseInt(remainingSeatElement.innerText)-1;
        remainingSeatElement.innerText=remainingSeat;

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
  const couponDisplay=document.getElementById("after-coupon-display");
  // console.log(couponValue);
  if(count===5){
    // if(couponValue!=="NEW15" || couponValue!=="Couple 20"){
    //   alert("wrong coupon");
    // }
    if(couponValue==="NEW15" ){
      const discount=parseFloat(convertGrandTotal*(85/100));
      const discountPrice=parseFloat(convertGrandTotal*(15/100));
      grandTotal.innerText=discount; 
      coupon.setAttribute('disabled','disabled') ;
      coupon.setAttribute('style','display:none') ;
      const afterCouponDisplay=document.createElement("p");
      afterCouponDisplay.innerText="Congratulations you unlocked coupon discount!";
      couponDisplay.appendChild(afterCouponDisplay);
      event.currentTarget.disabled=true;
      event.currentTarget.setAttribute('style','display:none');
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
      const couplePrice=parseFloat(convertGrandTotal*(20/100));

      grandTotal.innerText=couple; 
      coupon.setAttribute('disabled','disabled') ;
      coupon.setAttribute('style','display:none') ;
      const afterCouponDisplay2=document.createElement("p");
      afterCouponDisplay2.innerText="Congratulations you unlocked coupon discount!";
      couponDisplay.appendChild(afterCouponDisplay2);
      event.currentTarget.disabled=true;
      const discountID=document.getElementById("discount");
      event.currentTarget.setAttribute('style','display:none');
      const p=document.createElement("p");
      const p1=document.createElement("p1");
      p.innerText='Discount';
      p1.innerText='BDT'+" "+couplePrice;
      discountID.appendChild(p);
      discountID.appendChild(p1);

    }
    else
    {
      alert("wrong coupon");

    }
  }
  else{
    alert("you have to buy 4 tickets to get the offer of coupon sir")
  }
  coupon.value='';
});

// form next button
const nextButton=document.getElementById("next-button");
// nextButton.disabled=false;
const phone=document.getElementById("phone");


// console.log(phone.value);
phone.addEventListener("keyup",function(){
  if(count>1 && phone.value.length>0){
    nextButton.disabled=false;
  }
});

// phone.addEventListener("keypress",function(){
  // if(count>2 && phone.value.length>0){
  //   nextButton.disabled=false;
  // }
//    console.log(phone.value);
// })

for(const seat of seats){
  seat.addEventListener("click",function(){
    if(count>1 && phone.value.length>0){
      nextButton.disabled=false;
    }
  })
}







// scroll to seat section
// const goToSeatSectionButton=document.getElementById("go-to-seat-section-button");
// const seatSection=document.getElementById("seat-section");
// goToSeatSectionButton.addEventListener("click",function(){
//  seatSection.scrollIntoView({behavior:"smooth"});
// });