const coinInput = document.getElementById('coin');
const currencyInput = document.getElementById('curr');
let submit = document.querySelector('#form');
let request = new XMLHttpRequest();
const result = document.getElementById('result');

submit.addEventListener('click', () =>{
  const coinValue = coinInput.value;
  const currValue = currencyInput.value;
  request.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + currValue +'&ids='+ coinValue + '&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  request.send();
  
})

request.onreadystatechange = () => {
  if(request.readyState === 4){
    let response = JSON.parse(request.response);
    console.log(response);
   
    if(currencyInput.value == "eur"){
          result.textContent = "The price of " + response[0].id + ' is currently € ' + response[0].ath;
    }else if(currencyInput.value == "usd"){
          result.textContent = "The price of " + response[0].id + ' is currently $' + response[0].ath;
    }else{
          result.textContent = "The price of " + response[0].id + ' is currently' + response[0].ath;
    }
  }
    
}
