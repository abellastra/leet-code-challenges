var isPalindrome = function (x) {
  let numero = x;
  let invertido = 0;
  while (numero > 0) {
    invertido = invertido * 10 + (numero % 10);
    numero = Math.floor(numero / 10);
  }
  if (x === invertido) {
    return true;
  } else {
    return false;
  }
};

