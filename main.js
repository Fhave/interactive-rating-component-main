var ts = document.querySelector('#thank-state');
var rs = document.querySelector('#rating-state');
var rating = document.querySelector('.rating');

function ratings() {
  var rates = document.getElementsByTagName('span');
  var rated = document.querySelector('.rated');
  for (let i = 0; i < rates.length; i++) {
    rates[i].addEventListener('click', () => {
      let rate = rates[i].innerHTML;
      for (let i = 0; i < rates.length; i++) {
        rates[i].classList.contains('click')
        rates[i].classList.remove('click');
      }
      rates[i].classList.add('click');
      rated.innerHTML = rate;
    }); 
  }
}

function next() {
  rs.classList.add('hidden');
  ts.classList.remove('hidden');
}

ratings()