$( "#update-info" ).submit(function( event ){
    var inputMpList = $('#list-of-MPID').val()
    console.log(inputMpList)

    var mpArray = inputMpList.split(',')
    console.log(mpArray)
  
    const mpValue1 = $('#MP-Value-1').val()
    console.log(mpValue1)
    const mpValue2= $('#MP-Value-2').val()
    console.log(mpValue2)
    const mpValue3= $('#MP-Value-3').val()
    console.log(mpValue3)
  
    const accountSID = $('#SID').val()
    console.log(accountSID)
    //'IRhnL3pEPfNx1356456sFtTh3P5vqLh3o1'
    const authToken = $('#Auth').val()
    console.log(authToken)
    //'_9Fc.nGeJbyAHRPGMFxLhUsX5zSstZdA'
  
    for (i = 0; i < mpArray.length; i++){

 
      var url = `https://${accountSID}:${authToken}@api.impact.com/Advertisers/${accountSID}/MediaPartners/${mpArray[i]}?MPValue1=${mpValue1}&MPValue2=${mpValue2}&MPValue3=${mpValue3}`
      console.log(url)
      
      var data = null;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
         console.log(this.responseText);
        }
       });

    xhr.open("PUT", url);

    xhr.send(data);
   
      
    }
  

    event.preventDefault();
    console.log(`The Form was submitted and ${mpArray.length} Partner's values have been changed. Please spot check the UI to confirm changes`)
    
});





