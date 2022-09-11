let display = document.querySelector('.calculator__display')
let displayCurrentValue     = [];

// These two arrays are used to store number Inputs & their respective Operators
let calculationNumbers      = [];
let calculationOperators    = ['placeholder'];

// ----- ----- Event Handler

  // Attach an event handler to every number Key to add its respective number to the display
    document.querySelectorAll('.numberKey').forEach(item => {
      item.addEventListener('mouseup', event => {
        //console.log(event);
        displayCurrentValue.push(event.target.innerHTML);
        
        //console.log("current Value is: "+displayCurrentValue);
        display.innerHTML = displayCurrentValue.join('');
      })
    })

  // Clear the Display by pressing AC
    document.querySelectorAll('.clear').forEach(item => {
      item.addEventListener('mouseup', event => {
          
        // Needs full reset to purge all variables & the display
        fullReset();
      })
    })

  // To be named     
    document.querySelectorAll('.key--equal').forEach(item => {
      item.addEventListener('mouseup', event => {
        console.log("you wanna calc some stuff huh?");  
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
      calcStep(event);

      let currentCalcValue = 0;
      console.log("The type of currentCalcValue is: "+ typeof currentCalcValue);

      for (let i = 0 ; i <= calculationNumbers.length ; i++) {
        console.log("--------------------------------------");
        console.log("We are in round: " + i);
        console.log(calculationNumbers);
        console.log(calculationOperators);
        console.log("The applicable Operator is: "+calculationOperators[i+1]);

        switch (calculationOperators[i+1]) {
          case "+":
            console.log("We are adding "+currentCalcValue+" to "+calculationNumbers[i]);
            currentCalcValue += Number(calculationNumbers[i]);
            console.log("The result is: "+currentCalcValue);
            
            break;
        
          case "-":
            break;
        
          case "&times;":
            break;
        
          case "÷":
            break;
          
          default:
            break;
        }
      }
      writeToDisplay(currentCalcValue);
      //console.log(calculationNumbers);
      //console.log(calculationOperators);
    }

  // This function writes the current display value into an array for further calculation
    function calcStep (event) {
      calculationNumbers.push(display.innerHTML);
      calculationOperators.push(event.target.innerHTML);
    }

// ----- ----- Simple Calculations

  // Perform simple addition
    function add (val1, val2){
      console.log('addition function triggered');
      currentCalcValue = val1 + val2;
    }

  // Perform simple subtraction
    function subtract(){
      console.log('subtraction function triggered');
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