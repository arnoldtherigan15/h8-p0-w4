function checkAB(string) {
    var indeksA = [];
    var indeksB = [];
    var selisih = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            indeksA.push(i);
        } else if (string[i] === 'b') {
            indeksB.push(i);
        }
    }
    for (var j = 0; j < indeksA.length; j++) {
        for (var k = 0; k < indeksB.length; k++) {
            selisih.push(indeksA[j] - indeksB[k]);
        }
    }
    for (var l = 0; l < selisih.length; l++) {
        if (selisih[l] === 4 || selisih[l] === -4) {
            return true;
        }
    }
    return false;
}  
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false