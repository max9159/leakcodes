
var morse =
  { "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--.." }

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  // Result: 95ms Runtime
  // let allMorse = [];
  // words.forEach((val) => {

  //   const charArr = val.split('');
  //   let wordMorse = '';
  //   charArr.forEach((charVal) => wordMorse += morse[charVal]);
  //   allMorse.push(wordMorse);
  // });
  // let distinctMorse = new Set(allMorse);

  // Result: 62ms Runtime
  let results = words.map((val) => {
    return val.split('').map((char)=> morse[char]).join('')
  })

  let distinctMorse = new Set(results); 
  return distinctMorse.size;
};