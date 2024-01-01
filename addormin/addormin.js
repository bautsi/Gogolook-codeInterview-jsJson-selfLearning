function addNumbers(a, b) {
  return a + b;
}

function minusNumbers(a, b) {
  return a - b;
}

function displayAll() {
  var resultadd = document.getElementById("add");
  var resultmin = document.getElementById("min");
  var addsum = addNumbers(6, 9);
  var minsum = minusNumbers(6, 9);
  resultadd.textContent = "69相加 = " + addsum;
  resultmin.textContent = "69相減 = " + minsum;
}

displayAll();
