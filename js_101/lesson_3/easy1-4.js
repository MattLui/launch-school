let munstersDescription = "the Munsters are CREEPY and Spooky.";

function lowerCaseExceptFirstLetter (str) {
  console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
}

lowerCaseExceptFirstLetter(munstersDescription);

// => The munsters are creepy and spooky.