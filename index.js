setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "PM";
    if ((hour<12) && (hour>6)){
        document.getElementById("a31").innerHTML = "GRAB SOME HEALTHY BREAKFAST";
        //if hours are less than 12 and greater than 6. the inner html will change and will give output as
        //grab some breakfast      
                
    }
    else if((hour<16)){
        document.getElementById("a31").innerHTML = "LET'S HAVE SOME LUNCH"; 
        //otherwise, if hours will be less than 16 i.e 4pm then inner html will will be updated and 
        //ouptut will be Have some lunch.

    }
    else if((hour<20)){
        document.getElementById("a31").innerHTML = "STOP YAWNING, GET SOME TEA... IT'S JSUT EVENING!";     
        //otherwise, if hours will be less than 20 i.e 8pm innerhtml will be stop yawing
    }
    else{
        document.getElementById("a31").innerHTML = "CLOSE TOUR EYES AND GO TO SLEEP";
        //if all above conditoins are false then the innerhtml will be go to sleep
    }
 
    //below is for 12 hour format.
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    //if hours is greater than 12 then hours will be minus 12
    //e.g: 24-12(12 hours) || 20-12(*hours)


    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }
    //if hours is 0; then it should be given as 12 AM.
   
 
    hour = hour < 10 ? "0" + hour : hour;
    // if hours is less than than then 0+hours(i.e if hour is 7 then it will be 07)
    //other wise hours i.e 10 or 12

    min = min < 10 ? "0" + min : min;
    //same as hour
    sec = sec < 10 ? "0" + sec : sec;
    //same as min and hour
 
    
    
    document.getElementById("sp1")
            .innerHTML = `${hour}` ;
            //to print the clock on screen in hour(inner html will add the value of hour in spaqn tag)
    document.getElementById("sp2")
            .innerHTML = `${min} `;
        //to print the clock on screen in min(inner html will add the value of min in spaqn tag)

    document.getElementById("sp3")
            .innerHTML = `${sec} `;
         //to print the clock on screen in sec(inner html will add the value of sec in span tag)

    document.getElementById("sp4")
            .innerHTML = am_pm;
            //it will give the value of am or pm.
    
}
 showTime();


   //selected index is a index of selected option in drop down.
   //textContent wii return or set the text content of its element.
function dataGet(){
    let option=document.getElementById("first")
    let oone=option.options[option.selectedIndex].text;
    document.getElementById("t1").textContent="Wake_up Time:" + oone  ;
    //option variable will be assign the first id, and oone variable is aasign with the value of option from selected dropdown.
    //an when the text content matches "wakeup time and id t1 it will update the wakeup time according to selected index."


    let option2=document.getElementById("second")
    let twoo=option2.options[option2.selectedIndex].text;
    document.getElementById("t2").textContent="Lunch Time:"+twoo;
    //option2 variable will be assign the second id, and twoo variable is aasign with the value of options from selected dropdown.
    //an when the text content matches "lunch time and id t2 it will update the luch time according to selected index."



    let option3=document.getElementById("third")
    let three=option3.options[option3.selectedIndex].text;
    document.getElementById("t3").textContent="Nap Time:"+ three;
    //option3 variable will be assign the first third, and three variable is aasign with the value of option from selected dropdown.
    //an when the text content matches "Naptime" and id t3 it will update the nap time according to selected index."

    
    let option4=document.getElementById("four")
    let four=option4.options[option4.selectedIndex].text;
    document.getElementById("t4").textContent="Night Time:"+four;
    //option4 variable will be assign the four id, and four variable is aasign with the value of option from selected dropdown.
    //an when the text content matches "Night time" and id t4 it will update the wakeup time according to selected index."

    //****## */
    

    let time = new Date();
    let hour = time.getHours();
    let bf=document.getElementById("first")
    let bf1=(bf[bf.selectedIndex].value)

    let l=document.getElementById("second")
    let l1=(l[l.selectedIndex].value)

    let nap=document.getElementById("third")
    let nap1=(nap[nap.selectedIndex].value)

    let sleepp=document.getElementById("four")
    let sleepp1=(sleepp[sleepp.selectedIndex].value)


        //for updating the images and text according to real time.


    if (hour==parseInt(bf1)){
        document.getElementById('a3').innerHTML="GOOD MORNING !! WAKE UP!!";
        
        document.getElementById("final").src="one.jpg"
        
    }
    else if(hour==parseInt(l1)){
        document.getElementById('a3').innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("final").src="lunch.png"
       

    }
    else if(hour==parseInt(nap1)){
        document.getElementById('a3').innerHTML="GOOD EVENING!!";
        document.getElementById("final").src="evening.png"

    }
    else if(hour==parseInt(sleepp1)){
        document.getElementById('a3').innerHTML="GOOD NIGHT!!";
        document.getElementById("final").src="sleep.png"


    }
        

}




