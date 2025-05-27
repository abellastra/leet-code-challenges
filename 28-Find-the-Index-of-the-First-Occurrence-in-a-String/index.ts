function strStr(haystack: string, needle: string) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let palabraEncontrada = "";
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        palabraEncontrada += haystack[i + j];
      }
    }
    if (palabraEncontrada === needle) {
      return i;
    }
  }
  return -1;
}
