let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let i = 0;
while (i < fish.length) {
  console.log (fish[i]);
  if (fish[i] === 'Nemo') {
    break;
  }
  i += 1;
}