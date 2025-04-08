var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let primeraPalabra = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let siguientePalabra = strs[i];
    let j = 0;
    while (
      j < primeraPalabra.length &&
      j < siguientePalabra.length &&
      siguientePalabra[j] === primeraPalabra[j]
    ) {
      j++;
    }

    primeraPalabra = primeraPalabra.slice(0, j);

    if (primeraPalabra === "") {
      return "";
    }
  }
  return primeraPalabra;
};
