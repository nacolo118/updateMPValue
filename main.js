function updateMpValues(){
  const mpList = [10579]

  const mpValue1 = 'CORE'
  const mpValue2= ''
  const mpValue3= ''

  const accountSID = 'IRhnL3pEPfNx1356456sFtTh3P5vqLh3o1'
  const authToken = '_9Fc.nGeJbyAHRPGMFxLhUsX5zSstZdA'

  for (i = 0; i < mpList.length; i++){

    const url = `https://${accountSID}:${authToken}@api.impact.com/Advertisers/${accountSID}/MediaPartners/${mpList[i]}?MPValue1=${mpValue1}&MPValue2=${mpValue2}&MPValue3=${mpValue3}`

    console.log(url)


    const xhr = new XMLHttpRequest

    xhr.responseType = 'json'
    xhr.withCredentials = true;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(this.responseText);
      }

      xhr.open('PUT', url);
      xhr.send()
    }
    
  }
  
console.log('updateMPValue ran')
}

updateMpValues();
