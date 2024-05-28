function twoSum(array, target) {
    const map = new Map(); 

    // Parcours du tableau
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]; // Calcul du complément pour atteindre target

        if (map.has(complement)) {
            return [map.get(complement), i]; // Renvoyer les indices des deux nombres
        }

        // Ajouter l'élément actuel à la map avec son indice
        map.set(array[i], i);
    }

    // on return un tableau vide si aucune solution
    return [];
}

// On teste avec l'exemple du partiel 
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 