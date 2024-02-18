 const seats=document.getElementsByClassName("seat");
 let count=1;
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
        
        // total display
        


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