
var value = ""; 
        var operator = ""; 
        var newNumber = false; 

        function buttonclick(val) {
            var screen = document.getElementById("screen");
            if (newNumber) {
                screen.value = val;
                newNumber = false;
            } else {
                screen.value += val;
            }
            console.log("Number pressed: " + val);
        }

        function clearDisplay() {
            document.getElementById("screen").value = "";
            value = "";
            operator = "";
            newNumber = false;
        }

        function operatorclick(oprValue) {
            value = document.getElementById("screen").value;
            operator = oprValue;
            newNumber = true;
            console.log("Operator pressed: " + oprValue);
        }

        function equalClick() {
            var screen = document.getElementById("screen");
            var secondValue = screen.value;
            var result;
            switch (operator) {
                case '+':
                    result = parseFloat(value) + parseFloat(secondValue);
                    break;
                case '-':
                    result = parseFloat(value) - parseFloat(secondValue);
                    break;
                case '*':
                    result = parseFloat(value) * parseFloat(secondValue);
                    break;
                case '/':
                    result = parseFloat(value) / parseFloat(secondValue);
                    break;
                default:
                    result = "Error";
            }
            console.log("Result: " + result);
            screen.value = result;
            value = ""; // Reset the value
            operator = ""; // Reset the operator
            newNumber = true; // Ready for new input
        }