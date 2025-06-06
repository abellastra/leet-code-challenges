function searchInsert(nums: number[], target: number): number {
  let inicio = 0;
  let fin = nums.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    const valorMedio = nums[medio];

    if (valorMedio === target) {
      return medio;
    }
    if (valorMedio < target) {
      inicio = medio + 1;
    }
    if (valorMedio > target) {
      fin = medio - 1;
    }
  }
  return inicio;
}
