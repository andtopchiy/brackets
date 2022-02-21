module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let openingBrackets = [];
  let closingBrackets = [];
  for(let i = 0; i < bracketsConfig.length; i++) {
    for(let j = 0; j < bracketsConfig[i].length; j++) {
      if (j === 0) {
        openingBrackets.push(bracketsConfig[i][j]);
      } else if (j%2 === 0) {
        openingBrackets.push(bracketsConfig[i][j]);
      } else if (j%2 !== 0) {
        closingBrackets.push(bracketsConfig[i][j]);
      }
    }
  }
  for (let i = 0; i < str.length; i++) {
    let checkedSymb = str[i];
    if (str.length%2 !== 0) {
      return false;
    }
    if (openingBrackets.includes(checkedSymb)) {
      stack.push(checkedSymb);
    }
    let lastSymb = stack[stack.length-1];
    if (openingBrackets.indexOf(checkedSymb) === closingBrackets.indexOf(lastSymb)) {
      stack.pop(checkedSymb);
    }
  }
  if (stack.length === 0) {
    return true;bracketsbracketsConfig
  } else {
    return false;
  }
}
