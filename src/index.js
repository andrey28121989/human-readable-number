module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tenths = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 

  let string = number.toString();
  const stringLength = string.length;
 
  if (stringLength === 1) {
    const result = units[number];
    return result; 
  } // проверка параметра на числа до 10

  let splittedString = string.split('');
  const firstRank = splittedString[stringLength - 1]; // единицы
  const secondRank = splittedString[stringLength - 2]; //десятки

  if (stringLength === 2 && secondRank === '1') {
    const result = tenths[+firstRank];
    return result;
  }

  const firstRankWord = units[+firstRank]; // слово в массиве единиц
  const secondRankWord = dozens[+secondRank]; // слово в массиве десяток
  const resultString = `${secondRankWord} ${firstRank === '0' ? '' : firstRankWord}`;

  return resultString.trim();

}
