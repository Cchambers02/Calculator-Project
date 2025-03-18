const btnValues = ["AC", "+/-", "%", "/",
    "7", "8", "9", "X",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

let A = 0;
let operator = null;
let B = null;

const rightSymbols = ["+", "-", "X", "/", "=" ];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display")

    for (let i = 0; i < btnValues.length; i++){
        let value = btnValues[i];
        let button = document.createElement("button");
        button.innerText = value;

    if (rightSymbols.includes(value)){
        button.style.backgroundColor = "#FF9500";
    }
    else if (topSymbols.includes(value)){
        button.style.backgroundColor = "lightgray";
        button.style.color = "gray";
    }

    button.addEventListener("click", function(){
        // if (rightSymbols.includes(value)){
        //     display.value 
        // }

        if (value === "AC") {
            display.value = "";
        }
        else if (value == "="){
            display.value = eval(display.value.replace("X", "*"))
        }
        else{
            display.value += value;
        }
    });

        // adding buttons to Calculator
        document.getElementById("buttons").appendChild(button);
}
