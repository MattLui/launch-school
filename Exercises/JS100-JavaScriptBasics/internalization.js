function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function extractLanguage(str) {
  return str[0] + str[1];
}

function extractRegion(str) {
  return str.split('_')[1]
            .split('.')[0];
}

function localGreet(locale) {
  if (extractLanguage(locale) === 'en') {
    if (extractRegion(locale) === 'US') {
      return 'Hey!';
    } else if (extractRegion(locale) === 'GB') {
      return 'Hello!';
    } else if (extractRegion(locale) === 'AU') {
      return 'Howdy!';
    } 
  } else {
    return greet(extractLanguage(locale));
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'