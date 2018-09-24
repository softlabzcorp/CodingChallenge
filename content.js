var totalFundedAmount = 5000; 
var totalDonors = 0;

$(document).ready(function(){

    $("#alert2message").hide();
    
    $("#giveNow").click(function(){
      
        if (totalFundedAmount <= 0)
            return;
        var currentDonation = document.getElementById("a").value; 
        if (currentDonation < 5)
        {
            $("#alert").fadeOut(800, function(){
                $("#alertmessage").hide();
                $("#alert2message").show();
                $("#alert").fadeIn(800);
            });
            return;
        } 
        else
        {
            $("#alert").fadeOut(800, function(){
                $("#alert2message").hide();
                $("#alertmessage").show();
                $("#alert").fadeIn(800);                
            });            
        }
        if (totalFundedAmount - currentDonation < 0)
            return;
        var progressIncrease = currentDonation / totalFundedAmount * 400
        if ($("#progress_bar").width() + progressIncrease > 419)
            progressIncrease = 0;
        totalFundedAmount -= currentDonation; 
        $("#alert").fadeOut(800, function(){
            document.getElementById("totalFundedAmount").innerHTML = (totalFundedAmount).toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 0});
            $("#alert").fadeIn(800);
            
            $("#mask").width($("#mask").width() - progressIncrease);
            $("#progress_bar").width($("#progress_bar").width() + progressIncrease);            
        });           

        totalDonors++;
        document.getElementById("totalFundedDonors").innerHTML = totalDonors;
    });
    
});