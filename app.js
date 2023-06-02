const endDate = "3 june 2023 6:08 PM";
document.getElementById("end-date").innerHTML = endDate;




function timer() 
{

    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now;

    var day = Math.floor((diff / (1000 * 3600 * 24))); // day
    day = (day).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    
    var totalHour = Math.floor((diff / (1000 * 3600)));
    
    var hour = (totalHour % 24);   // hour
    hour = (hour).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    var minute = Math.floor((diff / (1000 * 60) % 60));  //minute
   minute =  (minute).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    
    var seconds = Math.floor((diff / 1000) % 60);
    seconds = (seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    if(diff<0){
        return ;
    }


    // selectors

    var input = document.querySelectorAll("input");
    input[0].value = day;
    input[1].value = hour;
    input[2].value = minute;
    input[3].value = seconds;

}

timer();

setInterval(function() {
timer();
},1000
);