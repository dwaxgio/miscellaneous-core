// Función de búsqueda binaria en un array ordenado
const binarySearch = (arr, target) => {
  let left = 0; // Límite izquierdo del array
  let right = arr.length - 1; // Límite derecho del array

  // Mientras el límite izquierdo no supere al derecho
  while (left <= right) {
    // Calcula el índice medio
    const mid = Math.floor((left + right) / 2);

    // Si el elemento medio es igual al objetivo
    if (arr[mid] === target) {
      // Retorna el índice del elemento encontrado
      return mid;
    }

    // Si el objetivo es mayor que el elemento medio, ignora la mitad izquierda
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // Si el objetivo es menor que el elemento medio, ignora la mitad derecha
      right = mid - 1;
    }
  }

  // Si no se encuentra el objetivo, retorna -1
  return -1;
};

// Prueba de la función de búsqueda binaria
const arr = [1, 2, 3, 4, 5];
const target = 5;
const result = binarySearch(arr, target);
console.log(result);
