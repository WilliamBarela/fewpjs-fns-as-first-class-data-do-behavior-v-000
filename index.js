/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let [hour, ] = timeString.split(separator=":");
  let greeting;
  hour = parseInt(hour);
  
  if(hour < 12){
    greeting = "Good Morning";  
  } else if(hour > 17){
    greeting = "Good Evening";
  } else {
    greeting = "Good Afternoon";
  }
  
  return(greeting);
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
 let greeting = document.querySelector('h1#greeting');
 greeting.innerHTML = message;
}
