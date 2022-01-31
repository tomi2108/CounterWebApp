var arr = [0];
var arrCount = 1;
var removed = [];

function increment(id) {
  arr[id - 1]++;
  document.getElementById("counter" + id).innerText = arr[id - 1];
}

function decrement(id) {
  arr[id - 1]--;
  document.getElementById("counter" + id).innerText = arr[id - 1];
}

function reset(id) {
  arr[id - 1] = 0;
  document.getElementById("counter" + id).innerText = arr[id - 1];
}
function resetAll() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
    if (!(i in removed)) {
      document.getElementById("counter" + (i + 1)).innerText = 0;
    }
    arrCount = 0;
  }
}

function addCounter() {
  arr.push(0);
}
function removeHtmlCounter(id) {
  arr[id - 1] = "r";
  let elem = document.getElementById("counter-card" + id);
  removed.push(id);
  elem.remove();
}

function addHtmlCounter() {
  addCounter(arr);
  arrCount++;
  //insert html element
  let cDiv = document.getElementById("counters");

  let div = document.createElement("div");
  div.setAttribute("class", "counter-card");
  div.setAttribute("id", "counter-card" + arrCount);

  let closeBtn = document.createElement("div");
  closeBtn.setAttribute("class", "close btn");
  closeBtn.setAttribute("onclick", "removeHtmlCounter(" + arrCount + ")");
  closeBtn.appendChild(document.createTextNode("X"));

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Counter number "));

  let span = document.createElement("span");
  span.setAttribute("class", "counter-number");
  span.setAttribute("id", "titleCounter");
  span.appendChild(document.createTextNode(arrCount));

  h2.appendChild(span);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "counter");
  h3.setAttribute("id", "counter" + arrCount);
  h3.appendChild(document.createTextNode("0"));

  let resetBtn = document.createElement("div");
  resetBtn.setAttribute("class", "reset btn");
  resetBtn.setAttribute("onclick", "reset(" + arrCount + ")");
  resetBtn.appendChild(document.createTextNode("Reset"));

  let incBtn = document.createElement("div");
  incBtn.setAttribute("class", "increment btn");
  incBtn.setAttribute("onclick", "increment(" + arrCount + ")");
  incBtn.appendChild(document.createTextNode("Increment"));

  let decBtn = document.createElement("div");
  decBtn.setAttribute("class", "decrement btn");
  decBtn.setAttribute("onclick", "decrement(" + arrCount + ")");
  decBtn.appendChild(document.createTextNode("Decrement"));

  div.appendChild(closeBtn);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(resetBtn);
  div.appendChild(incBtn);
  div.appendChild(decBtn);

  cDiv.appendChild(div);
}
