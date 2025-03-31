var isValid = function (s) {
  const par = { "{": "}", "[": "]", "(": ")" };
  const abierta = [];
  for (let caracter of s) {
    if (["{", "[", "("].includes(caracter)) {
      abierta.push(caracter);
    } else {
      if (
        abierta.length === 0 ||
        par[abierta[abierta.length - 1]] !== caracter
      ) {
        return false;
      }
      abierta.pop();
    }
  }
  return abierta.length === 0;
};
