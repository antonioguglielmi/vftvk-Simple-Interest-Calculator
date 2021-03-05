function compute()
{

    // Get the values from the form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Calculate the interest
    var interest = principal * years * rate / 100;

    // Calculate end year based on current date and input
    var now = new Date()
    var end_year = now.getFullYear() + years;

}

function show_rate_value(evt) {

    var rate = evt.value;

    document.getElementById("rangeval").innerHTML(rate);

}
        
