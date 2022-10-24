function cleanUp(string) {
  let cleanedString = string.replace(/[^a-z]/gi, ' ').replace(/\s+/gi,' ');
  console.log(cleanedString);
}

cleanUp("---what's my +*& line?");