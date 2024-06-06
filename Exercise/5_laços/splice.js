let nums = [1, 2, 3, 4, 5];

// Remover 2 elementos a partir do índice 1
nums.splice(1, 2);

console.log(nums); // Output: [1, 4, 5]

let nums2 = [1, 2, 3, 4, 5];

// Adicionar elementos 6 e 7 na posição 2
nums.splice(2, 0, 6, 7);

console.log(nums2); // Output: [1, 2, 6, 7, 3, 4, 5]