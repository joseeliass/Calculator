const $ = function (id) {
  return document.getElementById(id);
};

let result = $("result");
let n1 = 0;
let operator = "";
let dot = "0";

function AC() {
  result.textContent = "0";
  n1 = "";
  operator = "";
}

function Num(num) {
  if (
    result.textContent == "0" ||
    result.textContent == "+" ||
    result.textContent == "-" ||
    result.textContent == "*" ||
    result.textContent == "/"
  )
    result.textContent = "";
  result.textContent += num;
  n2 = result.textContent;
}

function Plus() {
  Equal();
  let n2 = parseFloat(result.textContent);
  n1 = parseFloat(n2);
  result.textContent = "+";
  n2 = "0";
  operator = "+";
}

function Minus() {
  Equal();
  let n2 = parseFloat(result.textContent);
  n1 = parseFloat(n2);
  result.textContent = "-";
  n2 = "0";
  operator = "-";
}

function Multiply() {
  Equal();
  let n2 = parseFloat(result.textContent);
  n1 = parseFloat(n2);
  result.textContent = "*";
  n2 = "0";
  operator = "*";
}

function Divide() {
  Equal();
  let n2 = parseFloat(result.textContent);
  n1 = parseFloat(n2);
  result.textContent = "/";
  operator = "/";
}

function Percentage() {
  let n2 = parseFloat(result.textContent);
  n1 = parseFloat(n2);
  n1 /= 100;
  n2 = "0";
  result.textContent = n1;
}

function PlusMinus() {
  let n2 = parseFloat(result.textContent);
  n2 *= -1;
  result.textContent = n2;
}

function Equal() {
  if (operator == "+") {
    let n2 = parseFloat(result.textContent);
    n1 += n2;
    result.textContent = n1;
  } else if (operator == "*") {
    let n2 = parseFloat(result.textContent);
    n1 *= n2;
    result.textContent = n1;
  } else if (operator == "/") {
    let n2 = parseFloat(result.textContent);
    n1 /= n2;
    result.textContent = n1;
  } else if (operator == "-") {
    let n2 = parseFloat(result.textContent);
    n1 -= n2;
    result.textContent = n1;
  }
}
