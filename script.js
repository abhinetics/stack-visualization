const stack = [];

// const numberInput = document.getElementById("numberInput");

// const numberInput = document.getElementById("numberInput").value;
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
 
function push(){

    if (document.getElementById("numberInput").value === "") {
      alert("Please enter a number");
      return;
    }
    const numberInput = document.getElementById("numberInput");

    console.log(numberInput.value);
  const number = parseInt(numberInput.value);
  console.log(numberInput);

  stack.push(number);
  console.log(stack);
  document.getElementById("numberInput").value= "";

  updateStackVisualization();
}



function pop(){
  stack.pop();
  console.log(stack);
  updateStackVisualization();
}

function updateStackVisualization() {
const stackElement = document.getElementById("stack");

  stackElement.innerHTML = "";
  for (let i = stack.length - 1; i >= 0; i--) {
    const element = document.createElement("div");
    element.classList.add("stack-element");
    element.innerHTML = stack[i];
    element.style.backgroundColor = getRandomColor(i);
    element.style.opacity = "0.7";
    stackElement.appendChild(element);
  }
  
}

function getRandomColor(j) {
    const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"];
    return colors[j % colors.length];
  }
  
