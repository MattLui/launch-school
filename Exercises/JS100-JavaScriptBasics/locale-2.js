function extractRegion(str) {
  return str.split('_')[1]
            .split('.')[0];
}
console.log(extractRegion('en_US.UTF-8'));  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'