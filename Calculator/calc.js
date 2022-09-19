// Fetches the calculator display element and
let display = document.querySelector('.calculator__display')
let displayCurrentValue     = [];

// These two arrays are used to store number Inputs & their respective Operators
let calculationNumbers      = [];
let calculationOperators    = ['placeholder'];
let currentCalcValue;

// ----- ----- Event Handler

  // Attach an event handler to every number Key to add its respective number to the display
    document.querySelectorAll('.numberKey').forEach(item => {
      item.addEventListener('mouseup', event => {
        
        displayCurrentValue.push(event.target.innerHTML);
        display.innerHTML = displayCurrentValue.join('');
      })
    })

  // Attach EH to AC button to trigger the full Reset function to clear the Display
    document.querySelectorAll('.clear').forEach(item => {
      item.addEventListener('mouseup', event => {
          
        // Needs full reset to purge all variables & the display
        fullReset();
      })
    })

  // Attach EH to equal Key to trigger calculation
    document.querySelectorAll('.key--equal').forEach(item => {
      item.addEventListener('mouseup', event => {  
        calculate();
      })
    })

  // Attach EH to all operator keys + - x ÷
    document.querySelectorAll('.key--operator').forEach(item => {
      item.addEventListener('mouseup', event => {
        
        calcStep(event);
        resetDisplay();
        
      })
    })

  // To be named
    function calculate(){
      console.log("Calculate function called");
      
      // Write last number in the display into the calcArray
      repeatLastOperatorToArray();
      calcStep(event);

      currentCalcValue = Number(calculationNumbers[0]);
      console.log("The type of currentCalcValue is: "+ typeof currentCalcValue);

      for (let i = 0 ; i <= calculationNumbers.length - 1; i++) {
        printRoundInfo(i, calculationNumbers, calculationOperators);

        if (i === 0) {
          currentCalcValue = Number(calculationNumbers[0]);
          printGuardClauseExplanation(i, currentCalcValue);
        }

        // this can be done better but whatevs
        switch (calculationOperators[i]) {
          case "+":
            printFunctionTrigger("adding", calculationNumbers[i], currentCalcValue);
            currentCalcValue += Number(calculationNumbers[i]);
            printResultAndType(currentCalcValue);
            break;
        
          case "-":
            printFunctionTrigger("subtracting", calculationNumbers[i], currentCalcValue);
            currentCalcValue -= Number(calculationNumbers[i]);
            printResultAndType(currentCalcValue);
            break;
        
          case "&times;":
            break;
        
          case "÷":
            break;
          
          case "=":
            console.log("The Result is: "+currentCalcValue);
            break;

          case "placeholder":
            console.log("Placeholders dont get calculated");  

          default:
            console.log("You fucked up in the operation handling");
            break;
        }
      }
      writeToDisplay(currentCalcValue);
    }

  

// ----- ----- Simple Calculations (will later contain the individual operations triggered by above switch case)

  // Perform simple addition
    function add (){
      
    }

  // Perform simple subtraction
    function subtract () {
      
    }

  // Perform simple multiplication
    function multiply(){
      console.log('multiplication function triggered');
    }

  // Perform simple division
    function divide(){
      console.log('division function triggered');
    }

// ----- ----- Reset Functions ----- -----

  // Reset the Display
    function resetDisplay(){
      display.innerHTML = '0';
      displayCurrentValue = [];
    }

  // Reset all Variables
    function resetAllVariables(){

    }

  // Reset Everything
    function fullReset(){
      resetDisplay();
      resetAllVariables();
    }

// ----- ----- Display Manipulation

function writeToDisplay(value){
  console.log("Write to display triggered with value: "+value);
  display.innerHTML = value;
}

// ------ ----- Calc Array Manipulations

  // Write last used operator into array again (temporary function - needs refactoring)
    function repeatLastOperatorToArray () {
      calculationOperators.push(calculationOperators[calculationOperators.length - 1]);
    }

  // Writes the current Number into the Numbers Array
    function writeDisplayValueToNumberArray(){
      calculationNumbers.push(display.innerHTML);
    }

  // Writes the current Operator into the Operator Array
    function writeCurrentOperatorToOperatorArray(event){
      calculationOperators.push(event.target.innerHTML);
    }


  // This function writes the current display value into an array for further calculation
    function calcStep (event) {
      writeDisplayValueToNumberArray();
      writeCurrentOperatorToOperatorArray(event);

    }


// ----- ----- Generic Console Prints

  // Prints the Result of an Operation and its type
    function printResultAndType(result){
      console.log("The result is: " + result + " and its type is: " + typeof result);
    }

  // Guard Clause print
    function printGuardClauseExplanation(i, currentCalcValue) {
      console.log("Current Calc Value set to " + currentCalcValue + " and of type " + typeof currentCalcValue + " because i equals " + i);
    }

  // Outputs which operation is being performed and the operation elements associated
    function printFunctionTrigger (operation, calculationNumbers, currentCalcValue) {
      
      let operator;

      switch (operation) {
        case "adding":
          operator = " to ";
          break;
        case "subtracting":
          operator = " from ";
          break
        default:
          break;
      }

      console.log("We are " + operation + " " + typeof Number(calculationNumbers) +" "+ Number(calculationNumbers) + operator + typeof currentCalcValue + " " + currentCalcValue);
    }

  // Prints the info of the current Num & Operator round
    function printRoundInfo(i, calculationNumbers, calculationOperators){
      console.log("------- We are in Round " + i);
      console.log(calculationNumbers);
      console.log(calculationOperators);
      console.log("The applicable Operator is: "+calculationOperators[i]);
    }