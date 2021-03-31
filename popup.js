var cases = document.getElementById('case-value')
var active = document.getElementById('active-case-value')
var deaths = document.getElementById('deaths-value')
var recovery = document.getElementById('recovery-value')

fetch('https://corona.lmao.ninja/v2/all?yesterday')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
    cases.innerHTML = myJson['cases'];
    active.innerHTML = myJson['active'];
    deaths.innerHTML = myJson['deaths'];
    recovery.innerHTML = myJson['recovered'];
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });