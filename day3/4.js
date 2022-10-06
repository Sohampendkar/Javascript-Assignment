var countryIndia=document.getElementById("indiaCountry");
var countryAustralia=document.getElementById("australiaCountry");
var countryNewzealand=document.getElementById("newzealandCountry");
var countryEngland=document.getElementById("englandCountry");

document.getElementById("myCountryname").addEventListener("click",function(){
    let countryName=document.querySelector('#myCountryname').value;
    if(countryName == "India")
    {
        countryIndia.style.display="block";
        countryAustralia.style.display="none";
        countryNewzealand.style.display="none";
        countryEngland.style.display="none";
    }
    else if(countryName == "Australia")
    {
        countryIndia.style.display="none";
        countryAustralia.style.display="block";
        countryNewzealand.style.display="none";
        countryEngland.style.display="none";
    }
    else if(countryName=="Newzealand"){
        
        countryIndia.style.display="none";
        countryAustralia.style.display="none";
        countryNewzealand.style.display="block";
        countryEngland.style.display="none";
    }
    else if(countryName=="England")
    {
        
        countryIndia.style.display="none";
        countryAustralia.style.display="none";
        countryNewzealand.style.display="none";
        countryEngland.style.display="block";
    }
    
    

});
