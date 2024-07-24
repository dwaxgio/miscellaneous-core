const bubbleSort = (arr) => {
  let n = arr.length;

  // recorre el array n-1 veces
  for (let i = 0; i < n; i++) {
    // recorre el array hasta el ultimo elemento no ordenado
    for (let j = 0; j < n - i - 1; j++) {
      // si el elemento actual es mayor que el siguiente
      if (arr[j] > arr[j + 1]) {
        // intercambia los elementos
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // retorna el array ordenado
  return arr;
};

// prueba de la funcion de la ordenacion por burbuja
const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr));
