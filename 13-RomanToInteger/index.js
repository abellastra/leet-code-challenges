var romanToInt = function (s) {
  let resultado = 0;

  let numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let valorActual = numerosRomanos[s[i]];
    let valorSiguiente = numerosRomanos[s[i + 1]];

    if (valorActual < valorSiguiente) {
      resultado = resultado - valorActual;
    } else {
      resultado = resultado + valorActual;
    }
  }
  return resultado;
};
