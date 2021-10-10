function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    today = new Date();
	finalYear = parseInt(today.getFullYear()) + parseInt(years);

    if (principal > 0) {
    document.getElementById("result").innerHTML = 
    "<br><br>If you deposit:<font class='deposit'>"+principal+"</font><br>With a rate of:<font class='result'>"+rate+"%</font>,<br>Your interest will be:<font class='result'>"+interest+"</font>,<br>And your last year will be:<font class='result'>"+finalYear+"</font>";
    } else{
        document.getElementById("result").innerHTML = "<br><font class='negative'>please enter a positive number</br>"
    }
    
}
     
function updateRate() 
{
    var rate = document.getElementById("rate").value;
    console.log(rate)
    document.getElementById("rate_value").innerText=rate;
}