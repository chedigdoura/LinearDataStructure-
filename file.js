function problemeOneSolutionOne(tab1, tab2) {
  let tab = tab1.concat(tab2);
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
      if (tab[i] === tab[j] && i !== j) {
        tab[i] = 0;
        tab[j] = 0;
      }
    }
  }
  for (let k = 0; k < tab.length; k++) {
    sum += tab[k];
  }
  return (sum);
}
console.log(problemeOneSolutionOne([12.5 , 13.6 , 6, 10], [13.6 , 10, 16, 15]));

// function problemeOneSolutionTwo(tab3, tab4){
//   let tab5 = tab4.concat(tab5);
//   const htab = {};
//   for (let i=0 ; i<tab5.length ; i++){
//     if htab[k] == 
//     }
//   }
// }
