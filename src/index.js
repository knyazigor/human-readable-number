module.exports = function toReadable (number) {
  if (number === 0) return 'zero'  
  const dict = {
      0: '',
      1: 'one',
      2: 'two', 
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve', 
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',     
  }

  const decimals = {2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',}

  const numberArr = number.toString().split('').reverse()
  return numberArr.reduce((acc, elem, i) => {
    if (i == 0 && elem != 0) acc.push(dict[elem])
    if (i == 1) {
        if (elem == 1) {
            acc.shift()
            acc.push(dict['1' + numberArr[0]])
        }
        else if (elem == 0) return acc
        else acc.push(decimals[elem])
    }
    if (i == 2) acc.push(dict[elem] + ' hundred')
    return acc
  }, []).reverse().join(' ')
  
}
