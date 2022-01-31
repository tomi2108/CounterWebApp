var arr = [0];
var arrCount = 1;

function increment(id) {
  arr[id - 1]++;
  document.getElementById("counter" + id).innerText = arr[id - 1];
}

function add_counter() {
  arr.push(0);
}
function add_html_counter() {
  add_counter(arr);
  arrCount++;
  //insert html element
  let cDiv = document.getElementById("counters");

  let div = document.createElement("div");
  div.setAttribute("class", "counter-card");

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Counter number "));

  let span = document.createElement("span");
  span.setAttribute("class", "counter-number");
  span.appendChild(document.createTextNode(arrCount));

  h2.appendChild(span);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "counter");
  h3.setAttribute("id", "counter" + arrCount);
  h3.appendChild(document.createTextNode("0"));

  let inDiv = document.createElement("div");
  inDiv.setAttribute("class", "increment-btn");
  inDiv.setAttribute("onclick", "increment(" + arrCount + ")");
  inDiv.appendChild(document.createTextNode("Increment"));

  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(inDiv);

  cDiv.appendChild(div);
}
