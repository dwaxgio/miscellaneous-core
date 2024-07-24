// Función para encontrar dos números que sumen el objetivo
const twoSum = (nums, target) => {
  const map = new Map(); // Mapa para almacenar los números y sus índices
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // calcula el complemento
    if (map.has(complement)) {
      // si el complemento está en el mapa
      return [map.get(complement), i]; // retorna los indices del complemento y el número actual
    }
    map.set(nums[i], i); // Agrega el número actual y si índice al mapa
  }
  return []; // Si no se encuentra, retorna un array vacio
};

// Prueba
const nums = [2,7,11,5];
const target = 12;
const result = twoSum(nums, target);
console.log(result);
