var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var specs2 = this.nextElementSibling;
    if (specs2.style.display === "grid") {
      specs2.style.display = "none";
    } else {
      specs2.style.display = "grid";
    }
  });
}


;(function () {
  var queryString = window.location.search
  var href = window.location.href
  var parameters = new URLSearchParams(queryString)
  var age = parameters.get('name')
  var name = parameters.get('email')
  var gender = parameters.get('city')

  var currentUrl = document.querySelector('[data-url-current]')
  var domName = document.querySelector('[data-name]')
  var domAge = document.querySelector('[data-email]')
  var domGender = document.querySelector('[data-city]')

  currentUrl.textContent = 'current URL: ' + href

  if (name && age && gender) {
    domName.textContent = 'Name: ' + name
    domAge.textContent = 'Email: ' + email
    domGender.textContent = 'City:' + city
  }
})()