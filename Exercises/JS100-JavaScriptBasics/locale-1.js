function extractLanguage(str) {
  return str[0] + str[1];
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'