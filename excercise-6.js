function digitPerkalianMinimum(angka) {
    var pembagi = [];
    var pengali = [];
    var gabungan = [];
    
    // var lengthAngka = String(angka).length;
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            pembagi.push(String(i));
        }
    }
    for (var j = 0; j < pembagi.length; j++) {
        pengali.push(String(angka/pembagi[j]));
    }
    for (var k = 0; k < pembagi.length; k++) {
        gabungan.push([pembagi[k]+pengali[k]]);
    }
    var lengthArr = gabungan[0][0].length;
    for (var l = 1; l < gabungan.length; l++) {
        if (gabungan[l][0].length < lengthArr) {
            lengthArr = gabungan[l][0].length;
        }
    }
    return lengthArr;
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2