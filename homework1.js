function isAnagram(str1, str2) {
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');

    return s1 == s2;
}

function arrayIntersection(first, ...arrays) {
    return first.filter(elem => Array.from(arguments).every(arr => arr.includes(elem)));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 3], [1, 2, 3, 5]));