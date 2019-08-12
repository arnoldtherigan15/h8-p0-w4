function cariModus(arr) {
    arr.sort();
    var angkaSama = [[]];
    var indeks = 0;
    var arrLength = 0;
    var arrLengthindex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            angkaSama[indeks].push(arr[i]);
        } 
        else {
            angkaSama.push([]);
            angkaSama[indeks].push(arr[i]);
            indeks++;
        }
    }
    for (var j = 0; j < angkaSama.length; j++) {
        if (angkaSama[j].length > arrLength) {
            arrLength = angkaSama[j].length;
            arrLengthindex++;
        }
    }
    if (angkaSama[arrLengthindex].length === 1) {
        return -1;
    } else if (angkaSama[arrLengthindex].length === 0) {
        return -1
    }
    return angkaSama[arrLengthindex][0];
}
  
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1